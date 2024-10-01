/*MAIN.JS 
This Page is responsible for the logic of images, navigation elements and page listener functions
*/
(function() {
  "use strict";

  /* Easy selector helper function */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /* Easy event listener function */
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

  /* Easy on scroll event listener */
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
      //Load at Top of Page // Prevents Refreshing Behaviour Inconsistencies. 
      window.history.scrollRestoration = 'manual'; // Prevents scroll restoration
      window.scrollTo(0, 0); // Scrolls to the top on load
    

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


function toggleOverlays() {
    const overlays = document.querySelectorAll('.item .item-wrap:after, .item .item-wrap > .work-info');

    if (window.innerWidth <= 991) {
        overlays.forEach(overlay => {
            overlay.style.visibility = 'visible'; // Always show overlays on mobile/tablet
            overlay.style.opacity = '1';
        });
    } else {
        overlays.forEach(overlay => {
            overlay.style.visibility = 'hidden'; // Hide overlays on larger screens
            overlay.style.opacity = '0';
        });
    }
}

// Run on load and resize
toggleOverlays();
window.addEventListener('resize', toggleOverlays);







function goBack() {
    window.history.back();
}


/* MAIN.JS 
 * This script is responsible for the logic of handling images, navigation elements, and page listener functions.
 */

  /**
   * Helper function for selecting elements.
   * @param {string} el - The CSS selector.
   * @param {boolean} all - If true, selects all elements matching the selector.
   * @returns {Element|Element[]} - The selected element(s).
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  }

  /**
   * Helper function to add event listeners.
   * @param {string} type - The event type (e.g., 'click').
   * @param {string} el - The CSS selector for the element.
   * @param {function} listener - The event handler function.
   * @param {boolean} all - If true, adds the event listener to all matching elements.
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
}


//Init sequence
window.addEventListener('load', () => {
    // Initialize Isotope for filtering portfolio items
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.item',
        });

        let portfolioFilters = select('#filters a', true);
        on('click', '#filters a', function (e) {
            e.preventDefault();
            portfolioFilters.forEach(function (el) {
                el.classList.remove('active');
            });
            this.classList.add('active');

            portfolioIsotope.arrange({
                filter: this.getAttribute('data-filter')
            });
            portfolioIsotope.on('arrangeComplete', function () {
                AOS.refresh();
            });
        }, true);
    }

    // Initialize Swiper for testimonials
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

    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});









  /**
   * Helper function to add scroll event listeners.
   * @param {Element} el - The element to attach the scroll listener to.
   * @param {function} listener - The scroll event handler function.
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  }

  /**
   * Burger Menu Toggle
   * Toggles the 'active' class to show or hide the burger menu when clicked.
   */
  const burgerMenu = select('.burger');
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  });

  /**
   * Isotope and Filter
   * Initializes Isotope for filtering and adds click event to filter buttons.
   */


/**
 * Toggle Burger Icon Change
 * Toggles the change class for the burger icon based on the window width.
 */
function toggleMenu() {
  var width = window.innerWidth;
  if (width <= 991) {
    document.getElementById('bIcon').classList.toggle('change');
  }
}

/**
 * Go Back Function
 * Navigates the user back to the previous page in the browser history.
 */
function goBack() {
  window.history.back();
}

function toggleDiv() {
    var div = document.getElementById("photoEquipment");
    if (div.style.display === "none") {
        div.style.display = "block"; // Show the div
    } else {
        div.style.display = "none"; // Hide the div
    }
}





//Fullscreen Viewer
var fullScreenViewer = document.getElementById("fullScreenViewer");
var fullScreenImage = document.getElementById("fullScreenImage");
var imageDescription = document.getElementById("imageDescription");
var imageDetails = document.getElementById("imageDetails");

var imageCamera = document.getElementById("imageCamera");
var imageLens = document.getElementById("imageLens");
var imageFocal = document.getElementById("imageFocal");
var imgAperture = document.getElementById("imageAperture");


// Get all images with the class "modal-image"
var images = document.getElementsByClassName("modal-image");

// Loop through all images and add an onclick event to open the full-screen viewer
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {

        // Display the full-screen viewer
        fullScreenViewer.style.display = "flex";
        document.body.style.overflow = "hidden";
        // Set the image source
        fullScreenImage.src = this.getAttribute("data-src");

        // Set description
        imageDescription.innerText = this.getAttribute("data-description") || "Description not available";

        // Set details
        imageDetails.innerText = this.getAttribute("data-details") || "Details not available";

        // Set camera  prefix
        const camData = this.getAttribute("data-cam");
        imageCamera.innerText = "Camera: " + (camData ? camData : "Not specified");

        // Set lens  prefix
        const lensData = this.getAttribute("data-lens");
        imageLens.innerText = "Lens: " + (lensData ? lensData : "Not specified");

        // Set focal prefix
        const focalData = this.getAttribute("data-focal");
        imageFocal.innerText = "Focal Length: " + (focalData ? focalData : "Not specified");

        // Set aperture prefix
        const apertureData = this.getAttribute("data-aperture");
        imgAperture.innerText = "Aperture: " + (apertureData ? apertureData : "Not specified");

        // Update the URL without changing the page or image name
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.pushState({ path: newUrl }, '', newUrl);


/*
        fullScreenViewer.style.display = "flex";
        fullScreenImage.src = this.getAttribute("data-src"); // Set image source
        imageDescription.innerText = this.getAttribute("data-description"); // Set description
        imageDetails.innerText = this.getAttribute("data-details"); // Set additional details
        imageCamera.innerText = this.getAttribute("Camera:" + "data-cam");
        imageLens.innerText = this.getAttribute("data-lens");
        imageFocal.innerText = this.getAttribute("data-focal");
        imgAperture.innerText = this.getAttribute("data-aperture");

        // Update the URL without changing the page or including image name
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.pushState({ path: newUrl }, '', newUrl);
        */
    }
}

// Get the <span> element that closes the viewer
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the viewer
closeBtn.onclick = function() {
    fullScreenViewer.style.display = "none"; // Hide the viewer
    // Re-enable scrolling on body
    document.body.style.overflow = "auto";
}

// Optional: close viewer when user clicks anywhere outside the image

 window.onclick = function (event) {
        if (event.target == fullScreenViewer) {
            fullScreenViewer.style.display = "none"; // Hide the viewer
        }
    }

//Light Mode - Dark Mode
function toggleTheme() {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme'); // Get current theme from local storage

    if (currentTheme === 'dark') {
        body.classList.remove('dark-mode'); // Remove dark mode class
        localStorage.setItem('theme', 'light'); // Set the theme to light in local storage
    } else {
        body.classList.add('dark-mode'); // Add dark mode class
        localStorage.setItem('theme', 'dark'); // Set the theme to dark in local storage
    }
}






// Set initial theme
document.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('light-mode');
});


document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const savedTheme = localStorage.getItem('theme'); // Get the saved theme from local storage

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode'); // Apply dark mode class if it's saved as dark
    } else {
        body.classList.remove('dark-mode'); // Remove dark mode class otherwise
    }
});