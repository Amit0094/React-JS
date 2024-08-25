import {createContext , useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo msg',
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id , todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

// when you use useContext then it is compulsory to pass a context inside them ...

export const TodoProvider = TodoContext.Provider