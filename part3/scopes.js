let a = 200

if (true){
    let a = 30;
    const b = 299
    // console.log(`value of a in the local scope is: ${a}`);
    
}

// console.log(`value of a in the global scope is: ${a}`);



function one(){
    const name = "Ujala"

    function two(){
        const address = "Motihari"
        console.log(name);    
    }
    // console.log(address);
    two()
}
one()



if (true) {
    const username = "Shalu"
    if(username == "Shalu"){
        const website = " Google"
        console.log(username + website);  
    }
    // console.log(website);   
}
// console.log(username);



//------------------INTERESTING--------------------

console.log(addone(5))
function addone(num) {                   // function  //only declaration
    return num + 1
}



//hoisting------------

const addTwo = function(num){           // can say function expression  //declared by holding in the variable
    return num + 2
}
console.log(addTwo(7));

