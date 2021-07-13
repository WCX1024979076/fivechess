#### 联机版五子棋（基于Node.js+Mysql实现）

##### 效果展示

[http://8.131.54.221:9090/](http://8.131.54.221:9090/)

![image-20210714001044284](https://rawgithub.tim-wcx.workers.dev/WCX1024979076/image1/master/img/20210714001046.png)

![image-20210714001119254](https://rawgithub.tim-wcx.workers.dev/WCX1024979076/image1/master/img/20210714001119.png)

##### 数据库建立

```mysql
create database wuziqi;
```

```mysql
create table player
(
	user varchar(100),
	passwd varchar(100),
    table_id int,
    primary key(user)
)
```

```mysql
delimiter $$
create trigger UpdateTable
before update on `player` for each row
BEGIN
	declare table_count int;
   	if new.table_id is not null AND new.table_id <> 0 THEN
        SELECT count(user) INTO table_count FROM `player` where table_id=new.table_id;
        if table_count=2 THEN
            SIGNAL SQLSTATE 'HY000' SET MESSAGE_TEXT = "已被占用";
        END IF;
	END IF;
END;
$$
delimiter ;
```

##### 代码运行环境配置

利用npm安装所缺少的包，后在根目录下执行以下命令即可：

```
node node_server.js
```

##### 常见运行错误

1. mime.lookup() is not a function

   解决方法：将mime.lookup() 更换为mime.getType()

2. Error: Cannot find module 'worker_threads'

   解决方法： 用一下命令运行工程

   ```
   node --experimental-worker ./node_server.js 
   ```
