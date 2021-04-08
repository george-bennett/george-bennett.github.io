// This will contain JavaScript Stuff for Website / Bootstrap 5
//Temporary until I can figure out how to load href without the # symbol

$('.nav-link').click(function (event) {
    event.preventDefault();
    window.location.hash = '';
});

document.getElementById("work").className += " fadeIn";


const getAboutSection = document.getElementById('about');
const getWorkSection = document.getElementById('work');
const getUXGamesSection = document.getElementById('uxGames');

const getTestSection = document.getElementById('test');


const navBarAbout = document.getElementById('aboutNav');
const navBarWork = document.getElementById('workNav');
const navBarUXGames = document.getElementById('uxGamesNav');
const navBarTest = document.getElementById('testNav');

//work
document.getElementById('workNav').onclick = function () {
    getWorkSection.classList.remove('hide');
    getWorkSection.classList.add('fadeIn');

    navBarWork.className += " active";
    navBarAbout.className = "nav-link";
    navBarUXGames.className = "nav-link";

    getAboutSection.classList.add('hide');
    getAboutSection.classList.remove('fadeIn');
    getUXGamesSection.classList.add('hide');
    getUXGamesSection.classList.remove('fadeIn');
}

//about
document.getElementById('aboutNav').onclick = function () {

    getWorkSection.classList.add('hide');
    getWorkSection.classList.remove('fadeIn');

    getAboutSection.classList.remove('hide');
    getAboutSection.classList.add('fadeIn')

    navBarAbout.className += " active";
    navBarWork.className = "nav-link";
    navBarUXGames.className = "nav-link";
  
    
    getUXGamesSection.classList.add('hide');
    getUXGamesSection.classList.remove('fadeIn');

}

//ux
document.getElementById('uxGamesNav').onclick = function () {
  
    getUXGamesSection.classList.remove('hide');
    getUXGamesSection.classList.add('fadeIn');

    navBarUXGames.className += " active"
    navBarWork.className = "nav-link"
    navBarAbout.className = "nav-link"

    getAboutSection.classList.add('hide');
    getAboutSection.classList.remove('fadeIn');
    getWorkSection.classList.add('hide');
    getWorkSection.classList.remove('fadeIn');
}

//test
document.getElementById('testNav').onclick = function () {

    getTestSection.classList.remove('hide');
    getTestSection.classList.add('fadeIn');

    navBarTest.className += " active";
    navBarUXGames.className = "nav-link";
    navBarWork.className = "nav-link";
    navBarAbout.className = "nav-link";

    getAboutSection.classList.add('hide');
    getAboutSection.classList.remove('fadeIn');
    getWorkSection.classList.add('hide');
    getWorkSection.classList.remove('fadeIn');
    getUXGamesSection.classList.add('hide');
    getUXGamesSection.classList.remove('fadeIn');
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





