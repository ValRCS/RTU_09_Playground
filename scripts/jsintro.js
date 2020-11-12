console.log("Basic Intro to Javascript!");
// alert("Click me!"); //alerts are really annoying to most viewers so advice is not to use them
console.log("All done with my program!");
let counter = 0; //so I need to declare my variable first and I also I should give it some value
//there are 3 ways of storing some values
//var, let, and const
//var is in many older tutorials and its still around but it is recommended that you switch to let and const
//those came in mid 2010s and 
//so let is for storing values(actually references/shortcuts to those values) which can be changed

console.log("My counter is", counter);
counter = 50; //number type
console.log("My counter is", counter);
let myname = "Valdis"; //string type
console.log("My name is", myname);
console.log(myname, "is ", myname.length, "letters long");
let a = 5.5;
let b = 3.9;
let res = a+b; // i am storing the results of a+b inside c, c is pointing to the answer
console.log(a+b);
console.log(res);

const PI = 3.14159; //const should be used for values we do not intend to change
console.log(Math.sin(PI));
console.log(Math.sin(Math.PI), "Real PI is", Math.PI);
let mysinus = Math.round(Math.sin(Math.PI)); //should be close to 0 should round to 0
console.log(mysinus);

let isSunYellow = true;
console.log(isSunYellow);
let someValue = null;
console.log(someValue);

let x = 10;
console.log(x, x+10, x*20, x-3, x/2); //basic arithmetic
console.log(x**3); //so x cubed
let y = x**2+5*x+3;
console.log(y);

//naming variables
//Case Sensitive, starts with letter can have numbers, _, no spaces or -
//a1 is ok, 1a is not ok
//recommended is to use camelCase,
// meaning full English words starting with 2nd word you start each word with Capital
//short variable names like x or a should be used sparingly
//the short ones should be used when there is little room for confusion on their meaning
//x, y for some coordinates
//maybe c for single symbols
let c = "V" //so a single character string
console.log(c);
let myreminder = 12 % 7; //so this calculates the reminder
console.log("reminder of 12 divided by 7 is ", myreminder)


const resultElement = document.getElementById('result-field')
resultElement.innerText = "Nice to meet you " + myname;





// function onClick(msg) {
//     console.log("I was clicked", msg);
//     counter++; //add one to counter
//     const resultElement = document.getElementById('result-field')
//     resultElement.innerText = counter;
// }