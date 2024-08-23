// Define a variable to store the tasks
let todos = [];

// Function to add a new todo task
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const task = todoInput.value.trim();

    if (task !== '') {
        todos.push(task);
        displayTodos();
        todoInput.value = '';
    }
}

// Function to display todos in the UI
function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.addEventListener('click', () => {
            deleteTodo(index);
        });
        todoList.appendChild(li);
    });
}

// Function to delete a todo task
function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

// Initial display of todos
displayTodos();
