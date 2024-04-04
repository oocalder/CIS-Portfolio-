// //SLIDE SHOW FOR PICTURES:
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function changeSlide(n) {
//   showSlides(slideIndex += n);
// }

function changeSlide(n, slideshowId) {
  var slideshows = document.querySelectorAll('.slideshow-container');
  var selectedSlideshow = document.getElementById(slideshowId);
  var slides = selectedSlideshow.getElementsByClassName("slide");
  var slideIndex = parseInt(selectedSlideshow.getAttribute('data-slide-index')) || 1;

  slideIndex += n;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  selectedSlideshow.setAttribute('data-slide-index', slideIndex.toString());
}

// Initialize each slideshow
function initSlideshows() {
  var slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach(function(slideshow, index) {
      slideshow.setAttribute('id', 'slideshow-' + index);
      slideshow.setAttribute('data-slide-index', '1');
      var slides = slideshow.getElementsByClassName("slide");
      if (slides.length > 0) { slides[0].style.display = "block"; }

      var prevButton = slideshow.getElementsByClassName("prev")[0];
      var nextButton = slideshow.getElementsByClassName("next")[0];

      if (prevButton) {
          prevButton.onclick = function() { changeSlide(-1, 'slideshow-' + index); };
      }

      if (nextButton) {
          nextButton.onclick = function() { changeSlide(1, 'slideshow-' + index); };
      }
  });
}

// Call initSlideshows to setup everything
window.onload = initSlideshows;
