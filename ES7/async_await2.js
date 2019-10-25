/* const getOne=async ()=> 1;

console.log(getOne());

getOne().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


const test=async _=>{

    try {
    const one = await getOne();
    console.log(one);
    } catch (error) {
        console.log(error)
    }
    
    
    
}

test();

 */

const sleep=ms=>{
    return new Promise(resolve =>setTimeout(resolve,ms));
}

console.log("now");
sleep(1000)
.then((result) => {
    console.log("one test")
}).catch((err) => {
    console.log(err);
});


const getOne1 = _ => {
    return sleep(1000).then(v =>`this is test 1`)
}

const test1=async _=>{
    console.log("Async await now");
    const getone1 = await getOne1();

    console.log(getone1);
    
};


test1();



const getOne2 = _ => {
    return sleep(1000).then(v => 1)
}
const getTwo = _ => {
    return sleep(1000).then(v => 2)
}
const getThree = _ => {
    return sleep(1000).then(v => 3)
}



const Test12=async _=>{

    const one = await getOne2();
    console.log(one);

    const two = await getTwo()
    console.log(two);

    const three = await getThree()
    console.log(three);

    console.log('Done');
    
}


//Test12();


const Test123 = async _ => {

    const promises = [getOne2(), getTwo(), getThree()];
    console.log("now");

    const [one, two, three] = await Promise.all(promises);

     console.log(one)
     console.log(two)
     console.log(three)
     console.log('Done');
    

}


Test123();
