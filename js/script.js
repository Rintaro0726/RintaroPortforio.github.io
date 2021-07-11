
$(function(){
  $(window).on('scroll',function (){
    let triggerClass = $('.js-trigger');       //トリガーとなるクラス
        animateClass = ('is-show');
 
    $(triggerClass).each(function(){
      let scroll       = $(window).scrollTop(), //スクロール位置を取得
          triggerTop   = $(this).offset().top,  //指定要素のY座標
          windowHeight = $(window).height();    //ウィンドウの高さ
      // 要素が画面中央に来た時に発火
      if (scroll > triggerTop - windowHeight / 0.4){
        $(this).addClass(animateClass);
      }
    });
  });

  $('#scroll-btn').click(function() {
    ('html,body').scrollTop(0);
  });
  
});

