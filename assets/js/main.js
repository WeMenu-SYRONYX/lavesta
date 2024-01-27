// Designed and developed by SYRONYX Web and App Solutions
// package card slider
$("#portfolio-flters li").click(function () {
  $("#portfolio-flters li").removeClass("filter-active");
  $(this).addClass("filter-active");

  var selectedFilter = $(this).data("filter");
  $("#portfolio-wrapper").fadeTo(300, 0);

  $(".card-filter-container").fadeOut().css("transform", "scale(0)");

  setTimeout(function () {
    $(selectedFilter).fadeIn(500).css("transform", "scale(1)");
    $("#portfolio-wrapper").fadeTo(300, 1);
  }, 300);
});



// $(document).ready(function() {
//   const slider = $("#mySlider");
//   const prevBtn = $("#prevButton");
//   const nextBtn = $("#nextButton");
//   const container = $("#slider-container");
//   const cards = $(".package-container");

//   let currentIndex = 0;
//   const cardWidth = cards.outerWidth(true); // Include margins
//   const totalCards = cards.length;
//   let cardsInView = Math.floor(container.width() / cardWidth);
//   let autoplayInterval;
//   let isTransitioning = false;

//   // Clone and append cards to create a seamless loop
//   cards.slice(0, cardsInView).clone().appendTo(slider);
//   cards.slice(0, cardsInView).clone().appendTo(slider);
//   slider.css("transform", `translateX(-${cardWidth * cardsInView}px)`);
//   currentIndex = cardsInView;

//   // Function to update the slider position
//   function updateSlider() {
//     const translateX = -currentIndex * cardWidth;
//     slider.css("transform", `translateX(${translateX}px)`);
//   }

//   // Function to update the number of cards in view
//   function updateCardsInView() {
//     cardsInView = Math.floor(container.width() / cardWidth);
//   }

//   // Click event for next button
//   nextBtn.click(function() {
//     if (!isTransitioning) {
//       currentIndex++;
//       if (currentIndex >= totalCards + cardsInView) {
//         currentIndex = cardsInView;
//         slider.css("transition", "none"); // Disable transition for the jump to the cloned cards
//       } else {
//         slider.css("transition", "transform 0.5s ease");
//       }
//       updateSlider();
//       isTransitioning = true;
//       setTimeout(function() {
//         isTransitioning = false;
//       }, 500); // Transition duration in milliseconds
//     }
//   });

//   // Click event for previous button
//   prevBtn.click(function() {
//     if (!isTransitioning) {
//       currentIndex--;
//       if (currentIndex < cardsInView) {
//         currentIndex = totalCards + cardsInView - 1;
//         slider.css("transition", "none"); // Disable transition for the jump to the cloned cards
//       } else {
//         slider.css("transition", "transform 0.5s ease");
//       }
//       updateSlider();
//       isTransitioning = true;
//       setTimeout(function() {
//         isTransitioning = false;
//       }, 500); // Transition duration in milliseconds
//     }
//   });

//   // Handle autoplay
//   function startAutoplay() {
//     autoplayInterval = setInterval(function() {
//       if (!isTransitioning) {
//         currentIndex++;
//         if (currentIndex >= totalCards + cardsInView) {
//           currentIndex = cardsInView;
//           slider.css("transition", "none"); // Disable transition for the jump to the cloned cards
//         } else {
//           slider.css("transition", "transform 0.5s ease");
//         }
//         updateSlider();
//         isTransitioning = true;
//         setTimeout(function() {
//           isTransitioning = false;
//         }, 500); // Transition duration in milliseconds
//       }
//     }, 4000); // Adjust autoplay interval (in milliseconds) as needed
//   }

//   startAutoplay();

//   // Pause autoplay when user hovers over the container
//   container.hover(
//     function() {
//       clearInterval(autoplayInterval); // Pause autoplay on hover
//     },
//     function() {
//       startAutoplay(); // Resume autoplay when not hovering
//     }
//   );

//   // Update slider and cards in view when the window is resized
//   $(window).resize(function() {
//     updateCardsInView();
//     updateSlider();
//   });

//   // Initialize slider and cards in view on page load
//   updateCardsInView();
//   updateSlider();
// });


let currentIndex = 0;
const event_slides = document.querySelectorAll('.slider-image');

function showSlide(index) {
  event_slides.forEach((event_slides, i) => {
    if (i === index) {
      event_slides.classList.add('active');
    } else {
      event_slides.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % event_slides.length;
  showSlide(currentIndex);
}

// Automatically advance to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Show the initial slide
showSlide(currentIndex);

// package card slider

const slides = document.querySelectorAll('.showcase');
const bgImages = ['assets/img/bg1.webp', 'assets/img/bg2.webp', 'assets/img/bg3.webp']; // Add more background images here if needed
let currentSlide = 0;

// Preload images
const preloadImages = () => {
  for (let i = 0; i < bgImages.length; i++) {
    const img = new Image();
    img.src = bgImages[i];
  }
};

preloadImages();

function changeBackgroundImage() {
  currentSlide = (currentSlide + 1) % bgImages.length;
  slides[0].style.backgroundImage = `url(${bgImages[currentSlide]})`;
}

// Change background image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 6000);

// Initial background image setup
changeBackgroundImage();

// mobile nav settings
const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`

navExpand.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})
const ham = document.getElementById('ham')
ham.addEventListener('click', function() {
	document.body.classList.toggle('nav-is-toggled')
})
window.addEventListener('load', function() {
    setTimeout(function() {
      document.querySelector('.nav-drill').classList.add('transition');
      document.querySelector('.nav-items').classList.add('nav-items-transition');
    }, 1000);
  });
// mobile nav settings end

// const sliderInputs = document.querySelectorAll('input[type="radio"]');
// let currentIndex = 0;
// let timeoutId;

// function automateSlider() {
//   sliderInputs[currentIndex].checked = false;
//   currentIndex = (currentIndex + 1) % sliderInputs.length;
//   sliderInputs[currentIndex].checked = true;
//   startAutomation();
// }

// function startAutomation() {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(automateSlider, 5000); // Adjust the interval (in milliseconds) as needed
// }

// function stopAutomation() {
//   clearTimeout(timeoutId);
// }

// startAutomation();

// const blogCard = document.querySelector('.event-card');

// blogCard.addEventListener('mouseenter', () => {
//   stopAutomation();
// });

// blogCard.addEventListener('mouseleave', () => {
//   startAutomation();
// });
var btn = $('#back-to-top');
        var btn_2 = $('#whtspp_icon');

        $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
            btn_2.addClass('show');
        } else {
            btn.removeClass('show');
            btn_2.removeClass('show');
        }
        });

        btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
        });


// Get the offset position of the mini-navbar
var miniNavbar = document.getElementById("mini-navbar");
var stickyPosition = miniNavbar.offsetTop;

// Function to add the 'sticky' class when scrolled past the designated position
function stickyNavbar() {
  if (window.pageYOffset >= stickyPosition) {
    miniNavbar.classList.add("mini-nav-sticky");
  } else {
    miniNavbar.classList.remove("mini-nav-sticky");
  }
}



// Event listener for scroll, calling the stickyNavbar function
window.onscroll = function () {
  stickyNavbar();
};
