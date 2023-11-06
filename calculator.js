function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function claerDisplay(){
    document.getElementById('display').value;
    try {
        var result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch(error) {
        document.getElementById('display').value = 'Error';
    
    }
} 