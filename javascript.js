const landingPage = document.querySelector(".landingPage");

const sections = document.getElementsByClassName("section");

const header = document.querySelector("header");

const introPage = document.getElementById("intro");

// try {
//     const introLi = introPage.getElementsByTagName("li");
// } finally {

// }


const loadingScreen = document.getElementById("loadingScreen");

const body = document.querySelector("body");


const mobileMenu = document.getElementById("mobileMenu");

let showMenu = false;

let OpenMenu = () => {
    if (showMenu) {
        mobileMenu.style.display = "none";
        showMenu = false;
    } else {
        mobileMenu.style.display = "flex";
        showMenu = true;
    }
}






function setCookie(cname, cvalue, exseconds) {
    const d = new Date();
    d.setTime(d.getTime() + (exseconds * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.addEventListener('DOMContentLoaded', () => {


    loadingScreen.style.display = "flex";
    body.style.overflowY = 'hidden';

});


//solution for IE

// window.attachEvent("onload", function() {
//     // loaded
// });

window.addEventListener("load", () => {

    loadingScreen.style.display = "none";
    body.style.overflowY = 'visible';
    // if (window.innerWidth > window.screen.width && getCookie('toReload') === '') {
    //     console.log(window.innerWidth, window.screen.width); String.
    //         setCookie('toReload', 'false', 5);
    //     window.location.reload();

    // }

});



let setHeight = () => {
    if (window.innerWidth > 500) {
        if (landingPage) {
            landingPage.style.minHeight = window.innerHeight + "px";
        }

        for (let i = 0; i < sections.length; i++) {
            sections[i].style.minHeight = window.innerHeight + "px";

        }

    } else {
        try {

            landingPage.style.minHeight = window.innerHeight + "px";

            if (landingPage) {
                landingPage.style.height = "auto";
            }

            for (let i = 0; i < sections.length; i++) {
                sections[i].style.minHeight = window.innerHeight / 2 + "px";
                sections[i].style.height = "auto";

            }

        } catch (error) {

        }
    }

}

setHeight();

document.addEventListener("resize", function () {

    setHeight();

})

document.addEventListener("scroll", function () {
    if (window.innerWidth > 500) {
        if (window.scrollY > 10) {
            header.style.background = "#fafafa";
            header.style.boxShadow = "0px 0px 50px 1px #A1C5F7";
        } else {
            header.style.background = "transparent";
            header.style.boxShadow = "none";
        }
    } else {
        if (window.scrollY > 10) {
            header.style.background = "#fafafa";
            header.style.boxShadow = "0px 0px 50px 1px #A1C5F7";

        } else {
            header.style.background = "#fafafa";
            header.style.boxShadow = "none";
        }



    }

})
