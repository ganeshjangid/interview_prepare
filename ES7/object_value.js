const cars={BMW:3,TOYOTA:5,TESLA:10};
console.log(cars);

//ES2015

const keys=Object.keys(cars);
console.log(keys);

const fd_val=Object.keys(cars).map(keys=>cars[keys]);
console.log(fd_val);


const vals=Object.values(cars);
console.log(vals); 


for (let [k,v] of Object.entries(cars)) {
    console.log(`key : ${k} , values: ${v}`);
    
    
}