// This will contain JavaScript Stuff for Website / Bootstrap 5
//Temporary until I can figure out how to load href without the # symbol

$('.nav-link').click(function (event) {
    //event.preventDefault();
    //window.location.hash = '';
    //console.log(window.location.hash)
    $(this).scrollTop(0);

});

const getAboutSection = document.getElementById('about');
const getWorkSection = document.getElementById('work');
const getUXGamesSection = document.getElementById('uxGames');

const navBarAbout = document.getElementById('aboutNav');
const navBarWork = document.getElementById('workNav');
const navBarUXGames = document.getElementById('uxGamesNav');
const navBarTest = document.getElementById('testNav');

const originalURL = window.location.href;


//getWorkSection.classList.remove('hide');
//getWorkSection.classList.add('fadeIn');


//Start
$(document).ready(function () {
/*! Fades in page on load */
    if (document.location.href == "https://george-bennett.co.uk/work") {
        work();
    }
    else if (document.location.href == "https://george-bennett.co.uk/about") {
        about();

    }
    else if (document.location.href == "https://george-bennett.co.uk/uxingames") {
        uxGames();
    }

    else if (document.location.href == "https://george-bennet.co.uk") {
        init();
    }

});

//PUSH AND POPSTATE FOR BACK/FORWARD
function init() {
    history.pushState({
        page_id: 0,
        page: "init"
    }, null, "/work");

    showSection('init');
}
function work() {
    history.pushState({
        page_id: 1,
        page: "work"
    }, null, "/work");

    showSection("work");
}

function about() {
    history.pushState({
        page_id: 2,
        page: "about"
    }, null, "/about");

    showSection("about");
}

function uxGames() {
    history.pushState({
        page_id: 3,
        page: "uxGames"
    }, null, "/uxingames");

    showSection("uxGames");
}

function showSection(name) { 

    //Inital Load
        if (name === 'init') {
            getAboutSection.classList.remove('fadeIn');
            getAboutSection.classList.add('hide');

            getUXGamesSection.classList.remove('fadeIn');
            getUXGamesSection.classList.add('hide');

            getWorkSection.classList.remove('hide');
            getWorkSection.classList.add('fadeIn');

            navBarWork.className += " active";
            navBarAbout.className = "nav-link";
            navBarUXGames.className = "nav-link";
        }

        else if (name === 'work') {
            getAboutSection.classList.remove('fadeIn');
            getAboutSection.classList.add('hide');

            getUXGamesSection.classList.remove('fadeIn');
            getUXGamesSection.classList.add('hide');

            getWorkSection.classList.remove('hide');
            getWorkSection.classList.add('fadeIn');

            navBarWork.className += " active";
            navBarAbout.className = "nav-link";
            navBarUXGames.className = "nav-link";
            toggleMenu();
        }
        else if (name === 'about') {
            getWorkSection.classList.remove('fadeIn');
            getWorkSection.classList.add('hide');

            getUXGamesSection.classList.remove('fadeIn');
            getUXGamesSection.classList.add('hide');


            getAboutSection.classList.remove('hide');
            getAboutSection.classList.add('fadeIn')

            navBarAbout.className += " active";
            navBarWork.className = "nav-link";
            navBarUXGames.className = "nav-link";

            toggleMenu();
                
        }
        else if (name === 'uxGames') {
            getAboutSection.classList.remove('fadeIn');
            getAboutSection.classList.add('hide');

            getWorkSection.classList.remove('fadeIn');
            getWorkSection.classList.add('hide');

            getUXGamesSection.classList.remove('hide');
            getUXGamesSection.classList.add('fadeIn');

            navBarUXGames.className += " active";
            navBarWork.className = "nav-link";
            navBarAbout.className = "nav-link";

            toggleMenu();
    
         
    }

}

//Popstate history
window.onpopstate = function (event) {
    var content = "work";
    if (event.state) {
        content = event.state.page;
        console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
    }
    showSection(content);
}

//Burger menu 
const myNavbar = document.getElementById('myNavbar');
const burgerMenu = document.getElementById('burger_menu');
const burgerMenuImage = document.getElementById('burger_menu_img');
/*
burgerMenu.onclick = function () {
    
    if (burgerMenuImage.className === 'closed') {
        console.log("open menu");
        burgerMenuImage.src = '/images/close_menu.png';
        burgerMenuImage.classList.remove('closed');
        burgerMenuImage.classList.add('open');
    }
    else if (burgerMenuImage.className === 'open') {
        console.log("close menu");
        burgerMenuImage.src = '/images/burger_menu.png';
        burgerMenuImage.classList.remove('open');
        burgerMenuImage.classList.add('closed');
    }
    
}
*/

function toggleMenu() {
    document.getElementById('bIcon').classList.toggle("change");


}
/*
//NAVIGATION BAR INTERACTIONS
//work
document.getElementById('workNav').onclick = function () {



    navBarWork.className += " active";
    navBarAbout.className = "nav-link";
    navBarUXGames.className = "nav-link";
}

//about
document.getElementById('aboutNav').onclick = function () {



    navBarAbout.className += " active";
    navBarWork.className = "nav-link";
    navBarUXGames.className = "nav-link";
}

//ux
document.getElementById('uxGamesNav').onclick = function () {

    navBarUXGames.className += " active";
    navBarWork.className = "nav-link";
    navBarAbout.className = "nav-link";
}
*/

/*CHANGE UXGAMES ON CLICK OF IMAGE TO DISPLAY TEXT AND RESIZED IMAGE*/
const getMasterRow = document.getElementById('gm-row-master');
const getRow1 = document.getElementById('gm-row-1');
const getRow2 = document.getElementById('gm-row-2');


const getGame1_overlay = document.getElementById('game1-overlay');
const getGame1_cn = document.getElementById('game1-cn');
const getGame1_img = document.getElementById('gm1_img')
const getGame1_expand = document.getElementById('game-img-expand-1');
const getGame1_txt = document.getElementById('game1_txt');

const getGame2_overlay = document.getElementById('game2-overlay');
const getGame2_cn = document.getElementById('game2-cn');
const getGame2_img = document.getElementById('game2_img');
const getGame2_txt = document.getElementById('game2_txt');
const getGame2_expand = document.getElementById('game-img-expand-2');

const getGame3_overlay = document.getElementById('game3-overlay');
const getGame3_cn = document.getElementById('game3-cn');
const getGame3_img = document.getElementById('game3_img');
const getGame3_txt = document.getElementById('game3_txt');
const getGame3_expand = document.getElementById('game-img-expand-3');

const getGame4_overlay = document.getElementById('game4-overlay');
const getGame4_cn = document.getElementById('game4-cn');
const getGame4_img = document.getElementById('game4_img');
const getGame4_txt = document.getElementById('game4_txt');
const getGame4_expand = document.getElementById('game-img-expand-4');

const getGame4_text_img_1 = document.getElementById('game4_txt_img_1');
const getGame4_text_img_2 = document.getElementById('game4_txt_img_2');
const getGame4_text_img_3 = document.getElementById('game4_txt_img_3');


//Desktop - 1
$(document).ready(function () {
    $("#game1-overlay").click(function () {
        if (getGame1_cn.className === 'col-md-6') {

            //Change Icon from Expand Close
            getGame1_expand.src = "images/small-screen-white.png"


            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame1_cn.classList.remove('col-md-6');
            getGame1_cn.classList.add('col-md-12');
            $("#game1-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 1
            getGame1_txt.classList.remove('hideEle');
        }
        else {

            //Change Icon from Close to Expand
            getGame1_expand.src = "images/full-screen-white.png"

            //REMOVE GAME 1 TXT
            getGame1_txt.classList.add('hideEle');
            getGame1_cn.classList.remove('col-md-12');
            getGame1_cn.classList.add('col-md-6');
            $("#game1-cn").fadeIn(400);
            $("#game2-cn").fadeIn(500);
            $("#game3-cn").fadeIn(500);
            $("#game4-cn").fadeIn(500);
       }
    });
});

//Mobile -1 
$(document).ready(function () {
    $("#gm1_img").click(function () {
        if (getGame1_cn.className === 'col-md-6') {
            //Change Icon from Expand Close
            getGame1_expand.src = "images/small-screen-white.png"
            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame1_cn.classList.remove('col-md-6');
            getGame1_cn.classList.add('col-md-12');
            $("#game1-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 1
            getGame1_txt.classList.remove('hideEle');
        }
        else {
            //Change Icon from Close to Expand
            getGame1_expand.src = "images/full-screen-white.png"


            //REMOVE GAME 1 TXT
            getGame1_txt.classList.add('hideEle');
            getGame1_cn.classList.remove('col-md-12');
            getGame1_cn.classList.add('col-md-6');
            $("#game1-cn").fadeIn(400);
            $("#game2-cn").fadeIn(500);
            $("#game3-cn").fadeIn(500);
            $("#game4-cn").fadeIn(500);
        }
    });
});

//Desktop - 2
$(document).ready(function () {
    $("#game2-overlay").click(function () {
        if (getGame2_cn.className === 'col-md-6') {


            //Change Icon from Expand Close
            getGame2_expand.src = "images/small-screen-white.png"

            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame2_cn.classList.remove('col-md-6');
            getGame2_cn.classList.add('col-md-12');

            $("#game2-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 2
            getGame2_txt.classList.remove('hideEle');
        }
        else {
            //Change Icon from Close to Expand
            getGame2_expand.src = "images/full-screen-white.png"

            //REMOVE GAME 2 TXT
            getGame2_txt.classList.add('hideEle');

            getGame2_cn.classList.remove('col-md-12');
            getGame2_cn.classList.add('col-md-6');

            $("#game1-cn").fadeIn(500);
            $("#game2-cn").fadeIn(400);
            $("#game3-cn").fadeIn(500);
            $("#game4-cn").fadeIn(500);
        }
    });
});
//Mobile - 2
$(document).ready(function () {
    $("#gm2_img").click(function () {
        if (getGame2_cn.className === 'col-md-6') {


            //Change Icon from Expand Close
            getGame2_expand.src = "images/small-screen-white.png"



            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame2_cn.classList.remove('col-md-6');
            getGame2_cn.classList.add('col-md-12');
            $("#game2-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 2
            getGame2_txt.classList.remove('hideEle');
        }
        else {



            //Change Icon from Close to Expand
            getGame2_expand.src = "images/full-screen-white.png"




            //REMOVE GAME 2 TXT
            getGame2_txt.classList.add('hideEle');
            getGame2_cn.classList.remove('col-md-12');
            getGame2_cn.classList.add('col-md-6');
            $("#game1-cn").fadeIn(500);
            $("#game2-cn").fadeIn(400);
            $("#game3-cn").fadeIn(500);
            $("#game4-cn").fadeIn(500);
        }
    });
});
// Desktop - 3
$(document).ready(function () {
    $("#game3-overlay").click(function () {
        if (getGame3_cn.className === 'col-md-6') {


            //Change Icon from Expand Close
            getGame3_expand.src = "images/small-screen-white.png"



            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

          
            getGame3_cn.classList.remove('col-md-6');
            getGame3_cn.classList.add('col-md-12');
            $("#game3-cn").fadeIn(1000);

            //SHOW TEXT ABOUT GAME 3
            getGame3_txt.classList.remove('hideEle');
        }
        
        else {


            //Change Icon from Close to Expand
            getGame3_expand.src = "images/full-screen-white.png"



             //REMOVE GAME 3 TXT
            getGame3_txt.classList.add('hideEle');

            getGame3_cn.classList.remove('col-md-12');
            getGame3_cn.classList.add('col-md-6');

            $("#game1-cn").fadeIn(500);
            $("#game2-cn").fadeIn(500);
            $("#game3-cn").fadeIn(400);
            $("#game4-cn").fadeIn(500);

           
        }
    });
});
//Mobile - 3 
$(document).ready(function () {
    $("#gm3_img").click(function () {
        if (getGame3_cn.className === 'col-md-6') {


            //Change Icon from Expand Close
            getGame3_expand.src = "images/small-screen-white.png"


            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame3_cn.classList.remove('col-md-6');
            getGame3_cn.classList.add('col-md-12');

            $("#game3-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 3
            getGame3_txt.classList.remove('hideEle');
        }
        else {

            //Change Icon from Close to Expand
            getGame3_expand.src = "images/full-screen-white.png"



            //REMOVE GAME 3 TXT
            getGame3_txt.classList.add('hideEle');

            getGame3_cn.classList.remove('col-md-12');
            getGame3_cn.classList.add('col-md-6');

            $("#game1-cn").fadeIn(500);
            $("#game2-cn").fadeIn(500);
            $("#game3-cn").fadeIn(400);
            $("#game4-cn").fadeIn(500);
        }
    });
});
//Desktop - 4
$(document).ready(function () {
    $("#game4-overlay").click(function () {
        if (getGame4_cn.className === 'col-md-6') {

            //Change Icon from Expand Close
            getGame4_expand.src = "images/small-screen-white.png"

            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame4_cn.classList.remove('col-md-6'); 
            getGame4_cn.classList.add('col-md-12');

            $("#game4-cn").fadeIn(1000);

            //SHOW TEXT ABOUT GAME 4
            getGame4_txt.classList.remove('hideEle');


            getGame4_text_img_1.classList.remove('hideEle');
            getGame4_text_img_2.classList.remove('hideEle');
            getGame4_text_img_3.classList.remove('hideEle');


        }
        else {

            //Change Icon from Close to Expand
            getGame4_expand.src = "images/full-screen-white.png"

            //REMOVE GAME 4 TXT
            getGame4_txt.classList.add('hideEle');

            getGame4_text_img_1.classList.add('hideEle');
            getGame4_text_img_2.classList.add('hideEle');
            getGame4_text_img_3.classList.add('hideEle');

            getGame4_cn.classList.remove('col-md-12');
            getGame4_cn.classList.add('col-md-6');

            $("#game1-cn").fadeIn(500);
            $("#game2-cn").fadeIn(500);
            $("#game3-cn").fadeIn(500);
            $("#game4-cn").fadeIn(400);

        
        }
    });
});
//Mobile -4
$(document).ready(function () {
    $("#gm4_img").click(function () {
        if (getGame4_cn.className === 'col-md-6') {


            //Change Icon from Expand Close
            getGame4_expand.src = "images/small-screen-white.png"


            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame4_cn.classList.remove('col-md-6');
            getGame4_cn.classList.add('col-md-12');
            $("#game4-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 4
            getGame4_txt.classList.remove('hideEle');

            getGame4_text_img_1.classList.remove('hideEle');
            getGame4_text_img_2.classList.remove('hideEle');
            getGame4_text_img_3.classList.remove('hideEle');


        }
        else {

            //Change Icon from Close to Expand
            getGame1_expand.src = "images/full-screen-white.png"

            //REMOVE GAME 4 TXT
            getGame4_txt.classList.add('hideEle');

            getGame4_text_img_1.classList.add('hideEle');
            getGame4_text_img_2.classList.add('hideEle');
            getGame4_text_img_3.classList.add('hideEle');


            getGame3_cn.classList.remove('col-md-12');
            getGame4_cn.classList.add('col-md-6');

            $("#game1-cn").fadeIn(500);
            $("#game2-cn").fadeIn(500);
            $("#game3-cn").fadeIn(500);
            $("#game4-cn").fadeIn(400);
        }
    });
});

$(function () {
    $(window).on("load", function () {
       // console.log($(this).pageHistory);
        console.log("Page Loaded");
    })
})

window.onhashchange = function () {
    console.log("Page Hash has changed");
}

$(function () {
    $(window).on("resize", function () {
        console.log($(this).width())
        if ($(this).width() < 425) {

            $('#game1-overlay').addClass('content-overlay-hidden');
            $('#game2-overlay').addClass('content-overlay-hidden');
            $('#game3-overlay').addClass('content-overlay-hidden');
            $('#game4-overlay').addClass('content-overlay-hidden');

            $('#game1-overlay-details').addClass('content-details-hidden');
            $('#game2-overlay-details').addClass('content-details-hidden');
            $('#game3-overlay-details').addClass('content-details-hidden');
            $('#game4-overlay-details').addClass('content-details-hidden');         
        }
        else {
            $('#game1-overlay').removeClass('content-overlay-hidden');
            $('#game2-overlay').removeClass('content-overlay-hidden');
            $('#game3-overlay').removeClass('content-overlay-hidden');
            $('#game4-overlay').removeClass('content-overlay-hidden');

            $('#game1-overlay-details').removeClass('content-details-hidden');
            $('#game2-overlay-details').removeClass('content-details-hidden');
            $('#game3-overlay-details').removeClass('content-details-hidden');
            $('#game4-overlay-details').removeClass('content-details-hidden');
        }
    })
})















