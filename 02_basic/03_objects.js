//singleton

//objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Raziya",
    "full name": "Raziya khatoon",
    [mySym] : "myKey1",
    age: 18,
    location: "katihar",
    email: "raziya@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "raziyakhatoon@gmail.com"
//Object.freeze(JsUser);
JsUser.email = "ziya@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());