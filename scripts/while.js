console.log("While Loops");
console.log("While Loops");
console.log("While Loops");

let i = 0;
const isSkyBlue = true;
//so while i is less than 6 we keep doing whatever is inside the { brackets }
while (i < 6 && isSkyBlue) {
    console.log("Printing: " + i);
    i++; //increase i by 1,same as saying i = i + 1 or also i+=1
}
console.log("Loops is done and i is "+i);

//infinite loops can be useful
//when combine with some exit mechanism usually it would break;

while (true) {
    console.log("This would run forever without break", i);
    if (i > 10) { //some sort of quit condition
        console.log("Break condition reached, i is", i);
        break;
    }
    i++;
}
console.log("Whew after break out of infinite loop", i);