// GLobal Variables
const defaultValue = 0;
let currentValue = defaultValue;
let previousValue = defaultValue;
let result;

// Getting references of UI
// function to get reference of Single element

function getSingleReference(argValue){
  return document.querySelector(`${argValue}`);
}

const inputValue = getSingleReference('.input-field');
const addBtnReference = getSingleReference('.addBtn');
const subBtnReference = getSingleReference('.subtractBtn');
const divBtnReference = getSingleReference('.divideBtn');
const mulBtnReference = getSingleReference('.multiplyBtn');
const lableReference = getSingleReference('#result');

// console.log(inputValue.value); 

addBtnReference.addEventListener('click',add);
mulBtnReference.addEventListener('click',multiply);
divBtnReference.addEventListener('click',divide);
subBtnReference.addEventListener('click', subtract);

function add(){
  evaluateResult('+');
}

function multiply(){
 evaluateResult('*');
}

function divide(){
  evaluateResult('/');
}

function subtract(){
  evaluateResult('-');
}


// Evaluate the Input 

function evaluateResult (operator){
  const input = valiadateInput(); // if entered a number only
  if(input){
    currentValue = parseInt(inputValue.value);
    if(operator === '-'){
      result = previousValue - currentValue;
      setLabel(operator);
      previousValue -= currentValue;
    }
    else if(operator === '/'){
      result = previousValue / currentValue;
      setLabel(operator);
      previousValue /= currentValue;
    }
    else if(operator === '*'){
      result = previousValue * currentValue;
      setLabel(operator);
      previousValue *= currentValue;
    }
    else{
      result = previousValue + currentValue;
      setLabel('+');
      previousValue += currentValue;
    }
  }
}

// Function to set the label

function setLabel(operator){
  lableReference.innerHTML = ` ${previousValue} ${operator} ${currentValue} = ${result}`;
}

// Function to validate input

function valiadateInput(){
  const inputVal = inputValue.value;
  if(parseInt(inputVal))
    return true;
  else{
    inputValue.style.border = "2px solid Red";
    inputValue.style.color = "red";
    return false;
  }
}