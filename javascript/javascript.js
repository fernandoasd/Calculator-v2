let display;
let button0Js;
let button1Js;
let button2Js;
let button3Js;
let button4Js;
let button5Js;
let button6Js;
let button7Js;
let button8Js;
let button9Js;
let buttonCJs;
let buttonBracketJs;
let buttonPercentageJs;
let buttonMultiplyJs;
let buttonSplitJs;
let buttonMinusJs;
let buttonPlusJs;
let buttonPlasMinusJs;
let buttonDotJs;
let buttonEqualJs;

display = document.getElementById("screen");
button0Js = document.getElementById("button0");
 button1Js = document.getElementById("button1");
 button2Js = document.getElementById("button2");
 button3Js = document.getElementById("button3");
 button4Js = document.getElementById("button4");
 button5Js = document.getElementById("button5");
 button6Js = document.getElementById("button6");
 button7Js = document.getElementById("button7");
 button8Js = document.getElementById("button8");
 button9Js = document.getElementById("button9");
 buttonCJs = document.getElementById("buttonC");
 buttonBracketJs = document.getElementById("buttonBracket");
 buttonPercentageJs = document.getElementById("buttonPercentage");
 buttonMultiplyJs = document.getElementById("buttonMultiply");
 buttonSplitJs = document.getElementById("buttonSplit");
 buttonMinusJs = document.getElementById("buttonMinus");
 buttonPlusJs = document.getElementById("buttonPlus");
 buttonPlasMinusJs = document.getElementById("buttonPlasMinus");
 buttonDotJs = document.getElementById("buttonDot");
 buttonEqualJs = document.getElementById("buttonEqual");

 window.onkeydown = calculatorKeyboard;

 function calculatorKeyboard () {

 }

function delate() {
    display.value = "";
}

function show(x) {
    display.value += x;
}

function calculation() {
    display.value = eval(screen.value); 
}

button0Js.addEventListener("click", () => { show(0)});
button1Js.addEventListener("click", () => { show(1)});
button2Js.addEventListener("click", () => { show(2)});
button3Js.addEventListener("click", () => { show(3)});
button4Js.addEventListener("click", () => { show(4)});
button5Js.addEventListener("click", () => { show(5)});
button6Js.addEventListener("click", () => { show(6)});
button7Js.addEventListener("click", () => { show(7)});
button8Js.addEventListener("click", () => { show(8)});
button9Js.addEventListener("click", () => { show(9)});
buttonCJs.addEventListener("click", () => { delate()});
buttonBracketJs.addEventListener("click", () => { show(" () ")}); //ver
buttonPercentageJs.addEventListener("click", () => { show(" % ")});
buttonMultiplyJs.addEventListener("click", () => { show(" * ")});
buttonSplitJs.addEventListener("click", () => { show(" / ")});
buttonMinusJs.addEventListener("click", () => { show(" - ")});
buttonPlusJs.addEventListener("click", () => { show(" + ")});
buttonPlasMinusJs.addEventListener("click", () => { show(" +/- ")}); //ver
buttonDotJs.addEventListener("click", () => { show(".")});
buttonEqualJs.addEventListener("click", () => { show("=")});
