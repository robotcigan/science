$(document).ready(function() {

  // Закрепленная шапка
  function mainHeaderScroll() {
    if( $(window).scrollTop() > 20 ) {
      $('.main-header').addClass('main-header--scroll');
    } else {
      $('.main-header').removeClass('main-header--scroll');
    }
  }

  $(window).scroll(function () {
    mainHeaderScroll();
  });

  // Модальное окно
  $('.modal-open').magnificPopup({
    type: 'inline'
  });

  // Табы
  $('.tabs__link').on('click', function () {
    $(this).closest('.tabs').find('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    let index = $(this).index();
    $(this).closest('.tabs').find('.tabs__content').removeClass('tabs__content--active');
    $(this).closest('.tabs').find('.tabs__content').eq(index).addClass('tabs__content--active');
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