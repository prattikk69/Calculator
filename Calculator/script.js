const display = document.querySelector('.userInput');
const answer = document.querySelector('.answer');

function appOnDisplay(input){
    if(display.textContent == '0'){
        display.textContent = input;
    }
    else
    display.textContent += input;
}
function calculateValue(){
    try {
        let expression = display.textContent;
        // Handle square (replace ^2 with **2 for JS exponentiation)
        expression = expression.replace(/\²/g, '**2');
        // Handle percentage (turn "50%" into "(50/100)")
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
        // Evaluate safely
        answer.textContent = eval(expression);
    } 
    catch (error) {
        answer.textContent = "error";
    }
}
function clearDisplay(){
    display.textContent = "0";
    answer.textContent = ""
}
function correction(){
    display.textContent = display.textContent.slice(0, -1);
    if(display.textContent == ""){
        display.textContent = "0";
    }
}
document.addEventListener('keydown', (e) => {
    if(/[0-9+\-*/.]/.test(e.key)){
        appOnDisplay(e.key);
    }
    else if(e.key === "Enter"){
        calculateValue();
    }
    else if(e.key === "Backspace"){
        correction();
    }
    else if(e.key === "Escape"){
        clearDisplay();
    }
});