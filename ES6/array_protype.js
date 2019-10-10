const arr=[1,2,3,4,NaN];

console.log(arr);

if (arr.indexOf(3) >0) {
    console.log(true);
}


//use

if (arr.includes(3)) {
    console.log(true);
}


console.log(arr.indexOf(NaN));

console.log(arr.indexOf(3));
console.log(arr.indexOf(2));


console.log(arr.includes(4));
console.log(arr.includes(NaN));


