console.log("Some Booleans and some conditionals");
let n = 2;
const myMax = 5;
let isRaining = true;
let isWarm = true;
let isSnowing = true;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison
console.log(n*n > myMax);

//One Key takaaway use === string comparison , DO NOT use == it leads to bugs, rare but annoying
// same goes for inequality use !== for inequality
console.log(n !== myMax); //true because 2 is NOT equal to 5

console.log("Is it raining? " + isRaining);

console.log("Is it raining AND also warm? ", isRaining && isWarm); //so we check if BOTH sideds are true only then it will be true
console.log("Is it raining OR possibly warm? ", isRaining || isWarm); //so we check if EITHER side are true then it will be true

isRaining = false; //so it stopped raining...

console.log("Is it raining AND also warm? ", isRaining && isWarm); //so we check if BOTH sideds are true only then it will be true
console.log("Is it raining OR possibly warm? ", isRaining || isWarm); //so we check if EITHER side are true then it will be true

console.log("Is it NOT raining? " + !isRaining); //using ! we can negate our truth so false -> true , true -> false

isSnowing = false; //turns out it is not snowing...

console.log("Is it raining AND also warm AND also snowing? ", isRaining && isWarm && isSnowing); //so we check if ALL sideds are true only then it will be true
console.log("Is it raining OR possibly warm OR possibly snowing? ", isRaining || isWarm || isSnowing); //so we check if ANY sides are true then it will be true

console.log("Let's check if it is raining");
isRaining = true;
//if (isRaining) is true we perform whatever instructions are in the following brackets { ...... }
if (isRaining) {
    console.log("I need my umbrella");
}

console.log("How about snow?");
//here I call my weather report station and get answer
isSnowing = true;

if (isSnowing) {
    console.log("Let me get my skiis");
    console.log("Snow tires too..");
} else {
    console.log("Whew it is not snowing at least");
    console.log("Maybe I will go for a swim...");
}

const myNumber = 142;


if (myNumber > 42) {
    console.log("Oh your number " + myNumber + " is over 42");
} else if (myNumber < 42) {
    console.log("Oh your number is LESS than 42");
} else  {//well whatever else is left goes here 
    console.log("Aha so I can conclude that myNumber is 42");
}


//better to use constant or variable for 42, 42 is so called magic number which is considered bad practice
const numberToFind = 42;

if (myNumber > numberToFind) {
    console.log("Oh your number " + myNumber + " is over " + numberToFind);
} else if (myNumber < numberToFind) {
    console.log("Oh your number is LESS than " + numberToFind);
} else  {//well whatever else is left goes here 
    console.log("Aha so I can conclude that myNumber is " + numberToFind);
}
console.log("All done for today! Whew...");