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
    this.filter('img').each(function() {
      var image = $(this);
      image.wrap('<figure></figure>');
      image.after('<figcaption></figcaption>');
      image.next().text(image.attr('alt'));   
    });
 
    return this;
  };
 
  // Usage example:
  $('img').cardify();
});