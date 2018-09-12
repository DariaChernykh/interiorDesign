$(document).ready(function(){
  $(".portfolio__item").click(function(){
    $(".portfolio__item-active").removeClass("portfolio__item-active");
    $(this).addClass("portfolio__item-active");
  });

  $(".services__item").click(function(){
    $(".services__item-active").removeClass("services__item-active");
    $(this).addClass("services__item-active");
  });

  $(".header-navigation__logo").click(function(){
    $(this).attr("src", "img/002-cancel.png");
    $(this).addClass("header-navigation__logo-active");
    $(".header-navigation__list").show();

    $(".header-navigation__logo-active").click(function(){
      $(this).attr("src", "img/002-menu.png");
      $(this).removeClass("header-navigation__logo-active");
      $(".header-navigation__list").hide();
    });
  });

  $('.header-navigation__list').on('click', 'a', function (event) {
    event.preventDefault();
    const id = $(this).attr('href'),
          top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1000);
  });

  $('.header__link').on('click', function (event) {
    event.preventDefault();
    const id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1000);
  });
});
