const btns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// клик по кнопке для подсказки

btns.forEach((elem) =>
  elem.addEventListener("click", function (e) {
    e.stopPropagation();
    for (let infoHint of infoHints) {
      infoHint.classList.add("none");
    }
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  })
);

// Закрываем подсказки по всему документу

document.addEventListener("click", function () {
  infoHints.forEach((elem) => elem.classList.add("none"));
});

//Запрещаем всплытие событие клика на info-hint

infoHints.forEach((elem) =>
  elem.addEventListener("click", (e) => e.stopPropagation())
);

// Свайпер

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 42,

  breakpoints: {
    620: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },

  freeMode: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

// Tabs (делаем фильтрацию по табам)

const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-control__btns--active");
    }
    this.classList.add("tab-control__btns--active");

    for (let product of tabsProducts) {
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue !== this.dataset.tab) {
          product.classList.add("none");
        } else {
          product.classList.remove("none");
        }
      }
    }

    // загрузка нового свайпера
    swiper.update();
  });
}

// Мобильная навигация

const openBtn = document.querySelector(".nav__btn");
const mobileContainer = document.querySelector(".mobile-nav-wrapper");
const closeBtn = document.querySelector(".mobile-nav__btn");

openBtn.onclick = function () {
  mobileContainer.classList.add("mobile-nav-wrapper--open");
};

closeBtn.onclick = function () {
  mobileContainer.classList.remove("mobile-nav-wrapper--open");
};
