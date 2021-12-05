window.addEventListener('DOMContentLoaded', function () {
  const swiperHero = new Swiper('.hero__swiper-container', {
    loop: true,
    effect: 'fade',

    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    }
  });

  const swiperGallery = new Swiper('.gallery__swiper-container', {
    loop: false,
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 50,
    slidesPerGroup: 3,

    pagination: {
      el: ".gallery-swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".gallery-swiper-button-next",
      prevEl: ".gallery-swiper-button-prev",
    },

    a11y: {
      enabled: 'true',
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      slideLabelMessage: 'Кнопка слайд',
    },

    breakpoints: {

      1: {
        grid: {
          rows: 1,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      611: {
        grid: {
          rows: 2,
        },
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1251: {
        grid: {
          rows: 2,
        },
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },

      1501: {
        grid: {
          rows: 2,
        },
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });

  const swiperEditions = new Swiper('.editions__swiper-container', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 2,

    pagination: {
      el: ".editions-swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".editions-swiper-button-next",
      prevEl: ".editions-swiper-button-prev",
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      slideLabelMessage: 'Слайд',
    },

    breakpoints: {
      530: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      1020: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },

      1501: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 25
      },

      1600: {
        spaceBetween: 50
      }
    }
  });

  const swiperPartner = new Swiper('.partner__swiper-container', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,

    navigation: {
      nextEl: ".partner-swiper-button-next",
      prevEl: ".partner-swiper-button-prev",
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      slideLabelMessage: 'Слайд',
    },

    breakpoints: {
      1: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },

      470: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },

      1020: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2
      },

      1251: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    }
  });

  let swiperEvents;

  function createSwiperEvents() {
    swiperEvents = new Swiper('.events__swiper-container', {
      loop: false,
      spaceBetween: 15,
      pagination: {
        el: '.events__swiper-pagination',
        type: 'bullets',
        clickable: 'true',
      }
    });
  }

  function widthLess610() {
    if (window.innerWidth <= 610) {
      document.querySelector('.events__swiper-container').classList.add('swiper');
      document.querySelector('.events__list').classList.add('swiper-wrapper');

      document.querySelectorAll('.events__item').forEach(function (eventItem) {
        eventItem.classList.add('swiper-slide');
      });

      createSwiperEvents();

      swiperEditions.destroy(false, true);
    }
  }

  function widthMore610() {
    if (window.innerWidth > 610) {
      document.querySelector('.events__swiper-container').classList.remove('swiper');
      document.querySelector('.events__list').classList.remove('swiper-wrapper');

      document.querySelectorAll('.events__item').forEach(function (eventItem) {
        eventItem.classList.remove('swiper-slide');
      });

      swiperEvents.destroy(false, true);
    }
  }

  widthLess610();

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 610) {
      widthLess610();
    }
    else {
      widthMore610();
    }
  });

});
