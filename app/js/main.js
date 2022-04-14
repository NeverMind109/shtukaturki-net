$(function () {
  $(".mobile-button").on("click", function () {
    $(".header__bottom-wrapper").toggleClass("header__bottom-wrapper--active");
    $(".menu-overlay").toggleClass("menu-overlay--active");
    $("body").toggleClass("overflow--hidden");
    $(".close-btn").toggleClass("close-btn--active");

    function menuClose(element) {
      element.on("click", function () {
        $(".header__bottom-wrapper").removeClass(
          "header__bottom-wrapper--active"
        );
        $(".menu-overlay").removeClass("menu-overlay--active");
        $("body").removeClass("overflow--hidden");
        $(".close-btn").removeClass("close-btn--active");
      });
    }

    let overlay = $(".menu-overlay");
    let closeButton = $(".close-btn");
    menuClose(overlay);
    menuClose(closeButton);
  });

  $(".hero__slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    lazyLoad: "ondemand",
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
  });
  // Thumbnails
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
      target: mainCarousel,
      friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: true,
  });
  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
      on: {
        change: (that) => {
          mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });
});
