//let el1 = 5
//let el2 = 2
//let el3 = 64
console.log("Testing arrays!");
let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); //in Javascript like most languages arrays start at 0 !!
console.log(fruits[1]);
console.log(fruits[2]);

//add new item
fruits.push("Banana"); //this adds a new item at the end of the array
console.log(fruits[3]);

//one way of going through all the elements
for (let i=0; i<fruits.length;i++) {
    console.log("Printing", i, fruits[i]);
}

let lastFruit = fruits.pop();
//so banana is gone from fruits but it is save in lastFruit

//second way of looping without index with of syntax
//if you do not need index this is nicer, this is relatively new syntax
for (let fruit of fruits) {
    console.log("Printing", fruit);
}

console.log("the last fruit is", lastFruit);

//there are more array methods you can find them here:
//https://javascript.info/array-methods