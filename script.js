// function initialize() {
//     halloweenText=document.getElementById("colordiv");

//     fore = "black";
//     back = "orange";

//     textWidth = 100;
// }
// function toggleColor() {
//     var tmp = fore;
//     fore = back;
//     back = tmp;

//     display();
// }
// function display() {
//     halloweenText.style.color = fore;
//     halloweenText.style.backgroundColor = back;
//     halloweenText.style.width = textWidth + "%";
// }
// function changeWidth(w) {
//     textWidth = w;
//     display();
// }

// function initialize() {
//     textOutput = document.getElementById("textdiv");
//     fontSizeOutput = document.getElementById("sizeout");
//     fontSize = 24;
// }
// function modifyFontSize(mod) {
//     fontSize += mod;
//     if (fontSize < 4) {
//         fontSize = 4;
//     }
//     display();
// }
// function display() {
//     fontSizeOutput.innerHTML = fontSize;
//     textOutput.style.fontSize = fontSize + "pt";
// }

// function initialize() {
//     numberOutput = document.getElementById("numout");
//     rndNum = 0;

//     display();
// }
// function getRandomInteger(lower, upper) {
//     //R = parseInt(rnd * (upper - (lower - 1)) + lower)
//     var multiplier = upper - (lower - 1);
//     var rnd = parseInt(Math.random() * multiplier) + lower;

//     return rnd;
// }
// function changeNumber() {
//     rndNum = getRandomInteger(1, 10);
//     display();
// }
// function display() {
//     numberOutput.innerHTML = rndNum;
// }

function initialize() {
    visitsOut = document.getElementById("visits");

    if (!sessionStorage.numVisits) {
        sessionStorage.numVisits = 0;
    } else {
        sessionStorage.numVisits++;
    }

    display();
}
function display() {
    visitsOut.innerHTML = sessionStorage.numVisits;
}