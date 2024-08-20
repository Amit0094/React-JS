import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div
    className='bg-slate-950 w-full h-80 text-gray-200 flex justify-center'
    >
        <h1
        className='text-5xl p-10 font-medium'
        >User : {id}</h1>
    </div>
  )
}

export default User