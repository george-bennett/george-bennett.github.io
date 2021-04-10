// This will contain JavaScript Stuff for Website / Bootstrap 5
//Temporary until I can figure out how to load href without the # symbol

$('.nav-link').click(function (event) {
    event.preventDefault();
    window.location.hash = '';
});

//document.getElementById("work").className += " fadeIn";



const getAboutSection = document.getElementById('about');
const getWorkSection = document.getElementById('work');
const getUXGamesSection = document.getElementById('uxGames');


const navBarAbout = document.getElementById('aboutNav');
const navBarWork = document.getElementById('workNav');
const navBarUXGames = document.getElementById('uxGamesNav');
const navBarTest = document.getElementById('testNav');

//getWorkSection.classList.remove('hide');
getWorkSection.classList.add('fadeIn');

$(document).ready(function () {

    /*! Fades in page on load */
    $('#work').css('display', 'none');
    $('#work').fadeIn(100);

});

/*
$(document).ready(function () {
    $("#workNav").click(function () {   
       // $('#work').css('display', 'none');
        $('#work').fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#aboutNav").click(function () {
     //   $('#work').css('display', 'none');
        $('#work').fadeIn(1000);
    });
});

$(document).ready(function () {
    $("#uxGamesNav").click(function () {
     //   $('#uxGames').css('display', 'none');
        $('#uxGames').fadeIn(1000);
    });
});
*/


//work
document.getElementById('workNav').onclick = function () {
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

//about
document.getElementById('aboutNav').onclick = function () {
   
    getWorkSection.classList.remove('fadeIn');
    getWorkSection.classList.add('hide');

    getUXGamesSection.classList.remove('fadeIn');
    getUXGamesSection.classList.add('hide');
   
    getAboutSection.classList.remove('hide');
    getAboutSection.classList.add('fadeIn')

    navBarAbout.className += " active";
    navBarWork.className = "nav-link";
    navBarUXGames.className = "nav-link";
}

//ux
document.getElementById('uxGamesNav').onclick = function () {

    getAboutSection.classList.remove('fadeIn');
    getAboutSection.classList.add('hide');

    getWorkSection.classList.remove('fadeIn');
    getWorkSection.classList.add('hide');

    getUXGamesSection.classList.remove('hide');
    getUXGamesSection.classList.add('fadeIn');

    navBarUXGames.className += " active";
    navBarWork.className = "nav-link";
    navBarAbout.className = "nav-link";
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



//Desktop - 1
$(document).ready(function () {
    $("#game1-overlay").click(function () {
        if (getGame1_cn.className === 'col-lg-6') {
            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame1_cn.classList.remove('col-lg-6');
            //getGame1_cn.classList.add('col-lg-12');
            $("#game1-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 1
            getGame1_txt.classList.remove('hideEle');
        }
        else {
            //REMOVE GAME 1 TXT
            getGame1_txt.classList.add('hideEle');
            getGame1_cn.classList.add('col-lg-6');
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
        if (getGame1_cn.className === 'col-lg-6') {
            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame1_cn.classList.remove('col-lg-6');
            //getGame1_cn.classList.add('col-lg-12');
            $("#game1-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 1
            getGame1_txt.classList.remove('hideEle');
        }
        else {
            //REMOVE GAME 1 TXT
            getGame1_txt.classList.add('hideEle');
            getGame1_cn.classList.add('col-lg-6');
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
        if (getGame2_cn.className === 'col-lg-6') {
            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame2_cn.classList.remove('col-lg-6');
            //getGame1_cn.classList.add('col-lg-12');
            $("#game2-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 2
            getGame2_txt.classList.remove('hideEle');
        }
        else {

            //REMOVE GAME 2 TXT
            getGame2_txt.classList.add('hideEle');

            getGame2_cn.classList.add('col-lg-6');
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
        if (getGame2_cn.className === 'col-lg-6') {
            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame2_cn.classList.remove('col-lg-6');
           
            $("#game2-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 2
            getGame2_txt.classList.remove('hideEle');
        }
        else {
            //REMOVE GAME 2 TXT
            getGame2_txt.classList.add('hideEle');
            getGame2_cn.classList.add('col-lg-6');
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
        if (getGame3_cn.className === 'col-lg-6') {
            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame3_cn.classList.remove('col-lg-6');
 
            $("#game3-cn").fadeIn(1000);

            //SHOW TEXT ABOUT GAME 3
            getGame3_txt.classList.remove('hideEle');
        }
        
        else {
             //REMOVE GAME 3 TXT
            getGame3_txt.classList.add('hideEle');

            getGame3_cn.classList.add('col-lg-6');
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
        if (getGame3_cn.className === 'col-lg-6') {
            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame3_cn.classList.remove('col-lg-6');
            //getGame1_cn.classList.add('col-lg-12');
            $("#game3-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 3
            getGame3_txt.classList.remove('hideEle');
        }
        else {
            //REMOVE GAME 3 TXT
            getGame3_txt.classList.add('hideEle');
            getGame3_cn.classList.add('col-lg-6');
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
        if (getGame4_cn.className === 'col-lg-6') {
            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame4_cn.classList.remove('col-lg-6');
            //getGame1_cn.classList.add('col-lg-12');
            $("#game4-cn").fadeIn(1000);

            //SHOW TEXT ABOUT GAME 4
            getGame4_txt.classList.remove('hideEle');
        }
        else {
            //REMOVE GAME 4 TXT
            getGame4_txt.classList.add('hideEle');

            getGame4_cn.classList.add('col-lg-6');
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
        if (getGame4_cn.className === 'col-lg-6') {
            $("#game1-cn").fadeOut(1);
            $("#game2-cn").fadeOut(1);
            $("#game3-cn").fadeOut(1);
            $("#game4-cn").fadeOut(1);

            getGame4_cn.classList.remove('col-lg-6');
            //getGame1_cn.classList.add('col-lg-12');
            $("#game4-cn").fadeIn(1000);
            //SHOW TEXT ABOUT GAME 4
            getGame4_txt.classList.remove('hideEle');
        }
        else {
            //REMOVE GAME 4 TXT
            getGame4_txt.classList.add('hideEle');
            getGame4_cn.classList.add('col-lg-6');
            $("#game1-cn").fadeIn(500);
            $("#game2-cn").fadeIn(500);
            $("#game3-cn").fadeIn(500);
            $("#game4-cn").fadeIn(400);
        }
    });
});




//Disable Overlay in Mobile Formats
$(function () {
    $(window).bind("load", function () {
        console.log($(this).width())
        if ($(this).width() < 500) {
            $('#game1-overlay').removeClass('content-overlay').addClass('content-overlay-hidden');
            $('#game1-overlay-details').removeClass('content-details').addClass('content-details-hidden');

            $('#game2-overlay').removeClass('content-overlay').addClass('content-overlay-hidden');
            $('#game2-overlay-details').removeClass('content-details').addClass('content-details-hidden');

            $('#game3-overlay').removeClass('content-overlay').addClass('content-overlay-hidden');
            $('#game3-overlay-details').removeClass('content-details').addClass('content-details-hidden');

            $('#game4-overlay').removeClass('content-overlay').addClass('content-overlay-hidden');
            $('#game4-overlay-details').removeClass('content-details').addClass('content-details-hidden');
        }
        else {
            $('game1-overlay').removeClass('content-overlay-hidden').addClass('content-overlay');
            $('game1-overlay-details').removeClass('content-details-hidden').addClass('content-details');

            $('game2-overlay').removeClass('content-overlay-hidden').addClass('content-overlay');
            $('game2-overlay-details').removeClass('content-details-hidden').addClass('content-details');

            $('game3-overlay').removeClass('content-overlay-hidden').addClass('content-overlay');
            $('game3-overlay-details').removeClass('content-details-hidden').addClass('content-details');

            $('game4-overlay').removeClass('content-overlay-hidden').addClass('content-overlay');
            $('game4-overlay-details').removeClass('content-details-hidden').addClass('content-details');
        }
    })
})

$(function () {
    $(window).bind("resize", function () {
        console.log($(this).width())
        if ($(this).width() < 500) {
            $('#game1-overlay').removeClass('content-overlay').addClass('content-overlay-hidden');
            $('#game1-overlay-details').removeClass('content-details').addClass('content-details-hidden');

            $('#game2-overlay').removeClass('content-overlay').addClass('content-overlay-hidden');
            $('#game2-overlay-details').removeClass('content-details').addClass('content-details-hidden');

            $('#game3-overlay').removeClass('content-overlay').addClass('content-overlay-hidden');
            $('#game3-overlay-details').removeClass('content-details').addClass('content-details-hidden');

            $('#game4-overlay').removeClass('content-overlay').addClass('content-overlay-hidden');
            $('#game4-overlay-details').removeClass('content-details').addClass('content-details-hidden');
        }
        else {
            $('game1-overlay').removeClass('content-overlay-hidden').addClass('content-overlay');
            $('game1-overlay-details').removeClass('content-details-hidden').addClass('content-details');

            $('game2-overlay').removeClass('content-overlay-hidden').addClass('content-overlay');
            $('game2-overlay-details').removeClass('content-details-hidden').addClass('content-details');

            $('game3-overlay').removeClass('content-overlay-hidden').addClass('content-overlay');
            $('game3-overlay-details').removeClass('content-details-hidden').addClass('content-details');

            $('game4-overlay').removeClass('content-overlay-hidden').addClass('content-overlay');
            $('game4-overlay-details').removeClass('content-details-hidden').addClass('content-details');
        }
    })
})










/*
//Manage Row 1- Image 1
document.getElementById('game1-overlay').onclick = function () {
    if (getGame1_cn.className === 'col-lg-6') {   

        //SHOW TEXT ABOUT GAME 1
        getGame1_txt.classList.remove('hideEle');

        //HIDE IMAGES;
        getGame1_cn.classList.add('hideEle');
        getGame2_cn.classList.add('hideEle');
        getGame3_cn.classList.add('hideEle');
        getGame4_cn.classList.add('hideEle');
     
        getGame1_cn.classList.remove('hideEle');



        //Game 1 Container - enlarge
        //getGame1_cn.classList.remove('col-lg-6');
        getGame1_cn.classList.add('col-lg-12');

    }
    else {
        //REMOVE GAME 1 TXT
        getGame1_txt.classList.add('hideEle');

        getGame2_cn.classList.remove('hideEle');
        getGame3_cn.classList.remove('hideEle');
        getGame4_cn.classList.remove('hideEle');

        //Return Container to Normal Size
        getGame1_cn.classList.remove('col-lg-12');
        getGame1_cn.classList.add('col-lg-6');
       
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

        //REMOVE GAME 2 TXT
        getGame2_txt.classList.add('hideEle');

        //RETURN OTHER IMAGES
        getGame1_cn.classList.remove('hideEle');
        getGame3_cn.classList.remove('hideEle');
        getGame4_cn.classList.remove('hideEle');

        //Return Container to Normal Size
        getGame2_cn.classList.remove('col-lg-12');
        getGame2_cn.classList.add('col-lg-6');

    }
}

//Manage Row 2- Image 3
document.getElementById('game3-overlay').onclick = function () {
    if (getGame3_cn.className === 'col-lg-6') {

        //Game 3 Container - enlarge
        getGame3_cn.classList.remove('col-lg-6');
        getGame3_cn.classList.add('col-lg-12');

        //SHOW TEXT ABOUT GAME 1
        getGame3_txt.classList.remove('hideEle');

        //HIDE OTHER IMAGES;
        getGame1_cn.classList.add('hideEle');
        getGame2_cn.classList.add('hideEle');
        getGame4_cn.classList.add('hideEle');


    }
    else {
        //RETURN OTHER IMAGES
        getGame1_cn.classList.remove('hideEle');
        getGame2_cn.classList.remove('hideEle');
        getGame4_cn.classList.remove('hideEle');

        //REMOVE GAME 1 TXT
        getGame3_txt.classList.add('hideEle');

        //Return Container to Normal Size
        getGame3_cn.classList.remove('col-lg-12');
        getGame3_cn.classList.add('col-lg-6');


    }
}

//Manage Row 2- Image 4
document.getElementById('game4-overlay').onclick = function () {
    if (getGame4_cn.className === 'col-lg-6') {

        //Game Container 4 - enlarge
        getGame4_cn.classList.remove('col-lg-6');
        getGame4_cn.classList.add('col-lg-12');

        //SHOW TEXT ABOUT GAME 2
        getGame4_txt.classList.remove('hideEle');

        //HIDE OTHER IMAGES
        getGame1_cn.classList.add('hideEle');
        getGame2_cn.classList.add('hideEle');
        getGame3_cn.classList.add('hideEle');
    }
    else {
        //RETURN OTHER IMAGES
        getGame1_cn.classList.remove('hideEle');
        getGame2_cn.classList.remove('hideEle');
        getGame3_cn.classList.remove('hideEle');

        //REMOVE GAME 2 TXT
        getGame4_txt.classList.add('hideEle');

        //Return Container to Normal Size
        getGame4_cn.classList.remove('col-lg-12');
        getGame4_cn.classList.add('col-lg-6');
    }
}
*/













