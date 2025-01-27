// // console.log("kaal hack")
// // let a=20;
// // let b=60;
// // console.log(a+b)

// // console.log("50"+5)

// //change data type to another data type

// let str="happy"
// console.log(typeof str);
// let num1=Number(str)
// console.log(num1);

// let num2=505
// let str2=String(num2)
// console.log(typeof str2);

// // operations
// let num3=-100      
// let op=-num3           
// let opp= +num3
// console.log(op);
// console.log(opp);

// console.log("1"+2+3);
// console.log(5+6+"2")

// //prefix postfix operation
// let num5=200
// ++num5;
// console.log(num5);

// let num6=200
// --num6;
// console.log(num6);

// //comprison
// console.log(2==2);
// console.log(null==0);
// console.log(null>0);
// console.log(null>=0);

// // array , object , function
// //array
// const list=["game" , "squide game" , "money heist"]
// console.log(typeof list);

// //object
// let new_login={
//     name: "happy",
//     age : 20,
//     state: "bihar"
// }
// console.log(new_login);

// //function

// const new_fun=function(){
//     console.log("JAVA SCRIPT PRACTICE TIME")
// }
// new_fun()  //call function


// // numbers
// const score=100
// console.log(typeof score);

// console.log(score.toString());
// console.log(typeof score);
// console.log(score.toFixed(5));

// const uk=10000000
// console.log(uk.toLocaleString('en-IN'));

// //maths

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.min(4,3,1,0,54,55,80,1,0));
// console.log(Math.max(5,9,3,0,1,7,555));
// console.log(Math.round(4.3));

// console.log(Math.ceil(4.1));
// console.log(Math.floor(6.9));
// console.log(Math.random());

// console.log((Math.random()*10)+1);

// const min=20
// const max=30
// console.log((Math.floor(Math.random()*(max-min+1))+min));

// array in js

// const newarr= [0,1,2,3,4,5]
// console.log("A ",newarr);
// const a=newarr.slice(1,3)
// console.log("B ",newarr);
// console.log(a);

// const b=newarr.splice(1,3)
// console.log("C ",newarr);
// console.log(b);

// merge two array in one array
// const A1=[0,1,2,3,4,5]
// const B1=[6,4,7,8,9,0]

// console.log(A1.concat(B1));
// console.log(...A1 ,...B1);
// A1.push(B1)
// // console.log(A);

// add in one array

// const newa=[1,2,3,4,5,[6,8,9],5,7,[6,5,[8,7,0]]]
// const new2 = newa.flat(Infinity)
// console.log(new2);

// check array

// console.log(Array.isArray("HAPPY"));

// // change string in array
// console.log(Array.from("Happy"));
// console.log(Array.from({name: "happy"}));

// merge multiple array in one array

// let a=100
// let b=800
// let c=600

// console.log(Array.of(a,b,c));

// object

// const user={
//     name: "happy",
//     age: "20",
//     location: "Bihar",
//     email: "hk@google.com"
// }

// console.log(user);

// // symbol using as a key in object

// const mysymbol=Symbol("happy")

// const user1={
//     name: "happy",
//     age: "20",
//     location: "Bihar",
//     email: "hk@google.com",
//     [mysymbol]: "Kumar",
// }

// console.log(typeof user1[mysymbol]);
// Object.freeze(user1)
// user1.age="21"
// console.log(user1);

// user1.greeting=function(){
//     console.log(`Hello js user,${this.name}`);

// }
// console.log(user1.greeting());

// // merge two object in one object

// const A={1:"HAPPY",2:"KUMAR"}
// const B={3:"HAPPY",4:"KUMAR"}

// // const C=Object.assign(A,B);
// // const C=Object.assign({},A,B);
// const C={...A,...B}
// console.log(C)
// const course={
//     course_name: "HAcking world",
//     price: "5000",
//     course_instructor:"KAAL",
// }
// const {course_instructor}=course
// console.log(course_instructor);

// ////    ***** function*****    /////

// const king = function(){
//     console.log("happy");
// }

// king()

// const add = function(n,n1){
//       console.log(n+n1)
//       console.log(n-n1)
//       console.log(n*n1)
//       console.log(n/n1)

// }
// add(5,8)

// function calculatenum(num1){
//     return num1
// }

// console.log(calculatenum(200,500,400,600))

// function calculatenum(var1,var2,var3,num1){
//     return num1
// }

// console.log(calculatenum(200,500,400,600))

// using objects in function

// const user={
//     name:"happy",
//     age: "20"
// }

// function userdata (obj){
//     console.log(`user is ${obj.name} and age is ${obj.age}`);

// }

// userdata(user)

// return value by index number 

// const data=[200,6000,400,700,900]

// function getdata(getarray){
//     return getarray[0]
// }

// console.log(getdata(data));



// ******** scope ****** //// {}--this is scope

// let a=84
// const b=72
// var c=54

// var d=200

// if(true){
//     let a=84
//     const b=72
//     var c=54
//     console.log(c)
// }

// // console.log(a);
// // console.log(b);
// console.log(d);