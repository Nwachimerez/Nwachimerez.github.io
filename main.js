// alert = prompt('what is your name')
// let userName = 'uchenna';
// console.log(userName);

// let count = 0;
// while(count <= 100){
//     console.log(count + "i love my dog");
//     count = count + 1
// }

// let user = 'uchenna'
// console.log(user)

// let age =prompt(25);
// if(age >= 18){
//     console.log('you are an adult');
// }
// else{
//     console.log('you are a minor')
// }
/* 
let grade = prompt(70)
if(grade >= 70){
    console.log('A grade');
}
else if(grade >= 60){
    console.log('B grade');
}
else if(grade >= 50){
    console.log('C grade');
}

let person = 'John'
console.log('hello my name is ' + person)
let numbers = [1,2,3,4,5,];
console.log(numbers[0]);
numbers.push(6);
console.log(numbers)
document.writeln("<h1>Nwachimereze</h1> 30")
document.writeln([`<h1>20+30</h1>`])
console.log(typeof "true") */
// console.log("name" .toUpperCase())
// var $name='uchenna'
// console.log('Good bye '+ $name)
// var ben="My name is Nwachimereze"
// console.log(ben)
// her="My state is Enugu"
// console.log(her)
// his="I'm 27 years old"
// console.log(his)
// nation="I'm from Nigeria"
// console.log(nation)
// const userName=prompt("Hallo user")
// // document.writeln("<h1>" + "Hello " + userName+"</h1>")
// document.writeln(`<h1>hello ${userName} </h1>`)
// let grade =prompt(80)
// if(grade >= 80){
//     console.log('A grade')
// }
//  if(grade >= 70){
//     console.log('B grade')
// }
// else if(grade >= 60){
//     console.log('C grade')
// }
// Js loop
// for loop
// for(let i=0; i<5;i++){
//     console.log(i);
// }
// // alert=prompt(hello)
// let i = 0;
// while (i < 7) {
//   console.log(i);
//   i++;
// }
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// const person = { name: 'John', age: 30 };
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }
// let secretNum = 7; 
// let attempts = 0;
// let maxAttempts = 5;

// while (attempts < maxAttempts) {
//   let userGuess = parseInt(prompt("Guess the number (Attempt " + (attempts + 1) + "/" + maxAttempts)));

//   if (userGuess === secretNum) {
//     alert("Congratulations! You've guessed the number correctly.");
//     break;
//   } else if (userGuess > secretNum) {
//     alert("Your guess is too high. Try a lower number.");
//   } else {
//     alert("Your guess is too low. Try a higher number.");
//   }

//   attempts++;
  
//   if (attempts === maxAttempts) {
//     alert("Game over! The secret number was " + secretNum + ".");
//   }
// }
// let secretNum = Math.floor(Math.random()*1033); 
// let maxAttempts = 5;

// for (let attempts = 0; attempts < maxAttempts; attempts++) {
//   let userGuess = parseInt(prompt(`Guess the number (Attempt ${attempts + 1}/${maxAttempts})`));

//   if (userGuess === secretNum) {
//     alert("Congratulations! You got it right.");
//     break;
//   } else if (userGuess > secretNum) {
//     alert("try a lower number");
//   } else {
//     alert(" try a higher number");
//   }

//   if (attempts === maxAttempts - 1) {
//     alert("Game over! The secret number was " + secretNum + ".");
//   }
// }

// let myArray = ["Apple", "Mango", "banana"]

// let i = 0;
// while(i < 3){
// console.log(myArray[i]);
//   i = i + 1
// }

// let myArrays = ["chidi","sam","fav","obi"]
// for(let item of myArrays){
//   console.log(item)
  
// }
  

// function myFunction(){
//   console.log("hello, my name is obi")
// }

// myFunction()

// function myFunction(userName, userAge){
//     console.log("hello " + userName)
//     console.log(userName + " your age is " + userAge)
// }

// myFunction("Anthony", 88)
// myFunction("john", 32)
// function myFunction(){
//   console.log("Hello")
//   console.log("Welcome to our website")
//   console.log("We are glad to have you here")
// }
// myFunction()
// function sum(x, y){
//     console.log(x+ y)
// }
// sum(10, 30)
// function mult(a, b){
//     console.log(a* b)
// }
// mult(2,8)
// function sum(d, g){
//     return(d+ g)
// }
// console.log(sum(2,4))

// function sub(w, i){
//     return (w- i)
// }
// console.log(sub(2025, 2000))
// // 
// function sub(z,l){
//     return (z-l)
// }
// let userAge=sub(2025, 2000)
// console.log(userAge)
// document.writeln(userAge)

function sub(x, y){
    return x - y
}
let yearofBirth= prompt("what is your year of birth")
let currentYear= prompt("what year is it?")
let age= sub(currentYear,yearofBirth)
console.log(age)

// function sub(x, y){
//     return x - y
// }
// let yearofIdependency= prompt("what is your year of independence")
// let currentYear = prompt("what year is the current year?")
// let age= sub(currentYear,yearofIdependency)
// console.log(age)


// function converter(kgvalue){
//     return kgvalue*2.20462
// }
// let userWeightKG = prompt("what do you weigh in kg")
// let userWeightPounds = converter(50userWeightKG)
// document.writeln(`your weight in pounds is: ${userWeightPounds}`)