// String            Youtube Channel: Chai aur code              video no: 11

const firstName = "Javed"
const lastName = "Abbas"

// This console is old methed
console.log(firstName + lastName) 
// Use new method to console
console.log(`My first Name is ${firstName} and my last name is ${lastName}`)

const gameName = new String("Free Fire")
console.log(gameName.length)                          //length finding method
console.log(gameName.toUpperCase())                   //small letter to larg letter
console.log(gameName.charAt('2'))                     //find the position of word in string 
console.log(gameName.indexOf("i"))                    //find the place(konse number pr ha) of word in string


const newString = gameName.substring(2, 8)
console.log(newString);

const anotherString = gameName.slice(3, 8)
console.log(anotherString)



const anotherStringOne = "      Javed-Abbas-gamer    ";
console.log(anotherStringOne)
console.log(anotherStringOne.trim())
console.log(anotherStringOne.split('-'))


const url = "http://javed.com/jam20%sahab";
console.log(url.replace("20%", `-`))
console.log(url.includes('javed'))                         //if name is includes then answer is true 
console.log(url.includes('Ahad'))                         //if name is not includes then answer is false
