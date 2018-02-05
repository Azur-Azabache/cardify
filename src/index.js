$(document).ready(()=>{
  $.fn.cardify = function() {
    this.filter('img').each(function() {
      let image = $(this);
      image.wrap('<figure></figure>');
      image.after('<figcaption></figcaption>');
      image.next().text(image.attr('alt'));
      $('figure').addClass('card text-white bg-dark col-sm-8 offset-sm-2');
      $('figcaption').addClass('center');
      image.addClass('top');
      // image.hover(function effect1() {
      //   $(this).addClass('effect');
      // });
      $('img').hover(function() {
        $(this).addClass('effect');
      });
    });
    return this;
  };
  $.fn.cardify2 = function() {
    this.filter('img').each(function() {
      let image = $(this);
      image.wrap('<figure></figure>');
      image.after('<figcaption></figcaption>');
      image.next().text(image.attr('alt'));
      $('figure').addClass('card text-white bg-primary col-sm-6');
      $('figcaption').addClass('text-center');
      image.addClass('top');
      
      $('img').hover(function() {
        $(this).addClass('effect2');
        
      });
    });
    return this;
  };
});
