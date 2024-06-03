const user = {
    username: "Raziya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
//user.welcomeMessage();
//user.username = "ziya";
//user.welcomeMessage();

//console.log(this);

/*function chai() {
    let username = "Raziya";
    console.log(this.username);
}

chai();*/

/*const chai = function(){
    let username = "Raziya";
    console.log(this.username);
}
chai();*/

const chai = () => {
    let username = "Raziya";
    console.log(this.username);
}

//chai();

/*const addTwo = (num1, num2) => {
    return num1 + num2;
}*/

//const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "Raziya"});

console.log(addTwo(2, 5));