window.addEventListener("load", sidenVises);

function sidenVises() {
    document.querySelector("#om").classList.add("gone");
    document.querySelector("#omtxt").classList.add("gone");

    document.querySelector("#omknap").addEventListener("click", omMig);
}

function omMig() {

    document.querySelector("#om").classList.toggle("gone");
    document.querySelector("#omtxt").classList.toggle("gone");
}
