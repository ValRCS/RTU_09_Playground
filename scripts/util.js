function add(a,b) {
    const c = a + b; //c is a local value(const in this case) 
    //c only lives within this function
    console.log(`${a} + ${b} = ${c}`);
    b = 500; //you can mutate the arguments inside the function
    console.log(b);
    //this returns undefined
}
//a,b,c will be gone once add is finished

function mult(a,b, isLogging = false) {
    const c = a * b; //c is a local value(const in this case) 
    //c only lives within this function
    if (isLogging) {
        console.log(`${a} X ${b} = ${c}`);
    }
    //we can return the value to be used by other function
    return c; //this means we can assign this value outside the function
    //without explicit return Javascript functions return undefined which is not very useful
}

function myRandom(number) {
    return Math.floor(Math.random() * (number+1));
  }

function showRandomBackground() {
    const rndCol = 'rgb(' + myRandom(255) + ',' + myRandom(255) + ',' + myRandom(255) + ')';
    console.log("new color will be", rndCol);
    document.body.style.backgroundColor = rndCol;
  }