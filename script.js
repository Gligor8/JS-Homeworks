// 1. Create a javascript function which accepts a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.
// 30 mins

// 2. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.
// 30 mins


// 3. Create a Javascript ATM machine. 
//The ATM should have the following functions:
//- make desposit (this function should add money to the users balance)
//- make withdrawal (this function should should withdraw money to the users balance)
//- get the balance (this function should display the current balance of the user)
//- exit (this function should close the window)
// create interactive menu using alerts
// 90 mins

// Exercise 1
console.log("============ Exercise 1 ==========");


var num=window.prompt();
var str = num.toString();
var result = [str[0]];

function detectUnevenNums(){
    for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
}

// Exercise 2
console.log("============ Exercise 2 ==========");

var divNumbers = 

function findDivNum(){
    
    
}
// Vtorava zadaca ne uspeav da ja resam


// Exercise 3
console.log("============ Exercise 3 ==========");

let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdrawal");
let submit = document.getElementById("submitBttn");
let balance = document.getElementById("balanceBtn");
let exit = document.getElementById("exitBtn");

var Assets = 10000 

function ATM(){

function enterDep(){
    let balState = Assets + deposit
    alert(`You have ${balState} on balance!`);
}
// Ovde mi se javi nekoj problem svrzan so povrzuvanjeto na funkcijata so button-ot
addEventListener('click', enterDep, submit);


function withdrawMoney(){
    let withState = Assets - withdraw;
    alert(`You have ${withState} on balance!`);
}

addEventListener('click', withdrawMoney, submit);

function showBalance(){
    let bal = Assets;
    bal.target
    alert(`You have ${bal} on balance!`);
}

addEventListener('click', showBalance, balanceBtn);


}

// Ova neznam kako da go izvedam
addEventListener('click', ATM, exit);