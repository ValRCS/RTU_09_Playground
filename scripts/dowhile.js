console.log("Do while a variation of while");
console.log("We do while at least once guaranteed and only then check");
console.log("Shoot first and ask questions later...");

let i = 16;
do {
    console.log("This will print at least once!", i);
    i++;
} while (i < 20)

console.log("I is now ", i);

//you can emulate do while with while(true ) loop and then break check at the end of the loop