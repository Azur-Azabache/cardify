$(document).ready(()=>{
  // $.fn.cambiaColor = function(options) {
  //   const configuration = $.extend({
  //     color: 'red',
  //   }, options);
  //   this.each((indice, elemento)=>{
  //     let color = configuration.color;
  //     $(elemento).css('color', color);
  //   });
  // };
  // $('.container').find('p').cambiaColor({color: 'brown'});
  
  $.fn.cardify = function() {
    this.each(function() {
      let image = $(this);
      image.wrap('<figure></figure>');
      image.after('<figcaption></figcaption>');
      image.next().text(image.attr('alt')); 
      $('figure').addClass('card text-white bg-success col-sm-8 offset-sm-2'); 
    });
 
    return this;
  };
 
  // Usage example:
  // $('img').cardify();
});