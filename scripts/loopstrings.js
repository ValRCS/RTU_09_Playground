console.log("Looping through strings");
const myName = "VisValdis";
// const likes = "potatoes";

//remember we can access each character of string by index which starts at 0
// console.log(myName[0]);
// console.log(myName[1]);

//so how can we get the number 6 automatically?
// for (let i=0; i < 6; i++) {
for (let i=0; i < myName.length; i++) {
    console.log("Letter No.", i+1, "is", myName[i]);
    console.log(`Letter No. ${i+1} is ${myName[i]}`); //backticks might bet better for longer strings
}

//alternative for looping through some sort of sequence in this case string
//indexing starting with 0 is a frequent cause of off by one errors
//so if you do not need the index number the below for of is safer
for (const c of myName) {
    console.log("Current letter is ", c);
}


//there is also for in loop but we do not use it for simple sequences! we use it for objects!!