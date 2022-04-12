$(function () {
  $(".mobile-button").on("click", function () {
    $(".header__bottom-wrapper").toggleClass("header__bottom-wrapper--active");
    $(".menu__overlay").toggleClass("menu__overlay--active");
    $("body").toggleClass("overflow--hidden");
    $(".close-btn").toggleClass("close-btn--active");

    function menuClose(element) {
      element.on("click", function () {
        $(".header__bottom-wrapper").removeClass(
          "header__bottom-wrapper--active"
        );
        $(".menu__overlay").removeClass("menu__overlay--active");
        $("body").removeClass("overflow--hidden");
        $(".close-btn").removeClass("close-btn--active");
      });
    }

    let overlay = $(".menu__overlay");
    let closeButton = $(".close-btn");
    menuClose(overlay);
    menuClose(closeButton);
  });
});
