console.log("Some String fun");
const myName = "Valdis \123"; //turns out we can escape any lower ASCII codes as well
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation
console.log("Hello my name is " + myName);
console.log("Alice said to the Rabbit \"Where are you going?\" but Rabbit run away");
console.log('Alice said to the Rabbit "Where are you going?" but Rabbit run away');
console.log(`Hey, ${myName} I can put all kinds of " and ' inside backticks `);

//turns we can use ' or " depending on need
console.log("I want to keep going");

// ` backticks lets us put variables and even perform operations inside string (string interpolation)
console.log(`${myName} your name is ${myName.length} letters long`);
console.log(`${myName} your name starts with ${myName[0]} interesting isn't it ?`);
// so myName[myName.length-1] guarantees last letter of the string
console.log(`${myName} the last letter of your name is ${myName[myName.length-1]} interesting isn't it ?`);

console.log(myName + " the last letter of your name is " + myName[myName.length-1] + " interesting isn't it ?");

console.log(myName.endsWith("S"));
console.log(myName.startsWith("Val"));
console.log(myName.toUpperCase()); 
console.log(myName.startsWith("Wolt"));
