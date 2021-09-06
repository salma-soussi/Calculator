let res = 0;
let cal = "0";
let operator = null;
const output = document.querySelector(".output"); 

document.querySelector(".input").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
})

function buttonClick (num){
    if(isNaN(parseInt(num))){
        isSymbol(num);
    }else{
        isNumber(num);
    }
    rerender();
}

function isSymbol(sym){
    switch (sym) {
        case 'C':
            cal = "0";
            res = 0;
            operator = null;
            break;
        case "=":
            if (operator === null){
                return;
            }
            flashOperation(parseInt(cal));
            operator = null;
            cal = ""+res;
            res = 0;
            break;
        case '←' :
            if (cal.length ===1){
                cal = "0";
            }else{
                cal = cal.substring(0,cal.length-1);
            }
            break;

        default:
            console.log("here");
            handleMath(sym);
            break;
    }
}

function handleMath(value){
    
    const intValue = parseInt(cal);
    if (res === 0){
        res = intValue;
    }else{
        flashOperation(intValue);
    }
    operator = value;
    cal = "0";

}

function flashOperation (value){
    if (operator === "+") {
        res += value;
    } else if (operator === "-") {
        res -= value;
    }else if (operator === "×") {
        res *= value;
    }else {
        res /= value;
    }
}

function isNumber(num){
    if (cal === "0"){
        cal=num;
    }else{
        cal = cal+num;
    }
}

function rerender(){
    output.innerText = cal;
}

