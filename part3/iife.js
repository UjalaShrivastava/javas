// Immediately Invoked Function Expression (IIFE)
// the function which executed immediately is called iife

(function start(){                 // named iife
    console.log(`connected`);
    
})();                           



( (name) => {                        // unnamed iife
    console.log(`CONNECTED into ${name}`);
    
})('John');