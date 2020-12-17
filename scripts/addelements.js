//our globals will work since we are using defer
const numA = document.getElementById("num-a");
const numB = document.getElementById("num-b");
const addBtn = document.getElementById("add-el");
const addManyBtn = document.getElementById("add-many");
const delBtn = document.getElementById("delete-all");
const elContainer = document.getElementById("app-cont");

let globalCount = 0; //use globals sparingly

function addNewElement(tag, parent, text, id, defClass = "new-el") {
    const newEl = document.createElement(tag); 
    newEl.id = id;
    newEl.classList.add(defClass);
    newEl.innerText = text;
    parent.appendChild(newEl);
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        //The list is LIVE so it will re-index each call
        parent.removeChild(parent.firstChild);
    }
}

function onDelBtnClick() {
    console.log("Delete Button was clicked!");
    removeAllChildren(elContainer);
    globalCount = 0; //we reset the global count as well
}

function onAddBtnClick() {
    console.log("Add button was clicked!");
    globalCount++;
    let className = "";
    if (globalCount % 2 == 0) {
        className = "even-class";
    } else {
        className = "odd-class";
    }
    addNewElement("div", elContainer, "Lorem Ipsum "+globalCount, "el-id"+globalCount, className);
    //this lets us have multiple elements with same id, thats a minus
}

function onAddManyBtnClick() {
    const newElCount = parseInt(numB.value); //we need to parse an integer here
    console.log("Adding", newElCount, " elements at once");

    //simple loop example of adding multiple elements
    // for (let i=0;i < newElCount; i++) {
    //     if (i % 2 == 0) {
    //         className = "even-class";
    //     } else {
    //         className = "odd-class";
    //     }
    //     addNewElement("div", elContainer, "Lorem Ipsum "+i, "el-id"+i, className);
    // }

    //here we also update the global element count
    for (let i=globalCount;i < (globalCount + newElCount); i++) {
        if (i % 2 == 0) {
            className = "even-class";
        } else {
            className = "odd-class";
        }
        addNewElement("div", elContainer, "Lorem Ipsum "+i, "el-id"+i, className);
    }
    globalCount = globalCount + newElCount;
}

function addListeners() {
    console.log("Adding Listeners");
    addBtn.onclick = onAddBtnClick; 
    //alternative is addBtn.addEventListener("click", onAddBtnClick);
    delBtn.onclick = onDelBtnClick;
    addManyBtn.onclick = onAddManyBtnClick;

}

function main() {
    console.log("Starting Element Manipulation");
    addListeners();
}

window.addEventListener('DOMContentLoaded', main); // i am giving a reference to function main (could be any name)
