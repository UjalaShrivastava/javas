// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is the selected no.");
    }   
    // console.log(element)
}



for (let i = 0; i <= 10; i++) {
    // console.log(`value of outer loop is: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`value of inner loop is: ${j}`);
        // console.log(i + '*' + j + '=' + i*j);   
    } 
}



let mArr = ["Flowers", "Fruits", "Vegetables", "Beverages", "Staple"]
for (let i = 0; i < mArr.length; i++) {
    const element = mArr[i];
    // console.log(element);
    
}



// break and continue--------------------
for (let i = 1; i <= 20; i++) {
    if (i == 5){
        // console.log(`Detected at ${i}`);
        break
    }
    // console.log(`value of i is: ${i}`);   
}


for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log(`Detected at ${i}`);
        continue
    }
    console.log(`value of i is: ${i}`);
    
    
}