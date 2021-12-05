window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tab-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tabs__content').forEach(function (tabsContent) {
        tabsContent.classList.remove('tabs__content_active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content_active')
    })
  })

  document.querySelectorAll('.tabs-lang__btn').forEach(function (tabsLang) {
    tabsLang.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.lang-text').forEach(function (tabsCont) {
        tabsCont.classList.remove('is-active-lang-text')
      })

      document.querySelectorAll(`[data-target="${path}"]`).forEach(function (elem) {
        elem.classList.add('is-active-lang-text')
      })
    })
  })

  document.querySelectorAll('.tabs-lang__btn').forEach(function (el) {
    el.addEventListener('click', function (cl) {

      document.querySelectorAll('.tabs-lang__btn').forEach(function (del) {
        del.classList.remove('is-active-lang-btn')
      })

      cl.target.classList.add('is-active-lang-btn')
    })
  })

  document.querySelectorAll('.tab-btn').forEach(function (el) {
    el.addEventListener('click', function (cl) {

      document.querySelectorAll('.tab-btn').forEach(function (del) {
        del.classList.remove('is-active-tab-btn')
      })

      cl.target.classList.add('is-active-tab-btn')
    })
  })

  function width320() {
    if (window.innerWidth <= 320) {
      document.querySelectorAll(".tab-btn").forEach(function (bla) {
        bla.addEventListener('click', function () {
          window.scrollTo({
            top:4030
          });
        });
      });
    }
  }

  width320();
})
