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
const getMasterRow = document.getElementById('gm-row-master');
const getRow1 = document.getElementById('gm-row-1');
const getRow2 = document.getElementById('gm-row-2');


const getGame1_overlay = document.getElementById('game1-overlay');
const getGame1_cn = document.getElementById('game1-cn');
const getGame1_img = document.getElementById('gm1_img')
const getGame1_txt = document.getElementById('game1_txt');

const getGame2_overlay = document.getElementById('game2-overlay');
const getGame2_cn = document.getElementById('game2-cn');
const getGame2_img = document.getElementById('game2_img');
const getGame2_txt = document.getElementById('game2_txt');


const getGame3_overlay = document.getElementById('game3-overlay');
const getGame3_cn = document.getElementById('game3-cn');
const getGame3_img = document.getElementById('game3_img');
const getGame3_txt = document.getElementById('game3_txt');


const getGame4_overlay = document.getElementById('game4-overlay');
const getGame4_cn = document.getElementById('game4-cn');
const getGame4_img = document.getElementById('game4_img');
const getGame4_txt = document.getElementById('game4_txt');

//Manage Row 1- Image 1
document.getElementById('game1-overlay').onclick = function () {
    if (getGame1_cn.className === 'col-lg-6') {   

        //Game 1 Container - enlarge
        getGame1_cn.classList.remove('col-lg-6');
        getGame1_cn.classList.add('col-lg-12');

        //HIDE OTHER IMAGES;
        getGame2_cn.classList.add('hideEle');
        getGame3_cn.classList.add('hideEle');
        getGame4_cn.classList.add('hideEle');

        //SHOW TEXT ABOUT GAME 1
        getGame1_txt.classList.remove('hideEle');
    }
    else {
        getGame2_cn.classList.remove('hideEle');
        getGame3_cn.classList.remove('hideEle');
        getGame4_cn.classList.remove('hideEle');

        //Return Container to Normal Size
        getGame1_cn.classList.remove('col-lg-12');
        getGame1_cn.classList.add('col-lg-6');

        //REMOVE GAME 1 TXT
        getGame1_txt.classList.add('hideEle');
    }
}

//Manage Row 1- Image 2
document.getElementById('game2-overlay').onclick = function () {
    if (getGame2_cn.className === 'col-lg-6') {

        //Game Container 2 - enlarge
        getGame2_cn.classList.remove('col-lg-6');
        getGame2_cn.classList.add('col-lg-12');

        //HIDE OTHER IMAGES
        getGame1_cn.classList.add('hideEle');
        getGame3_cn.classList.add('hideEle');
        getGame4_cn.classList.add('hideEle');

        //SHOW TEXT ABOUT GAME 2
        getGame2_txt.classList.remove('hideEle');
    }
    else {

        //RETURN OTHER IMAGES
        getGame1_cn.classList.remove('hideEle');
        getGame3_cn.classList.remove('hideEle');
        getGame4_cn.classList.remove('hideEle');
      
        //Return Container to Normal Size
        getGame2_cn.classList.remove('col-lg-12');
        getGame2_cn.classList.add('col-lg-6');

        //REMOVE GAME 2 TXT
        getGame2_txt.classList.add('hideEle');
    }
}

//Manage Row 2- Image 3
document.getElementById('game3-overlay').onclick = function () {
    if (getGame3_cn.className === 'col-lg-6') {

        //Game 1 Container - enlarge
        getGame3_cn.classList.remove('col-lg-6');
        getGame3_cn.classList.add('col-lg-12');

        //HIDE OTHER IMAGES;
        getGame1_cn.classList.add('hideEle');
        getGame2_cn.classList.add('hideEle');
        getGame4_cn.classList.add('hideEle');

        //SHOW TEXT ABOUT GAME 1
        getGame3_txt.classList.remove('hideEle');
    }
    else {
        //RETURN OTHER IMAGES
        getGame1_cn.classList.remove('hideEle');
        getGame2_cn.classList.remove('hideEle');
        getGame4_cn.classList.remove('hideEle');

        //Return Container to Normal Size
        getGame3_cn.classList.remove('col-lg-12');
        getGame3_cn.classList.add('col-lg-6');

        //REMOVE GAME 1 TXT
        getGame3_txt.classList.add('hideEle');
    }
}

//Manage Row 2- Image 4
document.getElementById('game4-overlay').onclick = function () {
    if (getGame4_cn.className === 'col-lg-6') {

        //Game Container 2 - enlarge
        getGame4_cn.classList.remove('col-lg-6');
        getGame4_cn.classList.add('col-lg-12');

        //HIDE OTHER IMAGES
        getGame1_cn.classList.add('hideEle');
        getGame2_cn.classList.add('hideEle');
        getGame3_cn.classList.add('hideEle');

        //SHOW TEXT ABOUT GAME 2
        getGame4_txt.classList.remove('hideEle');
    }
    else {
        //RETURN OTHER IMAGES
        getGame1_cn.classList.remove('hideEle');
        getGame2_cn.classList.remove('hideEle');
        getGame3_cn.classList.remove('hideEle');

        //Return Container to Normal Size
        getGame4_cn.classList.remove('col-lg-12');
        getGame4_cn.classList.add('col-lg-6');

        //REMOVE GAME 2 TXT
        getGame4_txt.classList.add('hideEle');
    }
}

















//fluff code for testing


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





