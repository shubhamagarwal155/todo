import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos :[]
}

export const todoAppSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action) =>{
            let todo = {
                id : nanoid(),
                text : action.payload,
                isCompleted : false
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo : (state,action) =>{
            state.todos = state.todos.map((todo) => todo.id == action.payload.id ? {...todo,text : action.payload.text} : todo)
        },
        toggleTodoComplete : (state,action) => {
            state.todos = state.todos.map((todo) => todo.id == action.payload ? {
                ...todo,
                isCompleted : !todo.isCompleted
            } : todo)
        }
    }
})


export const {addTodo,removeTodo,updateTodo,toggleTodoComplete} = todoAppSlice.actions;