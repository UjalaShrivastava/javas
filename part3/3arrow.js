const user = {
    username: "Roy",
    id: 101,

    welcomeMessage: function(){
        console.log(`${this.username}, wecome to website`);        // this refers current context
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"                                                // context changed here
// user.welcomeMessage()

// console.log(this);



// (this) keyword cannot be used within the function is can be used in the object

const arrFunctn = () => {
    let name = "Olivia"
    console.log(this);
    
}
arrFunctn()



// const sum = (a, b) => {
//     return a + b                       // we use "return" keyword in explicit return function
// }


//---------implicit return--------------

// const sum = (a, b) => a + b             // we don't write "return" keyword in implicit return function

const sum = (a, b) => (a + b)              // we can also use parentheses in implicit function
console.log(sum(4,9));
