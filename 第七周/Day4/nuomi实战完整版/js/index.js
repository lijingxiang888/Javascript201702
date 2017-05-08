$(function () {
    //  headerBanner
    var mySwiper1 = new Swiper('#swiper1', {
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        pagination: '#pagination1'
    });

    if($(window).scrollTop() >= 10) {
        $('.header-search').addClass('header-fixed ');
        $('.search-word').siblings().hide();
        $('.search-word').addClass('search-change');
    }

    // header-search
    //  监听scroll 事件
    $(window).on('scroll', function () {
        var scrollVal = $(this).scrollTop();
        var obj;
        if(scrollVal >= 10) {
            obj = {
                webkitTransitionDuration: '0.3s',
                transitionDuration: '0.3s'
            };
            $('.header-search').addClass('header-fixed ');
            $('.search-word').css(obj).addClass('search-change').siblings().hide();
        } else {
            obj = {
                webkitTransitionDuration: '0s',
                transitionDuration: '0s'
            };
            $('.header-search').removeClass('header-fixed ');
            $('.search-word').css(obj).removeClass('search-change').siblings().show();
        }
    });

    $('.search-word').on('keydown', function (e) {
        var val = $(this).val();
          if(val && e.keyCode === 13) {
              window.location.href = 'https://m.nuomi.com/webapp/tuan/list?kw='+ val;
          }
    });

    // goodsList
    new Swiper('#swiper2', {
        loop: true,
        pagination: '#pagination2'
    });

});

