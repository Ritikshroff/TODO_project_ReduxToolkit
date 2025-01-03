
// step-3
import { createSlice, nanoid } from "@reduxjs/toolkit";

// step-4
const initialState = {
    todos: [{id: 1, text: "This is Your Todo List Element 1"}]
}

// step-6
function sayHello(state, action){     // in parameter we will always get two things;
    const todos = {
        id: nanoid(),
        text: action.payload,
    }
    state.todos.push(todos)
}


function removeTodoElemrnt(state, action) {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
}

function updateTodoElement(state,action){
    const {id , text} = action.payload;
    const todos = state.todos.find((todo) => todo.id === id);
    if (todos) {
        todos.text = text;
    } 
}

// step-5
export const todoSlice = createSlice({
    name: 'todo',
    initialState,   // step-4 used
    reducers: {     // reducer
        addTodo : sayHello,   // step-6 used
        removeTodo: removeTodoElemrnt,
        updateTodo: updateTodoElement
    }
})

// step-8
export const {addTodo , removeTodo , updateTodo} = todoSlice.actions   // export functionality
export default todoSlice.reducer  