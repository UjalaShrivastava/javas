//primitive


const score = 100
const scoreValue = 100.6

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('135')
const anotherId = Symbol('345')

//non-primitive

const fruits = ["mango", "banana", "apple"]

let student = {
    name: "raj",
    age: "20",
    address: "bihar"

}

const myFunction = function(){
    console.log("hello");
}

console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof isLoggedIn)
console.log(typeof outSideTemp)
console.log(typeof userEmail)
console.log(typeof id)
console.log(typeof anotherId)
console.log(typeof fruits)
console.log(typeof student)
console.log(typeof myFunction)

