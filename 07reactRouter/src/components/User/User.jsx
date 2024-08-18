import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams()
  return (
    <div className='text-center bg-gray-600 text-3xl text-white p-4'>User: {userid}</div>
  )
}

export default User


// functionality always come from function *****Not important it's just a thought....
// do not take serious..