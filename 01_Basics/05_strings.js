const name = "renish"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('renish-ri-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString =gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   Renish   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "httpss://renish.com/renish%20Isotiya"

console.log(url.replace('%20', '-'));
 
console.log(url.includes('renifsh'));

console.log(gameName.split('-'));
