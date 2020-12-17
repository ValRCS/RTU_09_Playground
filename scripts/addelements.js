//our globals will work since we are using defer
const numA = document.getElementById("num-a");
const numB = document.getElementById("num-b");
const addBtn = document.getElementById("add-el");
const addManyBtn = document.getElementById("add-many");
const delBtn = document.getElementById("delete-all");
const elContainer = document.getElementById("app-cont");

function addNewElement(tag, parent, text, id, defClass = "new-el") {
    const newEl = document.createElement(tag); 
    newEl.id = id;
    newEl.classList.add(defClass);
    newEl.innerText = text;
    parent.appendChild(newEl);
}

function onAddBtnClick() {
    console.log("Add button was clicked!");
    const num = +numA.value;
    addNewElement("div", elContainer, "Lorem Ipsum "+num, "el-id"+num);
    //this lets us have multiple elements with same id, thats a minus
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
