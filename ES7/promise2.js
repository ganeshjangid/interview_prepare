app.post('/charge',(req,res)=>{

    const customer=req.body;

    chargeCustomer(customer)
    .then((res)=>{
        //success
        return addtodb(res);
    })
    .then(res=>{
        // send to email
        return SendEmail(res);
    })
    .then((result) => {
      res.send(result);  
    })
    .catch(err=> console.log(err));

});