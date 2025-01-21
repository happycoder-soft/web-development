// console.log("kaal hack")
// let a=20;
// let b=60;
// console.log(a+b)

// console.log("50"+5)

//change data type to another data type

let str="happy"
console.log(typeof str);
let num1=Number(str)
console.log(num1);

let num2=505
let str2=String(num2)
console.log(typeof str2);

// operations
let num3=-100      
let op=-num3           
let opp= +num3
console.log(op);
console.log(opp);

console.log("1"+2+3);
console.log(5+6+"2")

//prefix postfix operation
let num5=200
++num5;
console.log(num5);

let num6=200
--num6;
console.log(num6);

//comprison
console.log(2==2);
console.log(null==0);
console.log(null>0);
console.log(null>=0);

// array , object , function
//array
const list=["game" , "squide game" , "money heist"]
console.log(typeof list);

//object
let new_login={
    name: "happy",
    age : 20,
    state: "bihar"
}
console.log(new_login);

//function

const new_fun=function(){
    console.log("JAVA SCRIPT PRACTICE TIME")
}
new_fun()  //call function


// numbers
const score=100
console.log(typeof score);

console.log(score.toString());
console.log(typeof score);
console.log(score.toFixed(5));

const uk=10000000
console.log(uk.toLocaleString('en-IN'));

//maths

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.min(4,3,1,0,54,55,80,1,0));
console.log(Math.max(5,9,3,0,1,7,555));
console.log(Math.round(4.3));

console.log(Math.ceil(4.1));
console.log(Math.floor(6.9));
console.log(Math.random());

console.log((Math.random()*10)+1);

const min=20
const max=30
console.log((Math.floor(Math.random()*(max-min+1))+min));
