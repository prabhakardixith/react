//fetch

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// //pending
// console.log(users);

var users =  fetch("https://jsonplaceholder.typicode.com/users")
   .then(response =>{
    return response.json();
   })
   .then(data =>{
    data.forEach(e=>{
        console.log(e);
    });

   });

console.log(users)


