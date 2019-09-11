let a = [2, 1, 3, 5, 3, 2];

console.log(firstDuplicate(a));


function firstDuplicate(arr){

    const obj={};
    const array=[];
    
    arr.forEach((element) => {
       //console.log(element);
       
       if (!obj[element]) {
           obj[element]=0;

           obj[element] += 1;
       }
       
    });




    for (const pop in obj) {
        console.log(obj[pop]);
        //array.push(pop);
        if (obj[pop] >= 2) {
            array.push(pop);
        }
    }



    //return obj;
    return array;
};




//OUTPUT -->[2,3]=>3=>hightest value dublicate