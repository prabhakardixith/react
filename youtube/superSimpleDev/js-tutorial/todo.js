var todos =[];

const addTodo=()=>{
    let inputValue = document.getElementById('inputBox')
    let values = inputValue.value;
    todos.push(values);

    render(todos);
};

const render =(tods)=>{
    let child = document.getElementById('todoBox');
    todos.forEach(e => {
        let element = document.createElement('div');
        element.innerText = e;
        child.appendChild(element)
    });
   
}
