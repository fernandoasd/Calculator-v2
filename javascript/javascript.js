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
let buttonBracket1Js;
let buttonBracket2Js;
let buttonDelateJs;
let buttonPercentageJs;
let buttonMultiplyJs;
let buttonSplitJs;
let buttonMinusJs;
let buttonPlusJs;
let buttonSaveJs; //
let buttonDotJs;
let buttonEqualJs;
let displayString;
let numberSaved;
let lastCalculation;
let hasBeenCalculated;

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
buttonBracket1Js = document.getElementById("buttonBracket1");
buttonBracket2Js = document.getElementById("buttonBracket2");
buttonDelateJs = document.getElementById("buttonDelate");
buttonPercentageJs = document.getElementById("buttonPercentage");
buttonMultiplyJs = document.getElementById("buttonMultiply");
buttonSplitJs = document.getElementById("buttonSplit");
buttonMinusJs = document.getElementById("buttonMinus");
buttonPlusJs = document.getElementById("buttonPlus");
buttonSaveJs = document.getElementById("buttonSave");
buttonDotJs = document.getElementById("buttonDot");
buttonEqualJs = document.getElementById("buttonEqual");

lastCalculation = 0;
hasBeenCalculated = false;
numberSaved = 0;

function wipe() {
    display.value = "";
}

function deleteDisplay() {
    displayString = display.value;
    //console.log(`${displayString} length: ${displayString.length}`);
    displayString = displayString.substring(0, displayString.length - 1);
    display.value = displayString;
}

function show(x) {
    display.value += x;
    hasBeenCalculated = false;
}

function calculation() {
    lastCalculation = eval(display.value);
    display.value = lastCalculation;
    hasBeenCalculated = true;

}

function saveNumber() 
{
    if (hasBeenCalculated == true)
    {
        numberSaved = lastCalculation;
        console.log(`savenumber: ${numberSaved}`);
        wipe();
        display.value = numberSaved;
        hasBeenCalculated = false;
        console.log(`hasBeenCalculated: ${hasBeenCalculated}`);
    }
    else
    {
        display.value += numberSaved; 
    }
}

window.addEventListener("keydown", (event) => { // KEYBOARD LISTENER
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    //console.log(event.key);


    switch (event.key) {
        case "0":
            show(0);
            break;
        case "1":
            show(1);
            break;
        case "2":
            show(2);
            break;
        case "3":
            show(3);
            break;
        case "3":
            show(3);
            break;
        case "4":
            show(4);
            break;
        case "5":
            show(5);
            break;
        case "6":
            show(6);
            break;
        case "7":
            show(7);
            break;
        case "8":
            show(8);
            break;
        case "9":
            show(9);
            break;
        case "/":
            show("/");
            break;
        case "*":
            show("*");
            break;
        case "-":
            show("-");
            break;
        case "+":
            show("+");
            break;
        case "Enter":
            calculation();
            break;
        case ".":
            show(".");
            break;
        case "Escape":
            wipe();
            break;
        case "Backspace":
            deleteDisplay();
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);



button0Js.addEventListener("click", () => {
    show(0);
});
button1Js.addEventListener("click", () => {
    show(1);
});
button2Js.addEventListener("click", () => {
    show(2);
});
button3Js.addEventListener("click", () => {
    show(3);
});
button4Js.addEventListener("click", () => {
    show(4);
});
button5Js.addEventListener("click", () => {
    show(5);
});
button6Js.addEventListener("click", () => {
    show(6);
});
button7Js.addEventListener("click", () => {
    show(7);
});
button8Js.addEventListener("click", () => {
    show(8);
});
button9Js.addEventListener("click", () => {
    show(9);
});
buttonCJs.addEventListener("click", () => {
    wipe();
});
buttonBracket1Js.addEventListener("click", () => {      // (
    show("(");
}); 
buttonBracket2Js.addEventListener("click", () => {      // )
    show(")");
}); 
buttonDelateJs.addEventListener("click", () => {       // Del
    deleteDisplay();
}); 
buttonPercentageJs.addEventListener("click", () => {
    show("%");
});
buttonMultiplyJs.addEventListener("click", () => {
    show("*");
});
buttonSplitJs.addEventListener("click", () => {
    show("/");
});
buttonMinusJs.addEventListener("click", () => {
    show("-");
});
buttonPlusJs.addEventListener("click", () => {
    show("+");
});
buttonSaveJs.addEventListener("click", () => { //ver
    saveNumber();
});
buttonDotJs.addEventListener("click", () => {
    show(".");
});
buttonEqualJs.addEventListener("click", () => {
    calculation();
});