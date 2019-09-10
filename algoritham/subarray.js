let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const sumArray=(array)=>{
    //return array;
    let totalSum={};/* 
    array.forEach(element => {
        //console.log(element);
    });     */


    let max=Math.max(...array);
    //console.log(max);

    let removeLastEle=array.pop();
    console.log(removeLastEle);

    console.log(array);
    

    let removeFirstEle = array.shift();
    console.log(removeFirstEle);

    console.log(array);

};


const getTotalCount=(array)=>{
    let count=0;

    for (let i = 0; i < array.length; i++) {
        count += array[i];
    }    
    return count;

};

console.log(getTotalCount(array));


//sumArray(array);

