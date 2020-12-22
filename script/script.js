$('').on('click', function(e){
    e.preventDefault;
    $this.toggleClass('mobile-btn-active');
    $('.header-menu__link').toggleClass('header-menu__link-activ');
});