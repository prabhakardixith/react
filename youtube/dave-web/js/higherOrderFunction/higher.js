 import posts from "./posts.js";

//higher order functions

//forEach
 posts.forEach((json) =>{

    // console.log(`userId : ${json.id} userTitle : ${json.title}`);

 });

 //filter

 const filtered =  posts.filter(json =>{
   return json.id === 1;
 })

 filtered.forEach(e=>{
    // console.log(e);
 })

 //map

const mapped = posts.map(e=>{
    return e.id * 10;
})

mapped.forEach(e=>{
    // console.log(e.id);
})

//reduce

const reduced = mapped.reduce((sum,post)=>{
    return sum+post;
})

console.log(reduced);
