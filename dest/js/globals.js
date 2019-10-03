// navbar mobile toggle
$(function () {
  var $body = $('html, body');
  var $navbar = $('.js-navbar');

  $('.js-navbar-open').on('click', function () {
    $navbar.addClass('is-show');
    $body.addClass('overflow-hidden');
  });

  $('.js-navbar-close').on('click', function () {
    $navbar.removeClass('is-show');
    $body.removeClass('overflow-hidden');
  });
});

// menu toggle
$(function () {
  $('.menu-toggle').on('click', function () {
    var $toggle = $(this);

    $toggle.toggleClass('active').siblings('.menu-sub').slideToggle();

    $toggle.parent().siblings('.menu-item-group').children('.menu-sub').slideUp();

    $toggle.parent().siblings('.menu-item-group').children('.menu-toggle').removeClass('active');
  });
});

// gallery slider
$(function () {
  addSwiper('.gallery-slider', {
    slidesPerView: 3,
    spaceBetween: 54,
    autoHeight: true,
    speed: 800,
    breakpoints: {
      1199: {
        spaceBetween: 30
      },
      767: {
        spaceBetween: 16
      }
    }
  });
});

// horizontal preview sync slider
$(function () {
  if (!$('.preview-slider, .thumb-slider').length) {
    return;
  }

  if (!window.addSwiper) {
    console.warn('"addSwiper" funtion is required!');
    return;
  }

  var thumbSlider = addSwiper('.thumb-slider', {
    slidesPerView: 7,
    freeMode: true,
    spaceBetween: 2,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    breakpoints: {
      991: {
        slidesPerView: 6
      },
      767: {
        slidesPerView: 5
      },
      576: {
        slidesPerView: 4
      }
    }
  })[0];

  addSwiper('.preview-slider', {
    effect: 'fade',
    navigation: true,
    pagination: true,
    allowTouchMove: false,
    thumbs: {
      swiper: thumbSlider
    }
  });
});

// compare-slider
$(function () {
  addSwiper('.compare-slider', {
    navigation: true,
    speed: 600
  });
});

// swiper template
function addSwiper(selector, options = {}) {
  return Array.from(document.querySelectorAll(selector), function (item) {
    var $sliderContainer = $(item),
        $sliderEl = $sliderContainer.find('.swiper-container');

    if (options.navigation) {
      $sliderContainer.addClass('has-nav');
      options.navigation = {
        prevEl: $sliderContainer.find(selector + '__prev'),
        nextEl: $sliderContainer.find(selector + '__next')
      };
    }

    if (options.pagination) {
      $sliderContainer.addClass('has-pagination');
      options.pagination = {
        el: $sliderContainer.find(selector + '__pagination'),
        clickable: true
      };
    }

    return new Swiper($sliderEl, options);
  });
}

$(function () {
  $('.js-rule-panel-tab').on('click', function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    var that = this;

    setTimeout(function () {
      $(that).tab('show');
    }, 500);
  });
});