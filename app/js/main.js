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
});

// Калькулятор
const priceForMeter = 650;
function getSquare() {
  let wallThickness = document.querySelector("#wallSquare").value;
  document.querySelector("#squareRange").innerHTML = wallThickness;
  document.querySelector("#totalPrice").innerHTML =
    (wallThickness * priceForMeter).toLocaleString() + " руб";
}

// Яндекс карты
const ekaterinburg = [56.841908, 60.597453];
const addressOnTheMap = [56.84339, 60.590427];
const objectPosition1 = [56.885425, 60.403406];
const objectPosition2 = [56.948315, 60.679033];
const objectPosition3 = [56.837642, 60.635527];
const objectPosition4 = [56.801279, 60.806224];
const cityMap = document.querySelector("#cityMap");
const mapForObjects = document.querySelector("#mapForObjects");

if (cityMap) {
  // Карта страницы контакты
  function initCityMap() {
    const cityMap = new ymaps.Map("cityMap", {
      center: ekaterinburg,
      zoom: 11,
    });
    let location = new ymaps.Placemark(
      addressOnTheMap,
      {
        balloonContent: `<div class="map__balloon">
        <div class="map__balloon-address">
          <span class="map__balloon-category">Адрес нашего офиса:</span> Lorem ipsum dolor
        </div>
        <div class="map__balloon-info">
        <span class="map__balloon-category">Как к нам добаться:</span> Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Но, щеке. Его выйти рукописи парадигматическая подпоясал грамматики необходимыми грустный.
      </div>
        `,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0],
      }
    );
    cityMap.geoObjects.add(location);
  }
  ymaps.ready(initCityMap);
}

if (mapForObjects) {
  // Карта страницы объектов
  function initMapForObjects() {
    const mapForObjects = new ymaps.Map("mapForObjects", {
      center: ekaterinburg,
      zoom: 11,
    });
    let location = new ymaps.Placemark(
      addressOnTheMap,
      {
        balloonContent: `<div class="map__balloon">
          <div class="map__balloon-address">
            <span class="map__balloon-category">Адрес нашего офиса:</span> Lorem ipsum dolor
          </div>
          <div class="map__balloon-info">
          <span class="map__balloon-category">Как к нам добаться:</span> Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Но, щеке. Его выйти рукописи парадигматическая подпоясал грамматики необходимыми грустный.
        </div>
          `,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0],
      }
    );

    let objectMark1 = new ymaps.Placemark(
      objectPosition1,
      {
        balloonContent: `<div class="map__balloon">
          <div class="map__balloon-address">
            <span class="map__balloon-category">Адрес объекта:</span> Lorem ipsum dolor
          </div>
          <div class="map__balloon-info">
            <span class="map__balloon-category">Описание объекта:</span> Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Но, щеке. Его выйти рукописи парадигматическая подпоясал грамматики необходимыми грустный.
          </div>
          <div class="map__balloon-finish-date">
            <span class="map__balloon-category">Дата завершения:</span> 01.01.10
          </div>
          <a class="map__balloon-link" href="">Подробнее</a>
        </div>`,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "images/finished-object-icon.svg",
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0],
      }
    );

    let objectMark2 = new ymaps.Placemark(
      objectPosition2,
      {
        balloonContent: `<div class="map__balloon">
          <div class="map__balloon-address">
            <span class="map__balloon-category">Адрес объекта:</span> Lorem ipsum dolor
          </div>
          <div class="map__balloon-info">
            <span class="map__balloon-category">Описание объекта:</span> Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Но, щеке. Его выйти рукописи парадигматическая подпоясал грамматики необходимыми грустный.
          </div>
        </div>`,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "images/current-object-icon.svg",
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0],
      }
    );

    let objectMark3 = new ymaps.Placemark(
      objectPosition3,
      {
        balloonContent: `<div class="map__balloon">
          <div class="map__balloon-address">
            <span class="map__balloon-category">Адрес объекта:</span> Lorem ipsum dolor
          </div>
          <div class="map__balloon-info">
            <span class="map__balloon-category">Описание объекта:</span> Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Но, щеке. Его выйти рукописи парадигматическая подпоясал грамматики необходимыми грустный.
          </div>
        </div>`,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "images/current-object-icon.svg",
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0],
      }
    );

    let objectMark4 = new ymaps.Placemark(
      objectPosition4,
      {
        balloonContent: `<div class="map__balloon">
          <div class="map__balloon-address">
            <span class="map__balloon-category">Адрес объекта:</span> Lorem ipsum dolor
          </div>
          <div class="map__balloon-info">
            <span class="map__balloon-category">Описание объекта:</span> Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Но, щеке. Его выйти рукописи парадигматическая подпоясал грамматики необходимыми грустный.
          </div>
          <div class="map__balloon-finish-date">
            <span class="map__balloon-category">Дата завершения:</span> 01.01.12
          </div>
          <a class="map__balloon-link" href="">Подробнее</a>
        </div>`,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "images/finished-object-icon.svg",
        iconImageSize: [40, 40],
        iconImageOffset: [0, 0],
      }
    );
    mapForObjects.geoObjects.add(location);
    mapForObjects.geoObjects.add(objectMark1);
    mapForObjects.geoObjects.add(objectMark2);
    mapForObjects.geoObjects.add(objectMark3);
    mapForObjects.geoObjects.add(objectMark4);
  }
  ymaps.ready(initMapForObjects);
}
