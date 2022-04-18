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
    let calculatorBtn = $(".calculator-btn");
    menuClose(overlay);
    menuClose(closeButton);
    menuClose(calculatorBtn);
  });

  $(".gallery__tab").on("click", function (e) {
    e.preventDefault();
    $(".gallery__tab").removeClass("gallery__tab--active");
    $(this).addClass("gallery__tab--active");

    $(".gallery__tabs-content").removeClass("gallery__tabs-content--active");
    $($(this).attr("href")).addClass("gallery__tabs-content--active");
  });

  $(".hero__slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".materials__slider").slick({
    dots: true,
    infinite: true,
    prevArrow:
      '<button class="materials__slider-btn materials__slider-prev" type="button"><img src="images/materials-slider-icon-prev.svg" alt="Previous Slide Button" width="8" height="30" class="materials__slider-img"></button>',
    nextArrow:
      '<button class="materials__slider-btn materials__slider-next" type="button"><img src="images/materials-slider-icon-next.svg" alt="Next Slide Button" width="8" height="30" class="materials__slider-img"></button>',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
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

  $(".js-range-slider").ionRangeSlider();
  $(".input-styled").styler();

  $("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor).offset().top - 0,
        },
        200
      );
  });
  // console.log($(".calculator__area .irs-single").html());
});
