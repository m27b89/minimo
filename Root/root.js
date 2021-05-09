const HEADER = document.getElementById("header");
const HOMEPAGE = document.getElementById("homepage");
const FOOTER = document.getElementById("footer");

function removeComment(){
    document.querySelector(".block-home__end").classList.remove("close");
    setTimeout(function(){
        document.querySelector(".block-home__end").classList.add("close");
    },3000)
}