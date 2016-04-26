/**
 * Created by zn on 2016/4/24.
 */
$(function(){
    var displays=$('.one a:first');
    var boxs=$('.box');
   console.log(displays);
    displays.click(function(){
        boxs.slideToggle("slow");
    });

    var item=$('.liaojie');
    var itemList=$('.none');
   // console.log(itemList);
    item.click(function(){
    	//itemList.stop(false,false)
    	$(this).next(".none").slideToggle("slow");
    	//console.log($(this))
    })

  //轮播
  var bannerW=$('.banner li').width();
  console.log(bannerW);
  var now=0;
 var next=0;
 $('.banner li').eq(0).css({left:0});
  var t=setInterval(wheel,3000);
      function wheel(){
     $('.banner li').stop(true,true)
      next++;
      if(next==$('.banner li').length){
      next=0;
      }
    $('.banner li').eq(next).css({left:bannerW})
     $('.banner li').eq(now).animate({left:-bannerW});
     $('.banner li').eq(next).animate({left:0});

    /*  $(".btnBox li").removeClass("style_s").eq(next).addClass("style_s");*/
      now=next;
   }


//停止时间函数
      $(".bannerBox").hover(function(){
        clearInterval(t)
      },function(){
        t=setInterval(wheel,2000);
      }) 


//下边按钮
    $(".bt li").click(function(){
       $('.banner li').stop(true,true)
      var index=$(this).index();
      console.log(index);
      if(now==index){
        return;
      }
      if(now<index){
      $('.banner li').eq(index).css({left:bannerW});
       $('.banner li').eq(now).animate({left:-bannerW});
          }

        if(now>index){
        $('.banner li').eq(index).css({left:-bannerW});
        $('.banner li').eq(now).animate({left:bannerW})
      }

       $('.banner li').eq(index).animate({left:0});
        //$(".btnBox li").eq(now).removeClass("style_s");
       // $(".btnBox li").eq(index).addClass("style_s");
       next=now=index;

  })


//左右按钮
  
   $('.lbtn').click(function(){
     $('.banner li').stop(true,true)
    next--;
    if(next<0){
      next=$('.banner li').length-1;
    }
     $('.banner li').eq(next).css({left:-bannerW});
     $('.banner li').eq(now).animate({left:bannerW});
     $('.banner li').eq(next).animate({left:0});
   // $(".btnBox li").eq(now).removeClass("style_s");
  //  $(".btnBox li").eq(next).addClass("style_s");
      now=next

   })

  $('.rbtn').click(function(){
    wheel();
  })








})
