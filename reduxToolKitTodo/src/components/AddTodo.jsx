import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo, editHandler } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')

    const todos = useSelector((state) => state.todos)

    const todo = todos.find((todo) => todo.isEditAble === true) || {}


    const dispatch = useDispatch()
    // dispatch change the values into store using reducers...

    const addTodoHandler = (e) => {
        e.preventDefault()
        todo.isEditAble ? dispatch(updateTodo({ id: todo.id, text: input })) : dispatch(addTodo(input))
        // Action dispatch -> this trigger the addTodo
        // Now , Reducer Processes the Action look in file todoSlice.js
        setInput('')
        dispatch(editHandler({ status: false , id: todo.id }))
    }



    useEffect(() => {
        if (todo.isEditAble) {
            setInput(todo.text);
        }
    }, [todo]);


    return (
        <form onSubmit={addTodoHandler} className='space-x-3'>
            <input
                type="text"
                className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                placeholder='Enter a Todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type='submit'
                className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
                {todo.isEditAble ? 'Update Todo' : 'Add Todo'}
            </button>
        </form>
    )
}

export default AddTodo