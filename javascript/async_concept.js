const processImage = (image) => {
    /**
     * doing some operations on image
     **/
    console.log('Image processed');
};

const networkRequest = (url) => {
    /**
     * requesting network resource
     **/
    //return url;
    console.log(url);
    
};


const greeting = () => {
    console.log('Hello World');
};

/* processImage('logo.jpg');
networkRequest('www.somerandomurl.com');
greeting();
 */


 const networkRequestAsyn = () => {
     setTimeout(() => {
         console.log('Async Code');
     }, 2000);
 };

/* console.log('Hello World');
networkRequestAsyn();
console.log('The End');


(()=>{
    console.log("EIFI");
})();
 */


console.log('Script start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

new Promise((resolve,reject)=>{
    return resolve("Promise resolved");
})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});


console.log('Script End');

