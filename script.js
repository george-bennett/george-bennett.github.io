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

        console.log("Window Location = " + window.location)
        console.log("Window Hostname = " + window.location.hostname)
        console.log("Window Href = " + window.location.href)

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
        console.log("Window Location = " + window.location)
        console.log("Window Hostname = " + window.location.hostname)
        console.log("Window Href = " + window.location.href)
    }
    return false;
}

function showUXinGames() {
    if (getUXGamesSection.style.display === "none") {
        getUXGamesSection.style.display = "block";

        navBarUXGames.className += " active"
        navBarWork.className = "nav-link"
        navBarAbout.className = "nav-link"

       

        getWorkSection.style.display = "none";
        getAboutSection.style.display = "none";

        console.log("Window Location = " + window.location)
        console.log("Window Hostname = " + window.location.hostname)
        console.log("Window Href = " + window.location.href)

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

//Temporary until I can figure out how to load href without the # symbol
$('.nav-link').click(function (event) {
    event.preventDefault();
    
});



