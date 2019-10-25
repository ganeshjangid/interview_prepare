const callbackAcceptingFunction=(fn)=>{
    return fn(1,2,3);
}

const callback=(arg1,arg2,arg3)=>{
    return arg1+arg2+arg3;
};

const result = callbackAcceptingFunction(callback);

console.log(result);



/* Another Example */


const orderPizza=flavour=>{
    
};