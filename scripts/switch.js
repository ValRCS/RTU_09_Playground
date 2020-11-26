console.log("Switch statement");

//if you have to decide between many options
//meaning we have branches going into many directions
// we could if else if else if else
let question = "valdis";


// if (question === "a") {
//     console.log("AAAA");
// } else if (question === "b") {
//     console.log("BBBB");
// } else if (question === "c") {
//     console.log("CCCC");
// } else if (question === "d") {
//     console.log("DDD");
// } else {
//     console.log("Something else", question)
// }

//nice alternative to code above would be switch statement
//for larger switch statements lookup for each branch will be equal
switch(question) {
    case "a":
    case "A":
        //do something here when question === "a"
        console.log("AAAA");
        break; //break exits our switch statement and goes the whatever comes after
    case "b":
        //do something here when question === "b"
        console.log("BBB");
        break; //break exits our switch statement and goes the whatever comes after
    case "c":
        //do something here when question === "c"
        console.log("CCCCC");
        break; //break exits our switch statement and goes the whatever comes after
    case "valdis":
        console.log("Interesting question", question);
        break;
    default: //meaning none of the cases matched
        console.log("Default Something else", question);
        break;
} // switch statement is done here

console.log("After switch");
let number = 30;
//switch will not be very useful for number ranges
//so you would go back to if else
if (number > 40) {
    console.log("Over 40");

} else if (number < 40) {
    console.log("Less than 40");
} else {
    console.log("Exactly 40");
}

