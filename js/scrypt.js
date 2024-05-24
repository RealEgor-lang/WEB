var navbar = document.getElementById("navbar");
var navbar_list_links = document.getElementsByClassName("navbar-link");
var main_text = document.getElementById("main-text");
var main_section = document.getElementById("main-section");
var header = document.getElementById("header");
var footer = document.getElementById("footer");
var change_theme_button = document.getElementById("change-theme-button");

var theme = "light"


function changeSiteTheme() {
    // alert("Тема змінюється...");

    if(theme === "light")
    {
        theme = "dark";
        change_theme_button.style.backgroundColor = "black"
        change_theme_button.style.borderColor = "white"

        navbar.style.borderColor = "white";
        navbar.style.backgroundColor = "black";
        for(let i = 0; i < navbar_list_links.length; i++) {
            var link = navbar_list_links[i];
            link.style.color = "white";
        }
        main_text.style.color = "white";
        main_section.style.backgroundColor = "black";
        header.style.backgroundColor = "#0d0d0d";
        header.style.backgroundImage = "linear-gradient(#1E497C, #8FBDBB, #0d0d0d)";
        footer.style.backgroundImage = "linear-gradient(black, white)";
        
    }
    else if(theme === "dark")
    {
        theme = "light"
        change_theme_button.style.backgroundColor = "white";
        change_theme_button.style.borderColor = "black"

        navbar.style.borderColor = "black";
        navbar.style.backgroundColor = "white";
        for(let i = 0; i < navbar_list_links.length; i++) {
            var link = navbar_list_links[i];
            link.style.color = "black";
        }
        main_text.style.color = "black";
        main_section.style.backgroundColor = "white";
        header.style.backgroundColor = "#f2f2f2";
        header.style.backgroundImage = "linear-gradient(#1E497C, #8FBDBB, #f2f2f2)";
        footer.style.backgroundImage = "linear-gradient(#8FBDBB, #1E497C)";
    }
}

function setHoverEffect() {
    change_theme_button.style.backgroundColor = "#808080";
}

function noHoverEffect() {
    if(theme === "light") {
        change_theme_button.style.backgroundColor = "white";
    }
    else if(theme === "dark") {
        change_theme_button.style.backgroundColor = "black";
    }
}