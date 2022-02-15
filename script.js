//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // effect: 'slide',
    slidesPerView: 'auto',
    spaceBetween: 40,
    autoplay: {
        delay: 2000,
    },
});

//スムーススクロール
jQuery('a[href^="#"]').on('click', function () {

    var header = jQuery(".header").innerHeight();
    var id = jQuery(this).attr("href");
    var position = 0;

    if (id != '#') {
        var position = jQuery(id).offset().top - header;
    }
    jQuery('html,body').animate({
        scrollTop: position
    },
        300);
});

//drawer
jQuery('.drawer-icon').on('click', function (e) {
    e.preventDefault();

    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');
    jQuery('.drawer-icon-bars1').toggleClass('is-active');
    jQuery('.drawer-icon-bars3').toggleClass('is-active');

    return false;

});

// to-top（100px以上スクロールした時の処理）
jQuery(window).on('scroll', function () {
    if (100 < jQuery(this).scrollTop()) {
        jQuery('.to-top').addClass('is-show');
    } else {
        jQuery('.to-top').removeClass('is-show');
    }
});

// Q&A
$('.js-faq').on('click', function () {
    $(this).find('.js-faq-a').stop().slideToggle(300);//answerを開くスピード
    $(this).toggleClass('add-active');
});

//privacy-modal
$(function () {
    $('.js-modal-open').on('click', function () {
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });
});

//disabled
$('#check').change(function() {
    // チェックが入っていたら有効化
    if ( $(this).is(':checked') ){ 
        // ボタンを有効化
        $('#button').prop('disabled', false);
    } else { 
        // ボタンを無効化
        $('#button').prop('disabled', true); 
    }
});
