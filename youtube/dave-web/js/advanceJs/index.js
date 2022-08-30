//callback , promises , asynch/await , fetch

//callbacks
function first(a,callbacks)
{
    var val = a*10;
    callbacks(val);
}

function callback(val)
{
    console.log(`value is : ${val}`)
}

// first(10,callback);

//promises states : pending, fulfilled , rejected
function err(message){

     const messages =message;
    return `${messages}`;
}
const myPromise  = new Promise((resolve,reject)=>{
    const error = true;
    if(error)
    {
        resolve("yes! resolved the promise ");
    }
    else{
       
        throw new Error(err("keho rejected"));
        // reject("no! rejected the promise ");
    }
});

myPromise.then(v=>{ return v+1;}).then(v1=>{console.log(v1);})
.catch(e=>{
    console.log(e.message);
});

function err(message){

    const messages =message;
   return `${messages}`;
}
const myNextPromise  = new Promise((resolve,reject)=>{
  setTimeout(function(){
    resolve("myNextPromise! resolved");
  },3000);
});

myNextPromise.then(v=>{
    console.log(v);
});