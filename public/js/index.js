'use strict';

$(document).ready(function () {
  $.fn.cardify = function () {
    this.filter('img').each(function () {
      var image = $(this);
      image.wrap('<figure></figure>');
      image.after('<figcaption></figcaption>');
      image.next().text(image.attr('alt'));
      $('figure').addClass('card text-white bg-success col-sm-8 offset-sm-2');
      $('figcaption').addClass('center');
      $('img').addClass('top');
    });
    $('img').hover(function () {
      $(this).addClass('effect');
    });
    return this;
  };
});