/*MAIN.JS 
This Page is responsible for the logic of images, navigation elements and page listener functions
*/




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


/* MAIN.JS 
 * This script is responsible for the logic of handling images, navigation elements, and page listener functions.
 */

(function() {
  "use strict";

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
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      // Initialize Isotope for filtering portfolio items
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item,',
      });

      // Get all filter buttons and add click events to filter items
      let portfolioFilters = select('#filters a', true);
      on('click', '#filters a', function(e) {
        e.preventDefault();
        
        // Remove 'active' class from all filters and add to the clicked filter
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        // Filter items based on the clicked filter's data-filter attribute
        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

        // Refresh animations after arranging items
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh();
        });
      }, true);
    }
  });

  /**
   * Testimonials Slider
   * Initializes Swiper for testimonials with loop, autoplay, and pagination functionality.
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
   * Animation on Scroll (AOS)
   * Initializes AOS library for animations that trigger when elements are scrolled into view.
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });

})();

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


