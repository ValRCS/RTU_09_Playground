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