// Map------------------

// const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newDigits = digits.map( (num) => num + 10)
// console.log(newDigits);



const numbers = [10, 20, 30, 40, 50, 60, 70, 80]

const newNumbers = numbers
        .map((num) => num * 10)
        .map( (num) => num + 1)
        .filter( (num) => num >= 400)                                // filter = only true value will be passed
console.log(newNumbers);
