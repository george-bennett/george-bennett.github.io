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




/*CHANGE UXGAMES ON CLICK OF IMAGE TO DISPLAY TEXT AND RESIZED IMAGE*/
const getGameMaster_cn = document.getElementById('gameMaster-cn');


const getGame1_overlay = document.getElementById('game1-overlay');
const getGame1_cn = document.getElementById('game1-cn');
const getGame1_img = document.getElementById('gm1_img')
const getGame1_txt = document.getElementById('game1_txt');

const getGame2_overlay = document.getElementById('game2-overlay');
const getGame2_cn = document.getElementById('game2-cn');
const getGame2_img = document.getElementById('game2_img');
const getGame2_txt = document.getElementById('game2_txt');

//Manage Row 1- Image 1
document.getElementById('game1-overlay').onclick = function () {
    if (getGame1_cn.className === 'col-lg' || getGame1_cn.className === 'col-lg showEle ') {
        

        //Game 1 Container
        getGame1_cn.classList.remove('col-lg');
        getGame1_cn.classList.add('col-lg-12');

        //HIDE OTHER IMAGES
       // getGame2_cn.classList.remove('showEle');
        getGame2_cn.classList.add('hideEle');

        //SHOW TEXT ABOUT GAME 1
        getGame1_txt.classList.remove('hideEle');
        getGame1_txt.classList.add('showEle');

    }
    else {

        //RETURN OTHER IMAGES
        getGame2_cn.classList.remove('hideEle');
        //getGame2_cn.classList.add('showEle');
        

        getGame1_cn.classList.remove('col-lg-12');
        getGame1_cn.classList.add('col-lg');



        //REMOVE GAME 1 TXT
        getGame1_txt.classList.remove('showEle');
        getGame1_txt.classList.add('hideEle');


       
    }
}


//Manage Row 1- Image 2
document.getElementById('game2-overlay').onclick = function () {
    if (getGame2_cn.className === 'col-lg' || getGame2_cn.className === 'col-lg showEle') {


        getGame2_cn.classList.remove('col-lg');
        getGame2_cn.classList.add('col-lg-12');

        //HIDE OTHER IMAGES
        getGame1_cn.classList.add('hideEle');
        //getGame1_cn.classList.remove('showEle');

        //SHOW TEXT ABOUT GAME 2
        getGame2_txt.classList.remove('hideEle');
        getGame2_txt.classList.add('showEle');


 
    }
    else {
        //RETURN OTHER IMAGES
        getGame1_cn.classList.remove('hideEle');
        //getGame1_cn.classList.add('showEle');

        getGame2_cn.classList.remove('col-lg-12');
        getGame2_cn.classList.add('col-lg');



        //REMOVE GAME 2 TXT
        getGame2_txt.classList.remove('showEle');
        getGame2_txt.classList.add('hideEle');


    }
}















/*
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
*/







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





