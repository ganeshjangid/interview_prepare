const cb=()=>{
    
    setTimeout(() => {
    console.log("This is call back");
    }, 0);
};

const callIt=(cb)=>{
    console.log("ganesh");    
    cb();
    console.log("Ganesh1");
        
    
};


callIt(cb);



/* Another Example of Callback */

const numbers = [3, 4, 10, 20];

const filterTest=numbers.filter(num => num >5);
console.log(filterTest);


/* Function callback */

const funCallback=num=> num>5;

const cbFilter = numbers.filter(funCallback);

console.log(cbFilter);
