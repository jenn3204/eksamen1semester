window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    /*** drop  down menu ***/

    document.querySelector("#dropdownmenu").classList.add("gone");

    document.querySelector("#drop").addEventListener("mouseenter", dropMenu);

    document.querySelector("#drop").addEventListener("mouseleave", dropMenu);

    document.querySelector("#dropdownmenu").addEventListener("mouseenter", dropMenu);

    document.querySelector("#dropdownmenu").addEventListener("mouseleave", dropMenu);


    /** portfolio billeder bliver store når man klikker på dem **/

    document.querySelector("#pic1").addEventListener("click", stortBillede1);

    document.querySelector("#pic2").addEventListener("click", stortBillede2);

    document.querySelector("#pic3").addEventListener("click", stortBillede3);

    document.querySelector("#pic4").addEventListener("click", stortBillede4);

    document.querySelector("#pic5").addEventListener("click", stortBillede5);

    document.querySelector("#pic6").addEventListener("click", stortBillede6);

    document.querySelector("#pic7").addEventListener("click", stortBillede7);

    document.querySelector("#pic8").addEventListener("click", stortBillede8);

    document.querySelector("#pic9").addEventListener("click", stortBillede9);

    document.querySelector("#pic10").addEventListener("click", stortBillede10);

    document.querySelector("#pic11").addEventListener("click", stortBillede11);

    document.querySelector("#pic12").addEventListener("click", stortBillede12);

    document.querySelector("#pic13").addEventListener("click", stortBillede13);

    document.querySelector("#pic14").addEventListener("click", stortBillede14);
}

function dropMenu() {
    console.log("dropMenu");

    document.querySelector("#dropdownmenu").classList.toggle("gone");
}

function stortBillede1() {
    console.log("stort billede");

    document.querySelector("#pic1").classList.toggle("vokse");
}

function stortBillede2() {
    console.log("stort billede");

    document.querySelector("#pic2").classList.toggle("vokse");

}

function stortBillede3() {
    console.log("stort billede");

    document.querySelector("#pic3").classList.toggle("vokse");

}

function stortBillede4() {
    console.log("stort billede");

    document.querySelector("#pic4").classList.toggle("vokse");

}

function stortBillede5() {
    console.log("stort billede");

    document.querySelector("#pic5").classList.toggle("vokse");

}

function stortBillede6() {
    console.log("stort billede");

    document.querySelector("#pic6").classList.toggle("vokse");

}

function stortBillede7() {
    console.log("stort billede");

    document.querySelector("#pic7").classList.toggle("vokse");

}

function stortBillede8() {
    console.log("stort billede");

    document.querySelector("#pic8").classList.toggle("vokse");

}

function stortBillede9() {
    console.log("stort billede");

    document.querySelector("#pic9").classList.toggle("vokse");

}

function stortBillede10() {
    console.log("stort billede");

    document.querySelector("#pic10").classList.toggle("vokse");

}

function stortBillede11() {
    console.log("stort billede");

    document.querySelector("#pic11").classList.toggle("vokse");

}

function stortBillede12() {
    console.log("stort billede");

    document.querySelector("#pic12").classList.toggle("vokse");

}

function stortBillede13() {
    console.log("stort billede");

    document.querySelector("#pic13").classList.toggle("vokse");

}

function stortBillede14() {
    console.log("stort billede");

    document.querySelector("#pic14").classList.toggle("vokse");

}
