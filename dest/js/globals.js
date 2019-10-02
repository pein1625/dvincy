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

// open modal video
$(function () {
  $('.js-video-modal').on('click', function (e) {
    e.preventDefault();

    var youtubeId = $(this).data('youtubeId'),
        modal = $(this).data('modal') || '.md-video';

    $(modal).find('iframe').attr('src', `https://www.youtube.com/embed/${youtubeId}?autoplay=1`);
    $(modal).modal('show');
  });

  $('.md-video').on('hide.bs.modal', function () {
    $(this).find('iframe').attr('src', '');
  });
});

// open video switch
$(function () {
  $('.js-video-switch').on('click', function (e) {
    e.preventDefault();

    var target = $(this).data('target') || '.js-video-switch-target',
        youtubeId = $(this).data('youtubeId');

    $(target).find('iframe').attr('src', `https://www.youtube.com/embed/${youtubeId}?autoplay=1`);
  });
});