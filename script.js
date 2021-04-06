// This will contain JavaScript Stuff for Website / Bootstrap 5

// This is not a function
const getAboutSection = document.getElementById('about');
const getWorkSection = document.getElementById('work');

const navBarAbout = document.getElementById('aboutNav');
const navBarWork = document.getElementById('workNav');

function showWork() {
    if (getWorkSection.style.display === "none") {
        getWorkSection.style.display = "block";
        navBarWork.className += " active"
        navBarAbout.className = "nav-link"

        getAboutSection.style.display = "none";
    }
}

function showAbout() {
    if (getAboutSection.style.display === "none") {
        getAboutSection.style.display = "block";
        navBarAbout.className += " active"
        navBarWork.className = "nav-link"
        getWorkSection.style.display = "none";
    }
}