const numbers = [3, 4, 10, 20];

numbers.forEach(ele => console.log(ele * 2));

//const result=numbers.map(ele=> ele*2);

const result=numbers.map((ele)=>{
    //return ele*2;
    return ele >10;
});

console.log(result);


/* Filter */

/* 
It is like map but it is return true value array
*/
const filterTest=numbers.filter(ele=>{
    return ele >10;
    //return ele*2;
});


console.log(filterTest);
