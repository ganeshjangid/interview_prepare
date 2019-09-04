const config={
    production:{
        mongo:{
            billing:''
        }
    },

    default:{
        mongo:{
            billing:""
        }
    }
};

exports.get=function(env){

    return config[env] || config.default;
 }