const employee = {}

employee.id = "12345",
employee.name = "Raj",
employee.age = 27

// console.log(employee);
// console.log(Object.keys(employee));
// console.log(Object.values(employee));
// console.log(Object.entries(employee));
// console.log(employee.hasOwnProperty('id'));

const managers = {
    email: "hello@.com",
    fullname: {
        usersfullname: {
            firstname: "Shain",
            lastname: "Roy"
        }
    }
}

// console.log(managers.fullname.usersfullname.lastname);

const car = {
    brand: "TATA",
    model: "Thar"
}

const flower2 = {
    name: "Tulip",
    color: "Pink"
}

const hii = {a: "1", b: "3"}

// const things = {car, flower2}
// const things = Object.assign({}, car, flower2, hii)
const things = {...car, ...flower2, ...hii} 
// console.log(things);

// object destructuring

const food = {
    foodname: "Matar Paneer",
    price: "180",
    mainIngredient: "Paneer"
}

const {mainIngredient: ingredient} = food
// console.log(mainIngredient);
console.log(ingredient);
