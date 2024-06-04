// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is best num")
    }
    //console.log(element);
}

//console.log(element);

for (let i = 1; i <= 10; i++){
    //console.log(`outer loop values: ${i}`);
    for (let j = 1; j <= 10; j++){
       // console.log(`inner loop values: ${j} and inner loop ${i}`);
       //console.log(i  + '*' + j + '=' + i*j);
    }
}

const myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}

// break and continue

for (let index =  1; index <= 20; index++){
    if (index == 5){
        console.log(`Detected 5`);
       // break;
       continue;
    }
    console.log(`Values of i is ${index}`);
    
}