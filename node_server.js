var express = require('express');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var app = express();
var fs = require('fs');
var _ = require('underscore');
var path = require('path');
var mime = require('mime');
var cache = {};
var cache_config = true;
server = app.listen(9090);
var io = require('socket.io')(server);
var hashName = new Array();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

///后台数据库模块
var mysql = require('mysql');
const { resourceLimits } = require('worker_threads');
const { result } = require('underscore');
const { ADDRGETNETWORKPARAMS } = require('dns');
var connection = mysql.createConnection({
    host: '8.131.54.221',
    user: 'root',
    password: 'xxxxxxxxx',
    database: 'wuziqi'
});
connection.connect();

///session 模块
var identityKey = 'skey';
app.use(session({
    name: identityKey,
    secret: 'recommand 128 bytes random string', // 用来对session id相关的cookie进行签名
    store: new FileStore(), // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    resave: false, // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 60000 * 1000 // 有效期，单位是毫秒
    }
}));

app.use('/table', function (req, res, next) { ///获取牌局信息
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    connection.query(`SELECT user,table_id from player where table_id is not null`, function (error, results, fields) {
        var dataString = JSON.stringify(results);
        var data_mysql = JSON.parse(dataString);
        res.end(JSON.stringify(data_mysql));
    });
});


function Send_to_againist(user, msg) {
    function callback(toName) {
        console.log(toName);
        if (toId = hashName[toName]) {
            console.log([toName, msg, toId]);
            console.log("发送消息");
            var toSocket = io.sockets.to(toId);
            toSocket.emit('message', msg);
        }
    }
    connection.query(`SELECT user FROM player where user<>"${user}" AND table_id=(SELECT table_id FROM player WHERE user="${user}")`, function (error, results, fields) {
        if (error)
            throw error;
        var dataString = JSON.stringify(results);
        var data_mysql = JSON.parse(dataString);
        if (data_mysql.length == 0)
            return;
        callback(data_mysql[0].user);
    });
}

app.use('/join', function (req, res, next) { ///注册接口
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    connection.query(`UPDATE player set table_id=${req.query['table_id']} WHERE user="${req.session.loginUser}"`, function (error, results, fields) {
        if (error)
            res.end(JSON.stringify({ "msg": "加入失败" }));
        else {
            Send_to_againist(req.session.loginUser, { "msg": "用户加入", "data": req.session.loginUser });
            res.end(JSON.stringify({ "msg": "加入成功" }));
        }
    });
});

app.use('/level', function (req, res, next) { ///注册接口
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    Send_to_againist(req.session.loginUser, { "msg": "用户离开", "data": req.session.loginUser });
    connection.query(`UPDATE player set table_id=null WHERE user="${req.session.loginUser}"`, function (error, results, fields) {
        if (error)
            res.end(JSON.stringify({ "msg": "加入失败" }));
        else {
            res.end(JSON.stringify({ "msg": "加入成功" }));
        }
    });
});

app.use('/get_againist', function (req, res, next) {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    var user = req.session.loginUser;
    connection.query(`SELECT user FROM player where user<>"${user}" AND table_id=(SELECT table_id FROM player WHERE user="${user}")`, function (error, results, fields) {
        if (error)
            return;
        var dataString = JSON.stringify(results);
        var data_mysql = JSON.parse(dataString);
        if (data_mysql.length == 0)
            res.end(JSON.stringify({ "msg": "查询成功", "data": "空" }));
        else
            res.end(JSON.stringify({ "msg": "查询成功", "data": data_mysql[0].user }));
    });
});

app.use('/check_login', function (req, res, next) { ///注册接口
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    if (req.session.loginUser == null)
        res.end(JSON.stringify({ "msg": "未登录" }));
    else
        res.end(JSON.stringify({ "msg": "已登录", "user": req.session.loginUser }));
});

app.use('/update', function (req, res, next) { ///注册接口
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    var user = req.session.loginUser;
    if (user != null) {
        hashName[user] = req.query['ws_id'];
        res.end(JSON.stringify({ "msg": "更新成功" }));
    }
    else
        res.end(JSON.stringify({ "msg": "更新失败" }));
});

app.use('/register', function (req, res, next) { ///注册接口
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    connection.query(`INSERT INTO player(user,passwd) value ("${req.query['user']}","${req.query['passwd']}")`, function (error, results, fields) {
        if (error) {
            res.end(JSON.stringify({ "msg": "用户名已存在！" }));
            return;
        }
        else {
            res.end(JSON.stringify({ "msg": "注册成功！" }));
            return;
        }
    });
})

app.use('/login', function (req, res, next) { ///登陆接口
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    connection.query(`SELECT * FROM player where user="${req.query['user']}" and passwd="${req.query['passwd']}"`, function (error, results, fields) {
        if (error) {
            return;
        }
        if (results.length == 0) {
            res.end(JSON.stringify({ "msg": "账号或密码错误！" }));
            return;
        }
        else {
            req.session.loginUser = req.query['user'];
            res.end(JSON.stringify({ "msg": "登陆成功！" }));
        }
    });
})

app.use('/', function (request, response) {
    var filePath = false;
    if (request.url == '/') {
        filePath = './index.html';
    }
    else {
        filePath = '.' + request.url;
    }
    filePath = filePath.split("?")[0];
    serveStatic(response, cache, filePath);
});


//socket io模块
io.on('connection', function (socket) {
    console.log('新加入一个连接。');

    socket.on('msg', function (data) {
        console.log(data);
        Send_to_againist(data.user, data);
    });

    socket.on('place', function (data) {
        console.log(data);
        Send_to_againist(data.user, data);
    });

    // 当关闭连接后触发 disconnect 事件
    socket.on('disconnect', function () {
        console.log('断开一个连接。');
    });
});

///静态文件处理模块
function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: Resource not found');
    response.end();
}
//文件数据服务
function sendFile(response, filePath, fileContents) {
    response.writeHead(200, { 'Contet-Type': mime.getType(path.basename(filePath)) });
    response.end(fileContents);
}
//静态文件服务
function serveStatic(response, cache, absPath) {
    if (cache[absPath] && cache_config) {
        sendFile(response, absPath, cache[absPath]);
    } else {
        fs.exists(absPath, function (exists) {
            if (exists) {
                fs.readFile(absPath, function (err, data) {
                    if (err) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data);
                    }
                });
            } else {
                send404(response);
            }
        });
    }
}
