export function addTodo(todos, text, id) {
    const trimmedText =text.trim();

    if (!trimmedText) {
        return todos;
    }

    const newTodo = {
        id,
        text:trimmedText,
        completed: false
    };

    return [...todos, newTodo];    
}

export function deletTodo(todos,id) {
    return todos.filter(todo =>todo.id !==id);
    
}

export function toggleTodo(todos, id) {
    return todos.map(todo =>
        todo.id === id
        ? {
            ...todo,
            completed: !todo.completed
        }
        :todo
    );
}

export function countCompleted(todos) {
    return todos.filter(todo => todo.complete).length;
}