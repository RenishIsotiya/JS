const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

const heros = [...marvel_heros, ...dc_heros]

// console.log(heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("renish"));
console.log(Array.from("renish"));
console.log(Array.from({name: "renish"})); //instresting

let score1 =100
let score3 =300
let score2 =200

console.log(Array.of(score1, score2, score3));
