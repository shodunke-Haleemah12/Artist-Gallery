const displayin = document.getElementById('display')

function display(input){
    displayin.value += input;
}

function clearin(){
    displayin.value = ""
}

function calculate(){
    try{
        displayin.value = eval(displayin.value)
    }catch(error){
        displayin.value = 'syntax error'
    }
}