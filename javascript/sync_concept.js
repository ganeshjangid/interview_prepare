const second=()=>{
    console.log("Second process");
};

const first=()=>{
    console.log("Fist half");
    second();
    console.log("First last");

    
};

first();