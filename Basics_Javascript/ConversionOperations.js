let score = "33";

//for checking the "type" of variables we use two method given bellow:

//console.log(typeof score) //first type
//console.log(typeof (score)) //second type

//convert string to Number method

let valuInNumber = Number(score)
//console.log(typeof valuInNumber);

// in this case

//"33" => is a number 
//"33abc" => is NaN => not a Number
//true => 1 /false => 0

let loggedIn = 1;

let booleanLoggedIn = Boolean(loggedIn)
//console.log(booleanLoggedIn)

//notes in boolean
// 1 => true/ 0=> false
// "" => 0 => false
// "Javed" => true

// convert number to string

let anyNumber = 23;

let stringNumber = String(anyNumber)
console.log(typeof stringNumber)