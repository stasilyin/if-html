$(document).ready(function() {
$('.header-img-btn__mobile_btn').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('mobile-btn-active');
    $('.header-menu__link').toggleClass('header-menu__link-activ');
});
$('.btn-slider').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('btn-slider-active');
    $('.distenation-image').toggleClass('distenation-image-active');
});
$('.distenation-tab__item').on('click', function(e){
    e.preventDefault();
    $('.distenation-tab__item').removeClass('distenation-tab__item--active');
    $('.distenation-tab__content').removeClass('distenation-tab__content--active');
    $(this).addClass('distenation-tab__item--active');
    $($(this).attr('href')).addClass('distenation-tab__content--active');
});
$('.distenation-banner__close').on('click', function(e){
    e.preventDefault();
    $('.distenation-banner').toggleClass('distenation-banner--hiden');
    setTimeout(function () {$('.distenation-banner').toggleClass('distenation-banner--disable');}, 500);
});
$('.distenation-tab__item:first').click();
});