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
  if (scroll >= 600 && scroll <= 1400) {
    $(this).css({
      'background-image':"url('Assets/Images/timeline-bg-img-1.jpg')"
    });
  } else if (scroll >= 1400 && scroll <= 2100) {
    $(this).css({
      'background-image':"url('Assets/Images/timeline-bg-img-2.jpg')"
    });
  } else if (scroll >= 2100 && scroll <= 3500) {
    $(this).css({
      'background-image':"url('Assets/Images/timeline-bg-img-3.jpg')"
    });
  } else if (scroll >= 3500 && scroll <= 5600 && scroll <= 4900 && scroll >= 5700) {
    $(this).css({
      'background-image':"url('Assets/Images/timeline-bg-img-4.jpg')"
    });
  } else if (scroll >= 7000) {
    $(this).css({
      'background-image':"url('Assets/Images/timeline-bg-img-5.jpg')"
    });
  } else if (scroll >= 4900 && scroll <= 5400){
    $(this).css({
      'background-image':"url('Assets/Images/timeline-lab-1.jpg')"
    });
  } else {
    $(this).css({
      'background-image':"url('Assets/Images/timeline-bg-img-0.jpg')"
    });
  }
})

$('.timeline-hover').mouseenter(function () {
  $(this).fadeOut(400);
});

$('.timeline').mouseleave(function () {
  $('.timeline-hover').fadeIn(400);
});

$(document).ready(function () {
  smoothScool(1000);
});
