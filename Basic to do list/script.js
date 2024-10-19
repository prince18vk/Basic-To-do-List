document.addEventListener('DOMContentLoaded', () => {
    const input=document.getElementById('todo-input');
    const addButton=document.getElementById('add-button');
    const todoList=document.getElementById('todo-list');

    addButton.addEventListener('click',()=> {
        const todoText=input.value.trim();
        if (todoText){
            addTodoItem(todoText);
            input.value='';
        }
    
    });

    function addTodoItem(text){
        const li=document.createElement('li');
        li.textContent=text;
    
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.addEventListener('click',()=> {
            li.remove();
        });


    li.addEventListener('click',()=>{
        li.classList.toggle('completed');
    });
    
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

});