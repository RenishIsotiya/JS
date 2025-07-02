// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "renish",
    "full name": "Renish Isotiya",
    [mySym]:"mykey1",
    age: 20,
    location:"india",
    email: "renish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "remi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "remi@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
 }

 JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
