// if----------------

// if (condition){}  ---(condition should be true to run the code)

// const a = 10;
// if (a === 10){
//     console.log("Yes it is");
// }
// console.log("hello...done");


// if-else---------------

// const b = 600;
// if (b === 400){
//     console.log("Yes it is");
// }else{
//     console.log("No it's false");
// }


// shorthand notation for conditional------------

const c = 100;
// if (c>70) console.log("yes");   // implicit scope


// nesting conditional-----------------------

// const amount = 1500;
// if (amount < 500){
//     console.log("less than");
// }else if (amount < 800){
//     console.log("It is less");
// }else if(amount < 1200){
//     console.log("It is also");
// }else {
//     console.log("it is equal to 1500");
// }


const userLoggedIn = true;
const debitCard = true;
const graduate = true;
const userLoggedInFromEmail = false;
const userLoggedInFromGoogle = true;

if (userLoggedIn && debitCard && graduate){                    // for an && operator all the condition should be true
    // console.log("Allowed to purchase the course");
}


if (userLoggedInFromEmail || userLoggedInFromGoogle){         // for the || operator atleast one condition should be true
    // console.log("Allowed");   
}


if (userLoggedIn && graduate && debitCard && userLoggedInFromEmail || userLoggedInFromGoogle){
    // console.log("Allowed");
}
