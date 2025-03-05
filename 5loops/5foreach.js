const sports = ["Cricket", "Football", "Badminton", "Volleyball", "Baseball"]

// sports.forEach( function (item) {
//     console.log(item); 
// } )


// sports.forEach( (val) => {
//     console.log(val);  
// })


// function printThis(item){
//     console.log(item);
// }
// sports.forEach(printThis)


sports.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "JavaSript",
        fileName: "JS"
    },
    {
        languageName: "Python",
        fileName: "Py"
    },
    {
        languageName: "JAVA",
        fileName: "Java"
    }
]

myCoding.forEach( (items) => {
    console.log(items.languageName);
    
})