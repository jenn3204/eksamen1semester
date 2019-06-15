window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    if (document.querySelector("#col1")) {

        document.querySelector("#col1").classList.remove("col");
        document.querySelector("#col2").classList.remove("col");
        document.querySelector("#col3").classList.remove("col");
        document.querySelector("#col4").classList.remove("col");
        document.querySelector("#col5").classList.remove("col");
        document.querySelector("#col6").classList.remove("col");
        document.querySelector("#col7").classList.remove("col");
        document.querySelector("#col8").classList.remove("col");
        document.querySelector("#portfolio").classList.add("hidden");
        document.querySelector("footer").classList.add("hidden");

        document.querySelector("#seportfolio").addEventListener("click", showPortfolio);
        document.querySelector("#drop").addEventListener("click", showPortfolio);


    }
    // drop  down menu

    document.querySelector("#drop").addEventListener("mouseenter", dropMenu);

    document.querySelector("#drop").addEventListener("mouseleave", dropMenu);

    document.querySelector("#dropdownmenu").addEventListener("mouseenter", dropMenu);

    document.querySelector("#dropdownmenu").addEventListener("mouseleave", dropMenu);

    // portfolio knapper saturation

    if (document.querySelector("#col1")) {

        document.querySelector("#col1").classList.add("filter");
        document.querySelector("#col1").addEventListener("mouseenter", fjernFilter1);
        document.querySelector("#col1").addEventListener("mouseleave", fjernFilter1);

        document.querySelector("#col2").classList.add("filter");
        document.querySelector("#col2").addEventListener("mouseenter", fjernFilter2);
        document.querySelector("#col2").addEventListener("mouseleave", fjernFilter2);

        document.querySelector("#col3").classList.add("filter");
        document.querySelector("#col3").addEventListener("mouseenter", fjernFilter3);
        document.querySelector("#col3").addEventListener("mouseleave", fjernFilter3);

        document.querySelector("#col4").classList.add("filter");
        document.querySelector("#col4").addEventListener("mouseenter", fjernFilter4);
        document.querySelector("#col4").addEventListener("mouseleave", fjernFilter4);

        document.querySelector("#col5").classList.add("filter");
        document.querySelector("#col5").addEventListener("mouseenter", fjernFilter5);
        document.querySelector("#col5").addEventListener("mouseleave", fjernFilter5);

        document.querySelector("#col6").classList.add("filter");
        document.querySelector("#col6").addEventListener("mouseenter", fjernFilter6);
        document.querySelector("#col6").addEventListener("mouseleave", fjernFilter6);

        document.querySelector("#col7").classList.add("filter");
        document.querySelector("#col7").addEventListener("mouseenter", fjernFilter7);
        document.querySelector("#col7").addEventListener("mouseleave", fjernFilter7);

        document.querySelector("#col8").classList.add("filter");
        document.querySelector("#col8").addEventListener("mouseenter", fjernFilter8);
        document.querySelector("#col8").addEventListener("mouseleave", fjernFilter8);

    }

    // portfolio billeder bliver store når man klikker på dem

    if (document.querySelector("#pic1")) {

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

}

function showPortfolio() {

    document.querySelector("#col1").classList.toggle("col");
    document.querySelector("#col2").classList.toggle("col");
    document.querySelector("#col3").classList.toggle("col");
    document.querySelector("#col4").classList.toggle("col");
    document.querySelector("#col5").classList.toggle("col");
    document.querySelector("#col6").classList.toggle("col");
    document.querySelector("#col7").classList.toggle("col");
    document.querySelector("#col8").classList.toggle("col");
    document.querySelector("#portfolio").classList.toggle("hidden");
    document.querySelector("footer").classList.toggle("hidden");

    document.querySelector("#seportfolio").classList.toggle("pulse");
}

//drop down menu funktion

function dropMenu() {
    console.log("dropMenu");

    document.querySelector("#dropdownmenu").classList.toggle("gone");
}

// fjern filtre fra knapper når man hover over funktioner

function fjernFilter1() {
    console.log("fjern filter");

    document.querySelector("#col1").classList.toggle("filter");
}

function fjernFilter2() {
    console.log("fjern filter");

    document.querySelector("#col2").classList.toggle("filter");
}

function fjernFilter3() {
    console.log("fjern filter");

    document.querySelector("#col3").classList.toggle("filter");
}

function fjernFilter4() {
    console.log("fjern filter");

    document.querySelector("#col4").classList.toggle("filter");
}

function fjernFilter5() {
    console.log("fjern filter");

    document.querySelector("#col5").classList.toggle("filter");
}

function fjernFilter6() {
    console.log("fjern filter");

    document.querySelector("#col6").classList.toggle("filter");
}

function fjernFilter7() {
    console.log("fjern filter");

    document.querySelector("#col7").classList.toggle("filter");
}

function fjernFilter8() {
    console.log("fjern filter");

    document.querySelector("#col8").classList.toggle("filter");
}

// billeder bliver store når man trykker funktioner

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
