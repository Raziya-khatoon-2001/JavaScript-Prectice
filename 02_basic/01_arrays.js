const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["Salman Khan", "Sahrukh khan"];

const myArray2 = new Array(1, 2, 3, 4)
//console.log(myArray[1]);

//Array Methods


/*console.log(myArray.push(6));
console.log(myArray.push(7));*/

//onsole.log(myArray.pop());
//console.log(myArray.unshift(9));

//myArray.shift();

//console.log(myArray.includes(9));
//console.log(myArray.indexOf(3));

const newArray = myArray.join();
console.log(myArray);
console.log(newArray);

// slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3);
console.log("c", myArray)
console.log(myn2);
