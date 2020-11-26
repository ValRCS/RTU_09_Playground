console.log("For looping");

//you could do this with while loop but it would take 3 lines
for (let i=0; i < 5; i++) {
    console.log("Square of ", i, "is:", i*i);
    console.log("*******")
}//i stops living here

//so when you know the number of loops/iterations you would use for loop
//so i+=2 is same as i = i+2
for (let i=2; i < 20; i+=2) {
    console.log("Square of ", i, "is:", i*i);
    console.log("*******");
}
// console.log(i);// this should give error
//notice that we use let i twice, it is because i is not living outside the loop
//that is another nice thing a restriction of loop variable to inside the loop
// this is called variable scope

let result = 0; //very typical to set some results variable and initialize with some zero type of value
for (let i=0;i < 10; i++) {
    result = result + i; // shorter is  result += i
}
// console.log("this will be error",i)
console.log("the result is", result);

//how about counting backwards from 15 to 5 included and summing those values?
let resultDown = 0;
for(let i=15; i>=5; i--) {
    resultDown += i
    console.log("Result Down is", resultDown);
    console.log("I is ", i);
}

for (let i=0;i<20;i++) {
    console.log("Working on number", i); //so this line will always work inside the loop
    if (i % 3 === 0) {
        console.log(`This number ${i} divides by 3`);
    } else {
        console.log(`This number ${i} DOES NOT divide by 3`);
    }
}