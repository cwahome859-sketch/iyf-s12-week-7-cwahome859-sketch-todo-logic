import  {loadTodos} from "./storage.js";

let todos = loadTodos();

export function getTodos(){
    return todos;
}

export function setTodos(newTodos) {
    todos = newTodos;
}
