export function renderTodos(todos) {
    const todoList =document.querySelector("todo-list");
    const taskCount = document.querySelector("#task-count");

    todoList.innerHTML ="";

    todos.forEach(todo => {
        const li =document.createElement("span");
        span.text.Content =todo.text;

        if(todo.completed) {
            span.classList.add("completed");
        
    }

    const completedButton = document.createElement("button");

    completedButton.textContent = todo.completed
    ? "undo"
    :"completed"

    completeButton.dataset.action ="toggle";
    completeButton.dataset.id =todo.id;

    const deletButton =document.createElement("button");

    deleteButton.textContent ="Delete";
    deleteButton.dataset.action ="delete";
    deleteButton.dataset.id =todo.id;

    li.append(span, completeButton, deleteButton);

    todoList.appendChild(li);

});

taskCount.textContent = 'Total tasks: ${todos.length}';
}

export function showError(message) {

    const formError = document.querySelector("#form-error");

    formError.textContent = message

}