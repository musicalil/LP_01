$(function(){
       var topBtn = $('.pagetop');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    $(".pagetop").click(function () {//ページトップにゆっくり戻る
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});
