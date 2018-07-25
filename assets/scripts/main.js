function opennav() {
    document.querySelector(".menu-button").style.display = "none";
    document.querySelector(".nav").style.width = "100%";
    document.querySelector(".close").style.display="block";
}

function closenav() {
    document.querySelector(".nav").style.width = "0";
    document.querySelector(".menu-button").style.display = "block";
}