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

//function with a default parameter
function greetName(name = "Valdis") {  
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

//so Valdis is now default for name, when no parameter is given
greetName();
greetName("Ilze");
result = mult(5,10, true);
//for boolean arguments it is more readable to be
// explicit on what argument you are using
mult(10,20, isLogging = true);

const myBtn = document.getElementById("click-btn");
const myFooter = document.getElementById("my-foot");
let globalCount = 0;

//i've add a mouse click handler to my button with id click-btn
//we 
myBtn.onclick = function () {
    globalCount++;
    console.log("I was clicked!", globalCount, "times");
    myFooter.textContent = "I was clicked!" + globalCount;
    //I can do more stuff here
};

//second way of adding a listener
//we can select elements using our CSS selector syntax
const colorBtn = document.querySelector("#color-btn");

colorBtn.addEventListener('click', showRandomBackground);
//main difference between onclick and addEventListener
//we can add multiple addEventListener handles to same action




