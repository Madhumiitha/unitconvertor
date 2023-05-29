//Fahrenheit to Celsius

var submitFahr = document.querySelector('.convertfahr');

function transFahr() {
    var fahr = document.getElementById("fahr").value;
    var newCelsius = document.getElementById("newcels");
    var getCelsius = (5 * (fahr / 9) - 32).toFixed(1);
    newCelsius.value = getCelsius;
};
submitFahr.addEventListener('click', transFahr);

//Celsius to Fahrenheit

var submitCels = document.querySelector('.convertcels');

function transCels() {
    var cels = document.getElementById("cels").value;
    var newFahr = document.getElementById("newfahr");
    var getFahr = (9 * (cels / 5) + 32).toFixed(1);
    newFahr.value = getFahr;
};
submitCels.addEventListener('click', transCels);

//Pound to Kilogram

var submitPound = document.querySelector('.convertlb');

function transPound() {
    var pound = document.getElementById("lb").value;
    var newKg = document.getElementById("newkg");
    var getKg = (pound / 2.2046226218).toFixed(1);
    newKg.value = getKg;
};
submitPound.addEventListener('click', transPound);

//Kilogram to Pound

var submitKilo = document.querySelector('.convertkg');

function transKilo() {
    var kilo = document.getElementById("kg").value;
    var newPound = document.getElementById("newlb");
    var getPound = (kilo * 2.2046226218).toFixed(1);
    newPound.value = getPound;
};
submitKilo.addEventListener('click', transKilo);

//Gallon to Liter

var submitGal = document.querySelector('.convertgal');

function transGal() {
    var gal = document.getElementById("gal").value;
    var newLiter = document.getElementById("newlitr");
    var getLiter = (gal * 3.785411784).toFixed(1);
    newLiter.value = getLiter;
};
submitGal.addEventListener('click', transGal);

//Liter to Gallon

var submitLiter = document.querySelector('.convertli');

function transLiter() {
    var liter = document.getElementById("litr").value;
    var newGallon = document.getElementById("newgal");
    var getGallon = (liter / 3.785411784).toFixed(1);
    newGallon.value = getGallon;
};
submitLiter.addEventListener('click', transLiter);

//Mile to Kilometer

var submitMile = document.querySelector('.convertmi');

function transMile() {
    var mile = document.getElementById("mile").value;
    var newKm = document.getElementById("newkm");
    var getKm = (mile * 1.609344).toFixed(1);
    newKm.value = getKm;
};
submitMile.addEventListener('click', transMile);

//Kilometer to Mile

var submitKm = document.querySelector('.convertkm');

function transKm() {
    var km = document.getElementById("km").value;
    var newMile = document.getElementById("newmile");
    var getMile = (km * 0.62137119).toFixed(1);
    newMile.value = getMile;
};
submitKm.addEventListener('click', transKm);
