const numbers  = document.getElementById("numbers");

function appendToDisplay(input){
    numbers.value += input;
}
function clearDisplay(){
    numbers.value = "";
}

function calculate(){
    try{    
    numbers.value = eval(numbers.value);
    }   
    catch(error){
        numbers.value = "Syntax Error";
        setTimeout(() => {
            numbers.value = "";
        }, 1000);
    }
}