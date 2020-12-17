//our globals will work since we are using defer
const numA = document.getElementById("num-a");
const addBtn = document.getElementById("add-el");
const addManyBtn = document.getElementById("add-many");
const delBtn = document.getElementById("delete-all");
const elContainer = document.getElementById("app-cont");

function onAddBtnClick() {
    console.log("Add button was clicked!");
}

function addListeners() {
    console.log("Adding Listeners");
    addBtn.onclick = onAddBtnClick; 
    //alternative is addBtn.addEventListener("click", onAddBtnClick);

}

function main() {
    console.log("Starting Element Manipulation");
    addListeners();
}

window.addEventListener('DOMContentLoaded', main); // i am giving a reference to function main (could be any name)
