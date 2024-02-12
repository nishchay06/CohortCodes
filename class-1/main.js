// var, let and const
// var is archaic
// const is constant i.e. no changes to value
// let -> [value & datatype] can be changed during running program
// let a = 1;
// console.log(a);
// a = "hello"
// console.log(a);

// data types -> strings, numbers and booleans
// let firstName = "nishchay";
// let age = 21;
// let isEmployed = false;
// console.log("My name is " + firstName + ", I am " + age + " years old.");

// simple if-else
// if(isEmployed) {
//     console.log("Yess, I am employed!!")
// } else {
//     console.log("Still trying to earn.")
// }

// simple for loop
// for(let i = 0; i < age; i++){
//     if(i&1) console.log(i);
// }

// arrays
// const ages = [20,21,25,27,28,32,30,8,10,7,19,32,51,54,37,54,12,74,42,54,43,8,34,64,7,34,85];
// let len = ages.length;
// print odd ages
// for(let i = 0; i < ages.length; i++) if(ages[i]%2 == 1) console.log(ages[i]);

// print max age
// let mx = 0;
// for(let i = 0; i < len; i++) {
//     if(mx < ages[i]) {
//         mx = ages[i];
//     }
// }
// console.log(mx);

// objects
// const user1 = {
//     firstName: "nishchay",
//     gender: "male"
// }
// two ways to access attributes of an object
// console.log(user1.firstName)
// console.log(user1["firstName"])

// arrays of objects
// const users = [{
//     firstName: "nishchay",
//     gender: "male"
// }, {
//     firstName: "varun",
//     gender: "male"
// }, {
//     firstName: "priya",
//     gender: "female"
// }]
// let size = users.length
// print name of all male users
// for(let i = 0; i < size; i++) {
//     if(users[i]["gender"] == "male") {
//         console.log(users[i]["firstName"])
//     }
// }

// functions -> takes inputs and returns and output
// function sum(a, b) {
//     return a + b;
// }
// const val = sum(3,5)
// console.log(val)
// const val = sum(sum(1,2),4) -> 7
// const val = sum(sum(1,2),"hello") -> 3hello

// Callbacks -> passing functions as arguments to a function
// function printSumMyWay(a,b,fn) {
//     fn(a+b);
// }
// function display1(a){
//     console.log("answer is " + a);
// }
// function display2(a){
//     console.log(a+ " is answer.");
// }
// printSumMyWay(3,5,display1);
// printSumMyWay(3,5,display2);
