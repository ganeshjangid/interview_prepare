/* function firstDuplicate(arr) {

    const newArray=[];
    const newObj={};

    arr.forEach(ele => {
        //console.log(ele);
        console.log(newObj[ele]);
        
        if (!newObj[ele]) {
            newObj[ele]=0;

            newObj[ele] +=  1;
        }

    });

    //2, 1, 3, 5, 3, 2
    console.log(newObj);
    
    for (const pop in newObj) {
        
        //console.log(newObj[pop]);
        
        if (newObj[pop] > 2) {
            newArray.push(pop);
        }
    }

    console.log(newArray);
    
}   




let a=[2, 1, 3, 5, 3, 2];


console.log(firstDuplicate(a));
 */


 function find_duplicate_in_array(arra1) {
     var object = {};
     var result = [];

     arra1.forEach(function (item) {
         if (!object[item])
             object[item] = 0;
         object[item] += 1;
     })

     for (var prop in object) {
         if (object[prop] >= 2) {
             result.push(prop);
         }
     }

     return result;

 }

 console.log(find_duplicate_in_array([2, 1, 3, 5, 3, 2]));