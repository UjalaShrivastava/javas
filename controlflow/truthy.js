const userName = "hello@gmail.com";

if (userName){
    console.log("got the credentials");  
}else {
    console.log("no valid credentials found");
}


// truthy values-----------------

// "0", 'false', " ", [], {}, function(){}


// falsy values-------------------

// false, 0, -0, BigInt On, "", null, undefined, NaN



// nullish coalescing operator (??): null undefined

let val1 = 5 ?? 8
console.log(`value of val1 is ${val1}`);



//ternary operator--------------
// condition ? true : false

const candyPrice = 80
candyPrice <= 60 ? console.log("less than 60") : console.log("more than 60");


