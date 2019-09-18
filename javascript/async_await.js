/* console.log("First");

setTimeout(() => {
    console.log("Second");
}, 3000);


console.log("Third");
 */

const fs=require('fs');

fs.readFile('../docs.txt',(err,data)=>{
    if (err) {
       throw  err;
    }
    console.log(data.toString());
    
})



