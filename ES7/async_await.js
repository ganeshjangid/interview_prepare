async function getAmount2(userId){

    let user=await getUser(userId);

    let amount=await getBankBalance(user);

    console.log(amount);

}


getAmount2('1');

getAmount2('2');


function getUser(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ganesh');
        }, 5000);
    });
}


function getBankBalance(user){

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            if (user === "ganesh") {
                resolve("10000");
            }else{
                reject('Unknown User');
            }
        }, 2000);

    });
}