// singleton

//object literals
const mysymbol = Symbol("key1");

const student = {
    name: "ujala",               //symbol in object as key
    [mysymbol]: "mykey",
    age: 21,
    roll: 14,
    address: "Motihari"
}
console.log(student.name);
console.log(student["age"]);
console.log(student[mysymbol]);

student.roll = 15
console.log(student);

//making function

student.greeting = function() {
    console.log("hii from js");
}


student.greetingTwo = function() {
    console.log(`hii from js, ${this.name}`);
}

console.log(student.greeting());
console.log(student.greetingTwo());



