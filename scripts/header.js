$(document).ready(function(){
    var activeYear = $('#video-slider .slick-current').data('date');
    $('.date-item').each(function() {
      if ($(this).data('date') == activeYear) {
        $(this).addClass('active');
      }
    });
  
    $('#video-slider').on('afterChange', function(event, slick, currentSlide){
      $('.date-item').removeClass('active');
      var slideYear = $(slick.$slides[currentSlide]).data('date');
      $('.date-item').each(function() {
        if ($(this).data('date') == slideYear) {
          $(this).addClass('active');
        }
      });
    });
  });
  