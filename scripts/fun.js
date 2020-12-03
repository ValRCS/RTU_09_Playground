// console.log("Testing functions");

//so i've declared a function but I am not using it just yet
function greetingFun() {
    console.log("Hello everyone!");
    console.log("How is everyone?");
}

// console.log("Hello everyone!");
// console.log("How is everyone?");
// console.log("Hello everyone!");
// console.log("How is everyone?");

//calling function
greetingFun();

//function with a parameter
function greetName(name) {  
    console.log(`Why hello there ${name}!`);
    console.log("Why hello there " + name + "!");
}


greetName("Valdis");
greetName("Liga");
greetName("Evija");



add(5,10);
add(50,20);
add(55,99);
add("Valdis", " Liga");
add("Valdis ", 9000);
add("55", 99); //JS is loose with types so this will lead to 5599

//generally you want to declare functions at the top and then call them later
//you might even use the functions from another file

let result = mult(2,3);
console.log("My result is", result);
//if functions return values we can nest them
result = mult(mult(5,10), mult(2,3));
console.log("New result!", result);