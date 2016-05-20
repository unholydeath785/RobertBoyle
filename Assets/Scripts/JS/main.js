function smoothScool (duration) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

$('.timeline-container').scroll(function () {
  var scroll = $(this).scrollLeft();
  if (scroll > 700) {
    $(this).css({
      'background-image':"url('Assets/Images/timeline-bg-img-2.jpg')"
    });
  } else {
    $(this).css({
      'background-image':"url('Assets/Images/timeline-bg-img-1.jpg')"
    });
  }
})

$(document).ready(function () {
  smoothScool(1000);
});
