// Youtube channel "Chaiaurcode" video no = 9

// Premitive Data Types

//String
//Number
//Boolean
//null
//Undefined
//Symbol
//BigInt

const score = 34                // number example

const isLoggedIn = false        // Boolean example

const Id = Symbol("123")        //Two Symbol example
const UserId = Symbol("123")    

const userNum = 432463456       // BigInt Example

const empty = null              //Null example

//const UserEmai;                 // Undefined example



//Reference  (Non-Premitive) Data-types

//Array 
//OBject
//Function

const heros = ["Allama Iqbal", "Quaid-e-Azam", "Sir syed ahmad khan"]        //Array example

//console.log(heros);

const myObj = {                                                            //Object Example
    name: "Javed",
    age: 19,
    gender: "Male"
}


const myFunction = () => {                                               // Function example
    console.log("Hello World");
}

//***************************************************************************************************
//Stack and Heap Memory Video no 10

//Premitive Data types are stored in stack memory
//Non premitive datatypes are stored in heap memory

// for example  of stack memory

const myName = "Javed"

let mySecondName = "Abbas"
mySecondName = "jedi";

console.log(mySecondName);

//exaple of heap memory

const userOne = {
    name: "Abbas",
    email: "Abbas@gmail.com"
}

let userTwo = userOne

userTwo.email = "Javed@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)