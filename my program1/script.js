function addNumber(num) {
    if(display.value === "Error" ){
        display.value = '';
    }
    document.getElementById('display').value += num;
}
function calculate() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.value);
        if(!isFinite(result)){
            display.value = "Error";
        } else {
            display.value = result;
        }
        
    }catch(error){
        display.value = "Error";
    }
}
function clearDisplay() {
    document.getElementById('display').value = '';

}
function backspace() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0,-1);
}