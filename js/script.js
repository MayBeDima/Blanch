window.addEventListener('DOMContentLoaded', function () {

  // DROPDOWN MENU (HEADER)

  document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("scrollbar-nav__item")) {

      const path = event.target.dataset.path;

      document.querySelectorAll('.scrollbar__box').forEach(function (dropdown) {
        if (dropdown.dataset.target !== path) {
          dropdown.classList.remove('is_active');
        }
      });

      document.querySelector(`[data-target="${path}"]`).classList.toggle('is_active');

    } else if (event.target.closest(".scrollbar__box") === null) {
      document.querySelectorAll('.scrollbar__box').forEach(function (dropdown) {
        dropdown.classList.remove('is_active');
      });
    }

    if (event.target.classList.contains("scrollbar-nav__item")) {
      event.target.classList.toggle('scrollbar-nav__item_active');
    } else {
      document.querySelectorAll('.scrollbar-nav__item').forEach(function (drop) {
        drop.classList.remove('scrollbar-nav__item_active');
      });
    };
  });

  document.querySelectorAll('.scrollbar-nav__item').forEach(function (el) {
    el.addEventListener('click', function () {
      document.querySelectorAll('.scrollbar-nav__item').forEach(function (del) {
        del.classList.remove('scrollbar-nav__item_active')
      })
    });
  });

  // BURGER (HEADER)
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.header__top_links').classList.toggle('is_active_nav')
    document.querySelector('.burger-btn__line_top').classList.toggle('top_rotate')
    document.querySelector('.burger-btn__line_bottom').classList.toggle('bottom_rotate')
    document.querySelector('.burger-btn__line_middle').classList.toggle('middle_hide')
  })

  // CALL SEARCH FORM BTN (HEADER)
  document.querySelector('#call-form-btn').addEventListener('click', function () {
    document.querySelector('.search-form').classList.add('is_active_form')
  })

  document.querySelector('#close-form-btn').addEventListener('click', function () {
    document.querySelector('.search-form').classList.remove('is_active_form')
  })

  // MODAL WINDOW (GALLERY section)

  document.body.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("gallery__swiper-slide")) {
      const path = ev.target.dataset.path;
      document.querySelector(`[data-target="${path}"]`).classList.add('modal-active');
      document.body.classList.add("not-scroll");
    }
  });

  document.querySelectorAll('.modal__cross-btn').forEach(function (clc) {
    clc.addEventListener('click', function () {
      document.querySelectorAll('.modal').forEach(function (md) {
        md.classList.remove('modal-active');
        document.body.classList.remove("not-scroll");
      })
    })
  })

  // ENTER AS A CLICK (GALLERY)

  document.querySelectorAll('.gallery__swiper-slide').forEach(function (entGal) {
    entGal.addEventListener('keyup', function (ent) {
      if (ent.keyCode === 13) {
        this.click();
      }
    });
  });

  document.querySelectorAll('.scrollbar-nav__item').forEach(function (entScr) {
    entScr.addEventListener('keyup', function (en) {
      if (en.keyCode === 13) {
        this.click();
      }
    });
  });

  // JS CHOISE (GALLERY section)
  const elements = document.querySelectorAll('.js-choice');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: ''
    });
  });

  // EMERGENCE OF BLOCKS (EVENTS section)

  document.querySelector('.events__btn').addEventListener('click', function () {
    document.querySelectorAll('.events__item:nth-child(n+4)').forEach(function (block) {
      block.classList.add('events__item_act');
      block.style = "display: block;"
    });

    if (document.documentElement.clientWidth < 1021) {
      document.querySelectorAll('.events__item:nth-child(n+3)').forEach(function (block) {
        block.classList.add('events__item_act');
        block.style = "display: block;"
      });
    }


    document.querySelector('.events__btn').style = "display: none;"
    document.querySelector('.events__container').style = "padding-bottom: 30px;"
  })

  // YMAP (CONTACTS section)

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.760278, 37.614176],
      zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([55.758565, 37.601019], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/MapMark.svg'
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');

  };

  // VALIDATE FORM (CONTACTS section)

  let selector = document.getElementById("tel");

  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  new JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 12,
        strength: {
          custom: '^[А-Яа-яЁё\s]+$'
        }
      },
      tel: {
        required: true,
        function: (name) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },

    messages: {
      name: {
        required: 'Поле обязательное для заполнения',
        minLength: 'Минимум 2 символа',
        maxLength: 'Максимум 12 символов',
        strength: 'Недопустимый формат'
      },
      tel: {
        required: 'Поле обязательное для заполнения',
        function: 'Недостаточно символов'
      }
    }
  });

  // TIPPY.JS (PROJECTS)
  tippy('#tip1', {
    content: 'Пример современных тенденций - современная методология разработки',
    maxWidth: 264,
    trigger: 'click',
    trigger: 'focus',
  });

  tippy('#tip2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    maxWidth: 264,
    trigger: 'click',
    trigger: 'focus',
  });

  tippy('#tip3', {
    content: 'В стремлении повысить качество',
    maxWidth: 264,
    trigger: 'click',
    trigger: 'focus',
  });

  // RESIZE

  let button = ".check-block-title";
  let labels = ".check-label";
  let labelsList = ".check-list";
  let labelsListActive = "check-list-active";
  let labelActive = "check-label-active";
  let animationClass = "animation-test";
  let inputCheckbox = ".checkbox";

  function width610() {
    if (window.innerWidth <= 610) {

      document.querySelector('.check-block-title').addEventListener('click', function () {
        this.classList.toggle('title-active');
      });

      function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
        let button = document.querySelector(a);
        let labels = document.querySelectorAll(b);
        let listLabels = document.querySelector(c);
        button.addEventListener("click", toggleSpoiler);
        button.addEventListener("keyup", function (e) {
          console.log(e.key);
          if (e.code === "Enter") {
            toggleSpoiler();
          }
        })
        function toggleSpoiler() {
          if (!listLabels.classList.contains(labelsListActive)) {
            listLabels.classList.add(labelsListActive);
            labels.forEach(item => {
              animationItem(item, labelActive, animationClass, "add");
            })
          } else {
            listLabels.classList.remove(labelsListActive);
            labels.forEach(item => {
              if (item.querySelector(inputCheckbox).checked) {
                animationItem(item, labelActive, animationClass, "add");
              } else {
                animationItem(item, labelActive, animationClass, "remove");
              }
            });
          }
          labels.forEach(item => {
            item.addEventListener("click", function () {
              if (!listLabels.classList.contains(labelsListActive)) {
                animationItem(this, labelActive, animationClass, "remove");
              }
            });
          })
        }
        function animationItem(item, class1, class2, f) {
          if (f === "add") {
            item.classList.add(class1);
            setTimeout(function () {
              item.classList.add(class2)
            }, 100);

          } else {
            item.classList.remove(class2);
            setTimeout(function () {
              item.classList.remove(class1)
            }, 300);
          }
        }
      }
      checkboxToggle(button, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);
    }
    else {
      return false;
    }
  };

  width610();

  function compar() {
    if (window.innerWidth > window.innerHeight && window.innerWidth <= 610 || window.innerHeight <= 610) {

      document.querySelectorAll(".modal__content").forEach(function(ad) {
        ad.classList.add("modal_landscape");
      })

    } else if (window.innerWidth > 610 || window.innerHeight > 610){
      document.querySelectorAll(".modal__content").forEach(function(rem) {
        rem.classList.remove("modal_landscape");
      })
    }
  }

  compar();

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 610) {
      compar();
    } else if (window.innerHeight <= 610) {
      compar();
    }
  });

});

// ACCORDION (CATALOG section)

$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: 'content'
  });
});



