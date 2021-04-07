// This will contain JavaScript Stuff for Website / Bootstrap 5
//Temporary until I can figure out how to load href without the # symbol

$('.nav-link').click(function (event) {
    event.preventDefault();
    window.location.hash = '';
});

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

        console.log("WORK LINKED CLICKED Window Location = " + window.location)
        console.log("WORK LINKED CLICKED Window Hostname = " + window.location.hostname)
        console.log("WORK LINKED CLICKED Window Href = " + window.location.href)

       
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
        console.log("ABOUT LINK CLICKED Window Location = " + window.location)
        console.log("ABOUT LINK CLICKED Window Hostname = " + window.location.hostname)
        console.log("ABOUT LINK CLICKED Window Href = " + window.location.href)

       
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

        console.log("UX GAMES LINK CLICKED Window Location = " + window.location)
        console.log("UX GAMES LINK CLICKED Window Hostname = " + window.location.hostname)
        console.log("UX GAMES LINK CLICKED Window Href = " + window.location.href)

       

    }
  
} 


let myTestDiv = document.getElementById('test');
document.getElementById('testNav').onclick = function () {
    myTestDiv.classList.toggle('fade');
    getWorkSection.classList.toggle('fade');
    getAboutSection.classList.toggle('fade');
    getUXGamesSection.classList.toggle('fade');
}




//work
document.getElementById('workNav').onclick = function () {
    getWorkSection.classList.remove('hide');
    getWorkSection.classList.add('fadeIn');


    getAboutSection.classList.add('hide');
    getAboutSection.classList.remove('fadeIn');
    getUXGamesSection.classList.add('hide');
    getUxGamesSection.classList.remove('fadeIn');
}
//about
document.getElementById('aboutNav').onclick = function () {
    getAboutSection.classList.remove('hide');
    getAboutSection.classList.add('fadeIn')
  
    getWorkSection.classList.add('hide');
    getWorkSection.classList.remove('fadeIn');
    getUXGamesSection.classList.add('hide');
    getUXGamesSection.classList.remove('fadeIn');

}
//ux
document.getElementById('uxGamesNav').onclick = function () {
    getUXGamesSection.classList.remove('hide');
    getUXGamesSection.classList.add('fadeIn');

    getAboutSection.classList.add('hide');
    getAboutSection.classList.remove('fadeIn');
    getWorkSection.classList.add('hide');
    getWorkSection.classList.remove('fadeIn');
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





