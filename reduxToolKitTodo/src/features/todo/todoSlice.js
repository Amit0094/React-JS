import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 1, text: 'Hello World', starred: false, isEditAble: false }],
    // auth: [{ userLoggedIn: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // create new todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                starred: false,
                isEditAble: false,
            }
            state.todos.push(todo)
            // The new todo is added to the todos array in the state.

            // The Redux store updates its state, and any components that depend on the todos state will re-render to reflect the changes.
        },
        removeTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (!todo.starred) {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            } else {
                alert('Starred todo cannot be deleted ...')
            }
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
        },
        editHandler: (state, action) => {
            const todo = state.todos.find((todo)=> todo.id === action.payload.id)
            todo.isEditAble = action.payload.status
        },
        toggleStar: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.starred = !todo.starred
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo, editHandler, toggleStar } = todoSlice.actions

export default todoSlice.reducer