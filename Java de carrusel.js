document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = carousel.getElementsByClassName("carousel-slide");
  
    let currentSlide = 0;
  
    function showSlide(index) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slides[index].style.display = "block";
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
  
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 3000);
  });
  