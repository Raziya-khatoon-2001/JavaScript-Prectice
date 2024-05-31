function sayMyName() {
    console.log("R");
    console.log("a");
    console.log("z");
    console.log("i");
    console.log("y");
    console.log("a");
}

//sayMyName();

function addTwoNumber(number1, number2){
   // console.log(number1 + number2);

   /*let result = number1 + number2;
   return result*/

   return number1 + number2;
};

//addTwoNumber(3, 4);
//addTwoNumber(3, "4");
//addTwoNumber(3, null);

const result = addTwoNumber(3, 5);
//console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage ("Raziya"));
//console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Raziya",
    price : 199
}

function handleObjects(anyobjects){
    console.log(`username is ${anyobjects.username} and price is ${anyobjects.price}`);
}

//handleObjects(user);
handleObjects({
    username: "Ziya",
    price: 499
});

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));
