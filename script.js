const display = document.querySelector('#display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch(e){
        display.value = '';
    }
}

function backBtn() {
    if (display.value != '') {
        display.value = display.value.slice(0, -1);
    }
}