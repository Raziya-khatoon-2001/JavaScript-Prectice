const isuserLoggedin = true;
const temprature = 41;

/*if(temprature === 41){
    console.log("less than 50")
}else{
    console.log("temprature is greater than 50");

}
console.log("Execute");*/

// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

/*if(score > 100){
    let power = "fly"
    console.log(`user power: ${power}`);
}

console.log(`user power: ${power}`)*/


//const balance = 1000;

//if(balance > 500) console.log("test"),console.log("test2");

/*if(balance < 500){
    console.log("less than 500");
}else if(balance < 700){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900")
}else{
    console.log("less then 1200");
}*/

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 2==3){
    console.log("Allow to buy course");
};

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}