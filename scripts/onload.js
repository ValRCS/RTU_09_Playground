// console.log("This runs immediately!")

//careful here without defer you might not have references to these elements
const capitalizeBtn = document.getElementById("capitalize-name");
const nameField = document.getElementById("name-input");

const resultLive = document.getElementById("result-live");
const resultField = document.getElementById("result-field");

function onCapClick() {
    console.log("Capitalize button pressed!");
    console.log(`Current name field value is ${nameField.value}  ` );
    resultField.innerText = `Name field ALL CAPS: ${nameField.value.toUpperCase()}`;
}

function onNameChange() {
    console.log("Name value was changed to " + nameField.value);
    resultLive.innerText = "lower input: " + nameField.value.toLowerCase();
}


function addListeners() {
    console.log("Adding listeners");
    capitalizeBtn.addEventListener("click", onCapClick);
    // nameField.addEventListener("change", onNameChange); //so change only fires when Enter is pressed in text input
    //so input will change on any time the input field has changed
    nameField.addEventListener("input", onNameChange);

    
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

