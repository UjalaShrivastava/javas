// for of------------

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);        
}


const greetings = "hello guys"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}


// Maps---- (for unique value)

const map = new Map()
map.set("IN", "India")
map.set("ENG", "England")
map.set("NZ", "Newzealand")
map.set("SA", "South Africa")
map.set("IN", "India")

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}
