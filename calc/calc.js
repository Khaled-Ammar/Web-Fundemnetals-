var num1, num2, operation, res
var display = document.getElementById("display")
var number2_start = false


function press(x){
    if(operation && !number2_start){
        display.innerHTML = ""
        number2_start = true
    }
    if(!display.innerHTML || display.innerHTML == "0"){
        display.innerHTML = x
    } else {
        display.innerHTML += x
    }
}

function setOP(op){
    num1 = display.innerHTML ? parseFloat(display.innerHTML) : 0
    operation = op
}

function clr(){
    display.innerHTML = "0"
    num1 = 0
    num2 = 0
    operation = ""
    number2_start = false
}

function calculate(){
    num2 = display.innerHTML && display.innerHTML != "." ? parseFloat(display.innerHTML) : 0
    switch(operation){
        case "+":
            res = num1 + num2
            break
        case "-":
            res = num1 - num2
            break
        case "*":
            res = num1 * num2
            break
        case "/":
            res = num1 / num2
            break
    }
    display.innerHTML = res ?? 0
}