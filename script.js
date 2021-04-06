// This will contain JavaScript Stuff for Website / Bootstrap 5

// This is not a function
const getAboutSection = document.getElementById('about');
const getWorkSection = document.getElementById('work');
const getUXGamesSection = document.getElementById('uxGames');

const navBarAbout = document.getElementById('aboutNav');
const navBarWork = document.getElementById('workNav');
const navBarUXGames = document.getElementById('uxGamesNav');

function showWork() {
    if (getWorkSection.style.display === "none") {
        getWorkSection.style.display = "block";

        navBarWork.className += " active";
        navBarAbout.className = "nav-link";
        navBarUXGames.className = "nav-link";

        getAboutSection.style.display = "none";
        getUXGamesSection.style.display = "none";
    }
}

function showAbout() {
    if (getAboutSection.style.display === "none") {

        getAboutSection.style.display = "block";

        navBarAbout.className += " active";
        navBarWork.className = "nav-link";
        navBarUXGames.className = "nav-link";

        getWorkSection.style.display = "none";
        getUXGamesSection.style.display = "none";
        
    }
}

function showUXinGames() {
    if (getUXGamesSection.style.display === "none") {
        getUXGamesSection.style.display = "block";

        navBarUXGames.className += " active"
        navBarWork.className = "nav-link"
        navBarAbout.className = "nav-link"

        getWorkSection.style.display = "none";
        getAboutSection.style.display = "none";
    }
}

/*
//Toggle Fade on About Nav element
$(document).ready(function () {
    $("#aboutNav").click(function () {
        $("#about").fadeIn();
        $("#work").fadeOut();
        $("uxGames").fadeOut();
           });
});
   

$(document).ready(function () {
    $("#uxGamesNav").click(function () {
        $("#uxGames").fadeIn();
        $("#work").fadeOut();
        $("#about").fadeOut();
    });
});
*/

$(window).on('hashchange', function (e) {
    history.replaceState("", document.title, e.originalEvent.oldURL);
});