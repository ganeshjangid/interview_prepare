/* console.log("Promise in javascript ");
console.log("A promise is an object that will return a value in future");


const promise=new Promise((resolve,reject)=>{

    return resolve("Resolve");
    //return reject("Reject");
});


promise.then(res=> console.log(`This is resolve ${res}`)).catch(err=>console.log(`This is Reject issue ${err}`));

 */
/* Resolve and Reject  */

const jeffBuysCake = cakeType => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
         if (cakeType ===
             'black forest') {
             resolve('black forest cake!')
         } else {
             reject('No cake 😢')
         }
        }, 5000);
    });
};

const promise1 = jeffBuysCake('black forest')

promise1
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});