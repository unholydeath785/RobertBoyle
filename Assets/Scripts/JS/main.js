//set up indexOf
Array.prototype.indexOf || (Array.prototype.indexOf = function(d, e) {
    var a;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var c = Object(this),
        b = c.length >>> 0;
    if (0 === b) return -1;
    a = +e || 0;
    Infinity === Math.abs(a) && (a = 0);
    if (a >= b) return -1;
    for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b;) {
        if (a in c && c[a] === d) return a;
        a++
    }
    return -1
});

var scientistList = {};
scientistList.ptolemy = "Claudius Ptolemy was a Greco-Egyptian writer, known as a mathematician, astronomer, geographer, astrologer, and poet of a single epigram in the Greek Anthology.";
scientistList.copernicus = "Nicolaus Copernicus was a Renaissance mathematician and astronomer who formulated a model of the universe that placed the Sun rather than the Earth at the center of the universe.";
scientistList.kepler = "Johannes Kepler was a German mathematician, astronomer, and astrologer. A key figure in the 17th century scientific revolution, he is best known for his laws of planetary motion.";
scientistList.galileo = "Galileo Galilei was an Italian astronomer, physicist, engineer, philosopher, and mathematician who played a major role in the scientific revolution of the seventeenth century.";
scientistList.newton = "Sir Isaac Newton PRS was an English physicist and mathematician who is widely recognised as one of the most influential scientists of all time and a key figure in the scientific revolution.";
scientistList.bacon = "Francis Bacon, 1st Viscount St Alban PC KC was an English philosopher, statesman, scientist, jurist, orator, and author. He served both as Attorney General and as Lord Chancellor of England.";
scientistList.descartes = "René Descartes was a French philosopher, mathematician, and scientist. Dubbed the father of modern western philosophy, much of subsequent Western philosophy is a response to his writings, which are studied closely to this day.";
scientistList.boyle = "Robert William Boyle FRS was an Anglo-Irish natural philosopher, chemist, physicist and inventor born in Lismore, County Waterford, Ireland.";

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

$('.modal-close').click(function () {
  $('.modal-overlay').hide(200);
})

$('.tree-scientist').click(function () {
  $('.modal-overlay').show(200);
  var name = $(this).parent().prop("id");
  $('.modal-img').prop("src","Assets/Images/"+name+".png");
  $('.modal-title').text(name);
  $('.modal-info').text(scientistList[name]);
})

$(window).keyup(function (e) {
  e.preventDefault();
  if (e.keyCode == 27) {
    $('.modal-overlay').hide(200);
  }
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.effectAllowed='move';
  ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
  ev.dataTransfer.setDragImage(ev.target,0,0);
  ev.dataTransfer.setData("text", ev.target.id);
}

var weightsAdded = ['weight-8'];
var index = 1;
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var eleClass = $(ev.target).prop("class");
    if (eleClass == 'pressure-area') {
      ev.target.appendChild(document.getElementById(data));
      var id = ev.target.childNodes[index].attributes[3].nodeValue;
      weightsAdded.push(id);
      index++;
      pressure += 2;
      experiment();
    } else if (eleClass == 'weight-container') {
      ev.target.appendChild(document.getElementById(data));
      var id = ev.target.children[8 - index].attributes[3].nodeValue;
      console.log(weightsAdded);
      var indexOf = weightsAdded.indexOf(id);
      weightsAdded.splice(indexOf,1);
      console.log(weightsAdded);
      index--;
      pressure -= 2;
      experiment();
    } else if ($(eleClass).parent().prop("class") == 'weight-container') {
      ev.target = $('.weight-container');
      ev.target.appendChild(document.getElementById(data));
      var id = ev.target.children[8 - index].attributes[3].nodeValue;
      console.log(weightsAdded);
      var indexOf = weightsAdded.indexOf(id);
      weightsAdded.splice(indexOf,1);
      console.log(weightsAdded);
      index--;
      pressure -= 2;
      experiment();
    }
  }

var volume = 16;
var pressure = 2;
var k = 16;
var w = 1;
var d = 1;
var scale = 62.5;
function experiment() {
  volume = k / pressure;
  var volumeHeight = volume/d/w;
  $('.volume-area').css({
    'height':"" + (volumeHeight * scale) + 'px'
  });

  var pressureHeight = 1000 - volumeHeight * scale;
  $('.pressure-area').css({
    'height':'' + pressureHeight + 'px'
  })
}
$(document).ready(function () {
  smoothScool(1000);
});
