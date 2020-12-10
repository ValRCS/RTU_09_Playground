// console.log("This runs immediately!")

//careful here without defer you might not have references to these elements
const capitalizeBtn = document.getElementById("capitalize-name");
const nameField = document.getElementById("name-input");

const resultLive = document.getElementById("result-live");
const resultField = document.getElementById("result-field");
const numResult = document.getElementById("num-result");

//so this will be HTMLCollection (kind of like a specific array data type) hold all elements with class my-numbers
const allNumInputs = document.getElementsByClassName("my-numbers");

const addElBtn = document.getElementById("add-el");

const elCont = document.getElementById("app-cont");

let globalCount = 0; //use global state sparingly


function onCapClick() {
    console.log("Capitalize button pressed!");
    console.log(`Current name field value is ${nameField.value}  ` );
    resultField.innerText = `Name field ALL CAPS: ${nameField.value.toUpperCase()}`;
}

function onNameChange() {
    console.log("Name value was changed to " + nameField.value);
    resultLive.innerText = "lower input: " + nameField.value.toLowerCase();
}

function getSumFromHTMLCol(htmlCol) {
    let total = 0;
    for (let element of htmlCol) {
        // console.log("My element value is ", element.value);
        total += parseInt(element.value); //we need parseInt else we will get string addition
    }
    return total; //dont forget to return values sometimes :)
}

//TODO add me
function onNumChange(event) {
    console.log("Some number was changed!");
    console.log("Actually my name is", event.target.name);
    console.log("My new value is", event.target.value);
    const allNumSum = getSumFromHTMLCol(allNumInputs);
    numResult.innerText = "All number sum is:" + allNumSum;
}

//TODO add ability to add class to the element
function addNewElement(tag, parent, text, id, defClass = "new-el") {
    const newEl = document.createElement(tag); 
    newEl.id = id;
    newEl.classList.add(defClass);
    newEl.innerText = text;
    parent.appendChild(newEl);
}

function onAddBtnPress(event) {
    console.log("Pressed button with ID", event.target.id);
    globalCount++;
    const text = "Adding element No. " + globalCount;
    const id = "newel"+globalCount;
    addNewElement("div", elCont, text,  id);
}

function addListeners() {
    console.log("Adding listeners");
    capitalizeBtn.addEventListener("click", onCapClick);
    // nameField.addEventListener("change", onNameChange); //so change only fires when Enter is pressed in text input
    //so input will change on any time the input field has changed
    nameField.addEventListener("input", onNameChange);

    //looping through all of my elements in allNumInputs and adding a listener to each one
    for (let element of allNumInputs) {
        element.addEventListener("input", onNumChange)
    }

    addElBtn.addEventListener("click", onAddBtnPress);
    
}


function main() {
    //this will be the main entry point to the whole application
    //generally your main should consist of calling your other functions that you defined before
    console.log("I should run when content is loaded and ready to go");
    addListeners();
    console.log("Good to go now!");
}

//instead of using example from MDN with anonymous arrow function
//we will pass our own
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });

//instead of using example from MDN with anonymous arrow function
//we will pass our own
window.addEventListener('DOMContentLoaded', main); // i am giving a reference to function main (could be any name)
//so this function will be called when whole page is loaded

