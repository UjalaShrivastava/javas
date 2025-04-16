const fruits = ["Mango", "Grapes", "papaya", "Apple"];
const flowers = ["Tulip", "Lotus", "Rose", "Sunflower"];

const nfruits = fruits.slice(0, 2);
console.log(nfruits);

const nflowers = flowers.splice(1, 2);
console.log(nflowers);


(fruits.push(flowers));
console.log(fruits);

const all = fruits.concat(flowers)
console.log(all);

const total = [...fruits, ...flowers];
console.log(total);

const array = [1, 2, 3, 4, [4, 5, 0], 9, 6, [9, 3, 8, [2, 4, 0]]]
const new_array = array.flat(Infinity)
console.log(new_array);

console.log(Array.isArray("Ujala"));
console.log(Array.from("Ujala"));

