window.addEventListener('scroll', function()
    {
        var scroll = document.querySelector('.top');
        scroll.classList.toggle("active", window.scrollY >  300)
    }
)

var j=1;
$(document).ready(function(){
        $("#kopce").click(function(){
            if(localStorage.clickcount % 2===0) {
                $("body").toggleClass("dark-mode");
                $(".nav").toggleClass("dark-mode-nav");
                $(".nav_sreden").toggleClass("dark-mode-nav");
                $(".fut").toggleClass("dark-mode-nav");
                $(".pod-fut").toggleClass("dark-mode-nav");
                $(".sreden").toggleClass("dark-mode-sreden");
                $(".novosti").toggleClass("dark-mode");
                $(".karta").toggleClass("dark-mode");
                $(".praksa-kont").toggleClass("dark-mode");
                $(".fut-inf").toggleClass("dark-mode-p");
                $(".nav-boja").toggleClass("dark-mode-boja");
                $(".novosti-naslov").toggleClass("dark-mode-p");
                $(".praksaa").toggleClass("dark-mode-p");
                $(".card").toggleClass("dark-mode");
                $(".proekti-naslov").toggleClass("dark-mode-p");
                if (j % 2 === 0) {
                    document.getElementById("Logo").src = "Images/logo_boja.png";
                    document.getElementById("logo2").src = "Images/logo_boja.png";
                    j++;
                } else {
                    document.getElementById("Logo").src = "Images/logo_belo.png";
                    document.getElementById("logo2").src = "Images/logo_belo.png";
                    j++;
                }
            }
        });
    }
);


var i=1;
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function openNav() {
    if(i%2===0){
        document.getElementById("sMeni").style.height = "0%";
        document.getElementById("kopce").style.display = "none";
        i++;
    }
    else{
        document.getElementById("sMeni").style.height = "250px";
        i++;
        document.getElementById("kopce").style.display = "block";
    }
}

function closeNav() {
    if(document.getElementById("sMeni").style.height === "0%")
    {
        i=i+2;
    }
    else {
        i++;
        document.getElementById("sMeni").style.height = "0%";
        document.getElementById("kopce").style.display = "none";
    }

}


var k=1;
function SkrienoMeni()
{
    if(k%2===0){
        document.getElementById("nav_meni").style.height = "0%";
        document.getElementById("nav_meni").style.display = "none";
    k++;
}
else{
    k++;
    document.getElementById("nav_meni").style.height = "3000px";
    document.getElementById("nav_meni").style.display = "block";

}

}

function closeSkrienoMeni()
{
    if(document.getElementById("nav_meni").style.height === "0%")
    {
        k=k+2;
    }
    else {
        k++;
        document.getElementById("nav_meni").style.height = "0%";
        document.getElementById("nav_meni").style.display = "none";
    }
}
