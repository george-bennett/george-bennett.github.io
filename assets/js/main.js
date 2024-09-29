(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

//Burger menu 
function toggleMenu() {
    var width = window.innerWidth;
    if (width <= 991) {
        document.getElementById('bIcon').classList.toggle('change');
    }
    else {
    }
}

function goBack() {
    window.history.back();
}


/*
// Modal for Images in fullscreen (Photography Page)
var modal = document.getElementById("imgModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all images with the class "modal-image"
var images = document.getElementsByClassName("modal-image");

// Loop through all images and add an onclick event to open the modal
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Optional: close modal when user clicks anywhere outside the image
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/


//Fullscreen Viewer
var fullScreenViewer = document.getElementById("fullScreenViewer");
var fullScreenImage = document.getElementById("fullScreenImage");
var imageDescription = document.getElementById("imageDescription");
var imageDetails = document.getElementById("imageDetails");
var imageCamSettings = document.getElementById("imageCamSettings");

// Get all images with the class "modal-image"
var images = document.getElementsByClassName("modal-image");

// Loop through all images and add an onclick event to open the full-screen viewer
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        fullScreenViewer.style.display = "flex";
        fullScreenImage.src = this.getAttribute("data-src"); // Set image source
        imageDescription.innerText = this.getAttribute("data-description"); // Set description
        imageDetails.innerText = this.getAttribute("data-details"); // Set additional details
        imageCamSettings.innerText = this.getAttribute("data-cam-settings");


        // Update the URL without changing the page or including image name
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.pushState({ path: newUrl }, '', newUrl);

    }
}

// Get the <span> element that closes the viewer
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the viewer
closeBtn.onclick = function() {
    fullScreenViewer.style.display = "none"; // Hide the viewer
}

// Optional: close viewer when user clicks anywhere outside the image

 window.onclick = function (event) {
        if (event.target == fullScreenViewer) {
            fullScreenViewer.style.display = "none"; // Hide the viewer
        }
    }



/*
// Full-Screen Image Viewer Elements
var fullScreenViewer = document.getElementById("fullScreenViewer");
var carouselInner = document.querySelector(".carousel-inner");
var imageDescription = document.getElementById("imageDescription");
var imageDetails = document.getElementById("imageDetails");

// Get all images with the class "modal-image"
var images = document.getElementsByClassName("modal-image");
var imageArray = [];

// Populate the imageArray with the images' data
for (var i = 0; i < images.length; i++) {
    imageArray.push({
        src: images[i].getAttribute("data-src"),
        description: images[i].getAttribute("data-description"),
        details: images[i].getAttribute("data-details"),
        alt: images[i].alt
    });
}


// Function to open the full-screen viewer and set the carousel
function openFullScreenViewer(index) {
    fullScreenViewer.style.display = "flex";

    // Clear existing images in carousel
    carouselInner.innerHTML = "";

    // Create carousel items
    imageArray.forEach((image, i) => {
        var isActive = i === index ? "active" : "";
        carouselInner.innerHTML += `
            <div class="carousel-item ${isActive}">
                <img src="${image.src}" class="d-block w-100" alt="${image.alt}">
            </div>
        `;
    });

    // Set description and details for the first image
    imageDescription.innerText = imageArray[index].description; // Set description
    imageDetails.innerText = imageArray[index].details; // Set additional details

    // Initialize carousel
    $('#carouselExample').carousel(index); // Set initial index
}

// Loop through all images and add an onclick event to open the full-screen viewer
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        var index = Array.from(images).indexOf(this); // Get the index of the clicked image
        openFullScreenViewer(index); // Open viewer with that index
    }
}

// Get the <span> element that closes the viewer
var closeBtn = document.getElementById("close-carousel");

// Function to close the full-screen viewer
closeBtn.onclick = function () {
    fullScreenViewer.style.display = "none"; // Hide the viewer
}

// Optional: close viewer when user clicks anywhere outside the image
window.onclick = function (event) {
    if (event.target == fullScreenViewer) {
        fullScreenViewer.style.display = "none"; // Hide the viewer
    }
}

    */