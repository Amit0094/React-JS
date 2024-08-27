import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editHandler, toggleStar } from '../features/todo/todoSlice'
import '../css/Todo.css'

const Todos = () => {


    const todos = useSelector((state) => {
        // console.log(state)
        return state.todos
    })
    const dispatch = useDispatch()


    const handleStarToggle = (id)=>{
        dispatch(toggleStar(id))
    }

   
    return (
        <>
            <div className='text-2xl mt-5 font-semibold italic text-gray-300'>Todos :</div>
            <ul className='list-none'>
                {todos.map((todo) => (
                    <li
                        className='mt-3 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
                        key={todo.id}
                        
                    >
                        <div className='flex gap-3 items-center'>

                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={todo.starred}
                                    onChange={()=>handleStarToggle(todo.id)}
                                />
                                <div className="w-2 h-2 flex items-center justify-center text-gray-500 peer-checked:text-yellow-500 
                                text-2xl">
                                    <div className="star absolute"></div>
                                </div>
                            </label>

                            <div className='text-white'>{todo.text}</div>
                        </div>
                        <div className='flex gap-3'>
                            <button
                                className='bg-gray-500 px-3 py-1 rounded text-lg hover:bg-gray-600'
                                onClick={() => dispatch(editHandler({status: true, id: todo.id}))}
                            >
                                ✏️
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className='text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-lg'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos;

// When you call dispatch(removeTodo(todo.id)), you're dispatching the action object created by removeTodo(todo.id) to the Redux store. The action is sent to the store’s reducer, which handles the action and updates the state accordingly.

// dispatch: This sends the created action object to the Redux store, triggering the reducer to handle the action and update the state (e.g., removing the todo item from the state).

// dispatch(removeTodo(todo.id)

//  this line of code handles the complete flow of removing a todo from the state, from creating the action to dispatching it to the store.