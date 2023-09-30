//Topic:Number And Maths              Youtubr Chanell: Chai aur code             Video no: 12

//********************************Numbers******************************** */

const score = 345
//console.log(score)

// new way to declare number with it's "type of"

const balance = new Number(49534) 
//console.log(balance)

//console.log(balance.toString())
//console.log(balance.toFixed(2))

const otherNumb = 97.64346
//console.log(otherNumb.toPrecision(2))

//const otherNumb1 = 197.64346
//console.log(otherNumb1.toPrecision(3))

//const otherNumb2 = 1197.64346
//console.log(otherNumb2.toPrecision(3))

//const otherNumb3 = 1197.64346
//console.log(otherNumb3.toPrecision(4))

//const hundreds = 1000000
//console.log(hundreds.toLocaleString())                  //it convert large value to comas

//****************************** Maths *****************************************************/

/*console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.5))
console.log(Math.ceil(8.3))
console.log(Math.floor(8.3))
console.log(Math.sqrt(4))
console.log(Math.pow(4,2))                              //This is power function e.g. 4 ki power 2 = 16
console.log(Math.min(2,5,9,))
console.log(Math.max(3,6,8,))*/

console.log(Math.random())                              // it give values between 0 and 1
console.log(Math.random()*10+1) // when we multiply random() method to 10 it shift one value to left side and after sometime it give value 1.0 or 3.0 to avoide this zero we use next line method (45)

console.log((Math.random()*10)+1)                       // to Avoide BODMAS Method use brackets 

const min = 10                           // to get spacific values between 10 to 30 we use next line method (51)
const max = 40

console.log(Math.floor(Math.random()*(max - min +1)) + min)