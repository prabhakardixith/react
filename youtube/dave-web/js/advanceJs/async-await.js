

//workflow function

const getAllUserEmails = async ()=>{
    const response = await fetch("http://localhost:8080/users");

    const jsonUserData = await response.json();
    
    const userEmailArray = jsonUserData.map(user =>{
        return user.email;
    });

   jsonUserData.map(m=>console.log(m));
   postToWebPage(userEmailArray);
}


const postToWebPage = (data)=>{
    // console.log(data);
}

getAllUserEmails();

//second parameter of fetch (get)

const getDadJoke = async ()=>{
    const response = await fetch("https://icanhazdadjoke.com/",{
        method:"GET",
        headers:{
            accept:"application/json"
        }
    });

    const jsonJokeData = await response.json();

    // console.log(jsonJokeData);
}

getDadJoke();


//post
const jokeObject = {id: 'xscaxH6M7h', joke: 'Two guys walked into a bar, the third one ducked.', status: 200}

const postDadJoke = async (jokeObject )=>{
    const response = await fetch("https://httpbin.org/post",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(jokeObject)
    });

    const jsonResponse = await response.json();

    console.log(jsonResponse.headers);
}

postDadJoke();



