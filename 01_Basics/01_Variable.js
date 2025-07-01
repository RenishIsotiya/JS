const accountId = 12345
let accountEmail = "renish@gmail.com"
var accountPassword ="123456"
accountCity = "Delhi"

// accountId =2 //not allowed

accountEmail = "hbhf@gmail.com"
accountPassword = "58555"
accountCity = "goa"
let accountState;
console.log(accountId);

/*
 prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

