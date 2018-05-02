$(document).ready(function() {

  let page = window.location.pathname;
  let mobileMenuLink = $('.mobile-menu__link')
  switch(page) {
    case './magazine.html':
    case './science/dist/magazine.html':
      mobileMenuLink.eq(0).addClass('mobile-menu__link--active');
      break;
    case './groups.html':
    case './science/dist/groups.html':
      mobileMenuLink.eq(1).addClass('mobile-menu__link--active');
      break;
    case './friends.html':
    case './science/dist/friends.html':
      mobileMenuLink.eq(2).addClass('mobile-menu__link--active');
      break;
    case './messages.html':
    case './science/dist/messages.html':
      mobileMenuLink.eq(3).addClass('mobile-menu__link--active');
      break;
    case './search.html':
    case './science/dist/search.html':
      mobileMenuLink.eq(4).addClass('mobile-menu__link--active');
      break;
  }
  // if ( window.location.pathname === "/magazine.html" ) {
  //   $('.mobile-menu__link').eq(0).addClass('mobile-menu__link--active');
  // }

  $('.slider').slick({

  });

  // Custom select
  $('.custom-select').select2({
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth : true,
    maximumSelectionLength: 5,
    width: '100%'
  });

  // $('.custom-select').select2({
  //   dropdownAutoWidth : true,
  //   maximumSelectionLength: 5,
  //   width: '100%'
  // });

  // Поля
  $('.form-control input').on('keyup change', function () {
    formValidation($(this));
  });
  $('.form-control select').on('keyup change', function () {
    formValidation($(this));
  });
  $('.form-control textarea').on('keyup change', function () {
    formValidation($(this));
  });

  function formValidation (self) {
    if ( self.val().length || self.text().length ) {
      self.parent().find('label').addClass('form-control__label--active');
    } else {
      self.parent().find('label').removeClass('form-control__label--active');
    }
  }

  formValidation($('.custom-select'));

  // mobile menu
  $('.mobile-toggle').on('click', function() {
    $(this).toggleClass('mobile-toggle--active');
  })

  // Закрепленная шапка
  let scroll = 0;
  function mainHeaderScroll() {
    if( $(window).scrollTop() > 20 ) {
      $('.main-header').addClass('main-header--scroll');
    } else {
      $('.main-header').removeClass('main-header--scroll');
    }

    // if( $(window).scrollTop() ) {
    //   console.log('scroll', scroll, 'window-scroll', $(window).scrollTop())
    //   if ( scroll < $(window).scrollTop() ) {
    //     scroll = $(window).scrollTop();
    //     $('.main-header').removeClass('main-header--visible');
    //     $('.main-header').addClass('main-header--hidden');
    //   } else {
    //     scroll = 0;
    //     $('.main-header').removeClass('main-header--hidden');
    //     $('.main-header').addClass('main-header--visible');
    //   }
    // }
    
  }

  $(window).scroll(function () {
    mainHeaderScroll();
  });

  // Модальное окно
  $('.modal-open').magnificPopup({
    type: 'inline'
  });

  $('.modal-open-youtube').magnificPopup({
    type: 'iframe'
  });

  // Табы
  $('.tabs__link').on('click', function () {
    $(this).closest('.tabs').find('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    let index = $(this).index();
    $(this).closest('.tabs').find('.tabs__content').removeClass('tabs__content--active');
    $(this).closest('.tabs').find('.tabs__content').eq(index).addClass('tabs__content--active');
  });

  // Календарь
  $('.calendar').fullCalendar({
    events: [
      {
        title  : 'Собрать данные',
        start  : '2018-03-23',
        end    : '2018-03-26'
      },
      {
        title  : 'Какое-то действие',
        start  : '2018-03-11',
        end    : '2018-03-15'
      }
    ]
  });

  // SVG magic
  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });

});