// Reduce------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const total = numbers.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)                                            // the value of accumulator will be same as for the first time as written here
// console.log(total);



// using arrow function--------------
const score = [5, 10, 15, 20, 25, 30, 35]
const finalScore = score.reduce( (acc, cur) => acc + cur, 0)
console.log(finalScore);
