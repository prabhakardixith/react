const myArrayA = [];
myArrayA.push("pd"); // insert at last
myArrayA.push("ap");
myArrayA.push("dd");
myArrayA.unshift("at"); // insert in the beggining
console.log(myArrayA)

// myArray.splice(0,3,50); // remove and remove and add

// console.log(myArray)


// console.log("Array value : "+ myArray);
// myArray.shift() // remove from beggining

// console.log(myArray)

// myArray.pop(); // remove at end

// console.log(myArray)

const myArrayB = ["as","we","sd"];

//spread operator

console.log([...myArrayA,...myArrayB]);
