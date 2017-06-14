
var w=$(window).width();
function carousel(){
   var i=0;
    var ul=$('ul.img');
    var cloneImg=$('ul.img li').first().clone();
    ul.append(cloneImg);
    var sizeImg=ul.children('li').length;
    for(var j=0;j<sizeImg-1;j++){
        $('ul.circle').append('<li></li>')
    }
    //启动定时器
    var timer=setInterval(function(){
        i++;
        move()
    },2000);
    $(".box").hover(function(){//鼠标移入时停止定时器
        clearInterval(timer)
         },function(){
                    timer=setInterval(function(){//鼠标移出示启动定时器
                    i++;
                    move()
                },2000)
        });
		//鼠标移入原点
    $("ul.circle li").hover(function(){
        var index=$(this).index();
        i=index;
        ul.stop().animate({
            left:-index*w
        },500);
        $(this).addClass("on").siblings().removeClass("on")

    });//鼠标移入原点事件结束
    function move(){
        if(i==sizeImg){
           ul.css({left:'0'});
            i=1;
        }
        if(i==-1){
            ul.css({left:-(sizeImg-1)*w});
            i=sizeImg-2;
        }
        ul.stop().animate({left:-i*w},500);
        if(i==sizeImg-1){
            $("ul.circle li").eq(0).addClass("on").siblings().removeClass("on");
        }else{
            $("ul.circle li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }

}
$(window).resize(function(){
    w=$(window).width();
});
carousel();
var deg=0;
var t=null;
$('ul.develop div').hover(function(){
    var img=$(this).children('img');
    t=setInterval(function(){
        img.css({transform:"rotate("+deg+"deg)"})
        deg+=1;
    },5)
},function(){
    clearInterval(t);
    deg=10;
});