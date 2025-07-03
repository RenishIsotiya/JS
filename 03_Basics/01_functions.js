function sayMyName(){
console.log("r");
console.log("e");
console.log("n");
console.log("i");
console.log("s");
console.log("h");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result    
return number1 + number2
}

const result = addTwoNumbers(3 , 5);

// console.log("Result", result);

function loginUserMessage(username = "ram"){
    if(!username){
        // console.log("Please enter a username");
        return
    }
    return `${username} just Logged in`
}

// console.log(loginUserMessage("renish"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "renish",
    price: 198
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price:2555
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
