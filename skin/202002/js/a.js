document.writeln('<!--[if lt IE 9]><script src="https://cdn.bootcdn.net/ajax/libs/html5shiv/r29/html5.min.js"></scr'+'ipt><![endif]-->');
document.writeln('<!--[if lt IE 9]><script src="https://cdn.bootcdn.net/ajax/libs/livingston-css3-mediaqueries-js/1.0.0/css3-mediaqueries.min.js"></scr'+'ipt><![endif]-->');
//document.writeln('<!--[if lt IE 9]><script src="/skin/202002/js/html5.js"></scr'+'ipt><![endif]-->');
//document.writeln('<!--[if lt IE 9]><script src="/skin/202002/js/css3-mediaqueries.js"></scr'+'ipt><![endif]-->');

//document.writeln('<script src="/skin/202002/js/jquery.min.js?ver=1.10.1"></scr'+'ipt>');
document.writeln('<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.10.1/jquery.min.js?ver=1.10.1"></scr'+'ipt>');

//document.writeln('<script src="/skin/202002/js/jquery.lazyload.js?ver=2019.09.19"></scr'+'ipt>');
document.writeln('<script src="https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js?ver=2019.09.19"></scr'+'ipt>');

//document.writeln('<script src="/skin/202002/js/jquery-ias.js?ver=2.2.1"></scr'+'ipt>');  //流式分页插件
document.writeln('<script src="/skin/202002/js/slides.js"></scr'+'ipt>');
document.writeln('<script src="/skin/202002/js/wow.js"></scr'+'ipt>');
document.writeln('<script src="/skin/202002/js/tipso.js"></scr'+'ipt>');
document.writeln('<script src="/skin/202002/js/script.js"></scr'+'ipt>');
document.writeln('<script src="/skin/202002/js/flexisel.js"></scr'+'ipt>');
document.writeln('<script src="/skin/202002/js/superfish.js"></scr'+'ipt>');



//gg自适应广告
document.writeln('<script data-ad-client="ca-pub-5781698608883961" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scr'+'ipt>');

//提交百度收录
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);	
   //提供360收录
   var src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";document.write('<script src="' + src + '" id="sozz"></script>');
})();


function a(id) {
  if(id==='yulu'){
      //document.writeln('<script src="/skin/202002/js/yulu.js?ver=2020.12.6"></scr'+'ipt>');
      var bottom_yulu = ["<a href='/jiangzuo/lianzhujiqiao/277.html'>五子棋几种单一棋形之间的关系</a>","<a href='/jiangzuo/kaijujieshao/98.html'>联众棋手说妖刀</a>","<a href='/jiangzuo/rumenzhishi/50.html'>中国五子棋段级位制</a>","<a href='/jiangzuo/kaijujieshao/97.html'>彭建国：如何下好开局</a>","<a href='/jiangzuo/lianzhujiqiao/217.html'>五子棋抓禁手的方法</a>","<a href='/jiangzuo/rumenzhishi/13.html'>Email世界连珠通讯战简介</a>","<a href='/jiangzuo/lianzhujiqiao/240.html'>五子棋要柔和一点</a>","<a href='/jiangzuo/lianzhujiqiao/295.html'>五子棋残局技巧</a>","<a href='/jiangzuo/dingshiyanjiu/118.html'>五手两打系列教程：恒星局（新手必读）</a>","<a href='/jiangzuo/lianzhujiqiao/257.html'>菩提本非树</a>","<a href='/yulu/27030.html'>兔斯基经典语录</a>"]; 
      $('#bottom_yulu').html(bottom_yulu[Math.floor(Math.random()*bottom_yulu.length)]);
      window.setTimeout(function(){$('#bottom_yulu').fadeIn('fast');}, 1000);
  }
  if(id==='qrcode'){
     //document.writeln('<script src="/skin/202002/js/jquery.qrcode.min.js?ver=2019.09.19"></scr'+'ipt>');
     document.writeln('<script src="https://cdn.bootcss.com/jquery.qrcode/1.0/jquery.qrcode.min.js?ver=2019.09.19"></scr'+'ipt>');
     $(document).ready(function(){
         if(!+[1,]){present="table";} else {present="canvas";}
         $('#output').qrcode({render:present,text:window.location.href,width:"150",height:"150"});
     })
  }
  if(id==='gb2big5'){
    document.writeln('<script src="/skin/202002/js/gb2big5.js"></scr'+'ipt>');
  }
  if(id==='bottom'){
    $(function() {$("img.lazy").lazyload({effect: "fadeIn"});});
  }

}


//data.js 为页面数据，调用<script>r2()</script>即可。

//内容页底部 四方格
function d1(){
document.write('<div class="r4"><div class="related-site"><figure class="related-site-img"><a href="/jiangzuo/lianzhujiqiao/359.html" title="五子棋实战对局—追下取胜"><img width="280" height="210" src="/d/file/1/cba6ba465f41f0e23527b582cf19fb41.jpg" class="attachment-content size-content wp-post-image" alt="五子棋实战对局—追下取胜"></a></figure><div class="related-title">五子棋实战对局—追下取胜</div></div></div><div class="r4"><div class="related-site"><figure class="related-site-img"><a href="/jiangzuo/lianzhujiqiao/358.html" title="五子棋实战对局：一子双杀"><img width="280" height="210" src="/d/file/1/10800e12f867e4b5824f4e9b158174c2.jpg" class="attachment-content size-content wp-post-image" alt="五子棋实战对局：一子双杀"></a></figure><div class="related-title">五子棋实战对局：一子双杀</div></div></div><div class="r4"><div class="related-site"><figure class="related-site-img"><a href="/jiangzuo/lianzhujiqiao/357.html" title="五子棋实战对局—VCF"><img width="280" height="210" src="/d/file/1/9960b4b99bbee01b7877bd74077cf810.jpg" class="attachment-content size-content wp-post-image" alt="五子棋实战对局—VCF"></a></figure><div class="related-title">五子棋实战对局—VCF</div></div></div><div class="r4"><div class="related-site"><figure class="related-site-img"><a href="/jiangzuo/lianzhujiqiao/356.html" title="五子棋实战对局—四三胜"><img width="280" height="210" src="/d/file/1/3a829b84ca48b72e3ce22d257ad7e1ff.jpg" class="attachment-content size-content wp-post-image" alt="五子棋实战对局—四三胜"></a></figure><div class="related-title">五子棋实战对局—四三胜</div></div></div>');
}
function d2(){
}
function d3(){
}


//right右侧栏目
function r1(){
}


function r2(){
var v2='<li><figure class="thumbnail"><div class="load"><a href="/jiangzuo/lianzhujiqiao/357.html" title="五子棋实战对局—VCF" target="_blank"><img width="280" height="210" src="/d/file/smallpic/0d39fb0fea81fa5a37a44dc60e1c3798.jpg" class="attachment-content wp-post-image" alt="五子棋实战对局—VCF" /></a></div></figure><div class="new-title"><a href="/jiangzuo/lianzhujiqiao/357.html" rel="bookmark">五子棋实战对局—VCF</a></div><div class="date">03/15</div><span class="views"><i class="fa fa-eye"></i>1095</span></li><li><figure class="thumbnail"><div class="load"><a href="/jiangzuo/lianzhujiqiao/350.html" title="五子棋取胜思路—白棋取胜的思路" target="_blank"><img width="280" height="210" src="/d/file/smallpic/a272e2077be5a5f5737888cfa3174f54.jpg" class="attachment-content wp-post-image" alt="五子棋取胜思路—白棋取胜的思路" /></a></div></figure><div class="new-title"><a href="/jiangzuo/lianzhujiqiao/350.html" rel="bookmark">五子棋取胜思路—白棋取胜的思路</a></div><div class="date">03/08</div><span class="views"><i class="fa fa-eye"></i>766</span></li><li><figure class="thumbnail"><div class="load"><a href="/jiangzuo/lianzhujiqiao/436.html" title="五子棋必胜技巧图解（五子棋超实用小技巧）" target="_blank"><img width="280" height="210" src="/d/file/smallpic/f5f0d9ac56f1829a5462a5957f908f8f.png" class="attachment-content wp-post-image" alt="五子棋必胜技巧图解（五子棋超实用小技巧）" /></a></div></figure><div class="new-title"><a href="/jiangzuo/lianzhujiqiao/436.html" rel="bookmark">五子棋必胜技巧图解（五子棋超实用小技巧）</a></div><div class="date">02/22</div><span class="views"><i class="fa fa-eye"></i>925</span></li><li><figure class="thumbnail"><div class="load"><a href="/jiangzuo/lianzhujiqiao/336.html" title="五子棋取胜的思路" target="_blank"><img width="280" height="210" src="/d/file/smallpic/1cd86242e93cb912fa0a2aa9833b3c59.jpg" class="attachment-content wp-post-image" alt="五子棋取胜的思路" /></a></div></figure><div class="new-title"><a href="/jiangzuo/lianzhujiqiao/336.html" rel="bookmark">五子棋取胜的思路</a></div><div class="date">02/22</div><span class="views"><i class="fa fa-eye"></i>1123</span></li><li><figure class="thumbnail"><div class="load"><a href="/jiangzuo/lianzhujiqiao/322.html" title="五子棋布局阶段的名局为何有名?" target="_blank"><img width="280" height="210" src="/d/file/smallpic/c53120f44ca4641cc12038706f89f780.jpg" class="attachment-content wp-post-image" alt="五子棋布局阶段的名局为何有名?" /></a></div></figure><div class="new-title"><a href="/jiangzuo/lianzhujiqiao/322.html" rel="bookmark">五子棋布局阶段的名局为何有名?</a></div><div class="date">02/08</div><span class="views"><i class="fa fa-eye"></i>575</span></li><li><figure class="thumbnail"><div class="load"><a href="/jiangzuo/lianzhujiqiao/315.html" title="五子棋之八卦阵" target="_blank"><img width="280" height="210" src="/d/file/smallpic/36ec1b1e5093f95bee95aa31f50e810a.jpg" class="attachment-content wp-post-image" alt="五子棋之八卦阵" /></a></div></figure><div class="new-title"><a href="/jiangzuo/lianzhujiqiao/315.html" rel="bookmark">五子棋之八卦阵</a></div><div class="date">02/01</div><span class="views"><i class="fa fa-eye"></i>358</span></li>';
document.write(v2);
}
function r3(){
var v3='<li><figure class="thumbnail"><div class="load"><a href="/qishou/411.html" title="徐嘉琦" target="_blank"><img width="280" height="210" src="/d/file/smallpic/2692481eafb268c3b9217d2991011ca1.jpg" class="attachment-content wp-post-image" alt="徐嘉琦" /></a></div></figure><div class="new-title"><a href="/qishou/411.html" rel="bookmark">徐嘉琦</a></div><div class="date">11/24</div><span class="views"><i class="fa fa-eye"></i>957</span></li><li><figure class="thumbnail"><div class="load"><a href="/qishou/410.html" title="焦中其" target="_blank"><img width="280" height="210" src="/d/file/smallpic/85097c25936c4cc52c5cd06891a4d43d.jpg" class="attachment-content wp-post-image" alt="焦中其" /></a></div></figure><div class="new-title"><a href="/qishou/410.html" rel="bookmark">焦中其</a></div><div class="date">11/23</div><span class="views"><i class="fa fa-eye"></i>802</span></li><li><figure class="thumbnail"><div class="load"><a href="/jiangzuo/dingshiyanjiu/159.html" title="银月开局详解" target="_blank"><img width="280" height="210" src="/d/file/smallpic/88a34ea4a947ec75b45ae0005cd456a6.gif" class="attachment-content wp-post-image" alt="银月开局详解" /></a></div></figure><div class="new-title"><a href="/jiangzuo/dingshiyanjiu/159.html" rel="bookmark">银月开局详解</a></div><div class="date">11/22</div><span class="views"><i class="fa fa-eye"></i>221</span></li><li><figure class="thumbnail"><div class="load"><a href="/jiangzuo/kaijujieshao/110.html" title="银月开局详解" target="_blank"><img width="280" height="210" src="/d/file/smallpic/b825e5223d1dcb342d6c72fa4ad7cf90.gif" class="attachment-content wp-post-image" alt="银月开局详解" /></a></div></figure><div class="new-title"><a href="/jiangzuo/kaijujieshao/110.html" rel="bookmark">银月开局详解</a></div><div class="date">11/22</div><span class="views"><i class="fa fa-eye"></i>799</span></li><li><figure class="thumbnail"><div class="load"><a href="/qishou/409.html" title="兰志仁" target="_blank"><img width="280" height="210" src="/d/file/smallpic/9c2ee9fe85611c1030db191b01c36470.jpg" class="attachment-content wp-post-image" alt="兰志仁" /></a></div></figure><div class="new-title"><a href="/qishou/409.html" rel="bookmark">兰志仁</a></div><div class="date">11/22</div><span class="views"><i class="fa fa-eye"></i>254</span></li><li><figure class="thumbnail"><div class="load"><a href="/jiangzuo/dingshiyanjiu/158.html" title="五子棋26种常规开局图解" target="_blank"><img width="280" height="210" src="/d/file/smallpic/b579108ee55d987ef901f7b9f82fadf1.jpg" class="attachment-content wp-post-image" alt="五子棋26种常规开局图解" /></a></div></figure><div class="new-title"><a href="/jiangzuo/dingshiyanjiu/158.html" rel="bookmark">五子棋26种常规开局图解</a></div><div class="date">11/21</div><span class="views"><i class="fa fa-eye"></i>520</span></li>';
document.write(v3);
}