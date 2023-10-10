const string1 = 'string1'; // String
const string2 = "string2"; // String
const string3 = `string3`; // String
const number1 = 10; // Number
const number2 = 10.52; // Number
let undefined; // undefined => Não aponta pra local nenhum da memória
const nulo = null; // null => Não aponta pra local nenhum na memória
let boolean = false; // Boolean => true, false

// String
console.log(`${string1}: ${typeof string1}, ${string2}: ${typeof string2}, ${string3}: ${typeof string3}`);

// Number
console.log(`${number1}: ${typeof number1}, ${number2}: ${typeof number2}`);

// undefined
console.log(`${undefined}: ${typeof undefined}`);

// null
console.log(`${nulo}: ${typeof nulo}`);

// Boolean
console.log(`${boolean}: ${typeof boolean}`);