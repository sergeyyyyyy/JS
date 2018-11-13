var firOperand=0;
var secOperand=0;
var opType = "";



function trimLead(displ){
    if((displ.startsWith("0")) && !(displ.startsWith("0."))){
        newNum=displ.substr(1,);
        return newNum;
    } else{
        return displ;
    }
}
function knopki(addedNumber){
    var currentNumber;
    currentNumber = document.getElementById('displayMain').innerHTML;
    currentNumber = currentNumber+addedNumber;
    currentNumber = trimLead(currentNumber);
    document.getElementById('displayMain').innerHTML = currentNumber;
}
function clearDisplay(){
    document.getElementById('displayMain').innerHTML='0';
    document.getElementById('displayTop').innerHTML='0';
    firOperand = 0;
    secOperand = 0;
    opType="";
}
function operation(opSymbol){
    firOperand=document.getElementById('displayMain').innerHTML;
    opType=opSymbol;
    document.getElementById('displayTop').innerHTML = firOperand+opType;
    document.getElementById('displayMain').innerHTML = '0';
}
function opDivide(){
    if(secOperand==0){
        document.getElementById('displayMain').innerHTML = 'ERROR';
        setTimeout(clearDisplay,1500);    
    }else{
        document.getElementById('displayMain').innerHTML = firOperand / secOperand;
        document.getElementById('displayTop').innerHTML = firOperand + opType + secOperand+'=';
        var x=firOperand/secOperand;
        document.getElementById('history1').innerHTML = firOperand + opType + secOperand + '='+ x;
    }
}
function opMultiply(){
        document.getElementById('displayMain').innerHTML = firOperand * secOperand;
        document.getElementById('displayTop').innerHTML = firOperand + opType + secOperand+'=';
        var x=firOperand*secOperand;
        document.getElementById('history1').innerHTML = firOperand + opType + secOperand + '='+ x;
}
function opSubtract(){
    document.getElementById('displayMain').innerHTML = firOperand - secOperand;
    document.getElementById('displayTop').innerHTML = firOperand + opType + secOperand + '=';
    var x=firOperand-secOperand;
    document.getElementById('history1').innerHTML = firOperand + opType + secOperand + '='+ x;
}
function opAdd(){
    document.getElementById('displayMain').innerHTML = Number(firOperand) + Number(secOperand);
    document.getElementById('displayTop').innerHTML = firOperand + opType + secOperand + '=';
    var x=Number(firOperand)+Number(secOperand);
    document.getElementById('history1').innerHTML = firOperand + opType + secOperand + '='+ x;
}
function moveHistory(){
    document.getElementById('history5').innerHTML = document.getElementById('history4').innerHTML;
    document.getElementById('history4').innerHTML = document.getElementById('history3').innerHTML;
    document.getElementById('history3').innerHTML = document.getElementById('history2').innerHTML;
    document.getElementById('history2').innerHTML = document.getElementById('history1').innerHTML;
}
function ravno(){
    moveHistory();
    secOperand=document.getElementById('displayMain').innerHTML;
    switch(opType){
        case '/':
            opDivide();
            break;
        case '*':
            opMultiply();
            break;
        case '+':
            opAdd();
            break;
        case '-':
            opSubtract();
            break;
    }
}
