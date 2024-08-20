import React from 'react'

const About = () => {
  return (
    <div className='bg-slate-950 text-white'>
        <div className='md:w-1/2 w-2/3 m-auto'>
        <svg className='w-64' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(23,119,205,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM16.4645 15.5355L20 12L16.4645 8.46447L15.0503 9.87868L17.1716 12L15.0503 14.1213L16.4645 15.5355ZM6.82843 12L8.94975 9.87868L7.53553 8.46447L4 12L7.53553 15.5355L8.94975 14.1213L6.82843 12ZM11.2443 17L14.884 7H12.7557L9.11597 17H11.2443Z"></path></svg>
        </div>
        <div className=' pt-5 m-auto w-2/3 md:w-1/2 pb-5'>
            <h2 className='font-semibold text-lg'>
            Software Development is defined as the process of designing, creating, testing, and maintaining computer programs and applications. Software development plays an important role in our daily lives. It empowers smartphone apps and supports businesses worldwide.
            </h2>
            <h2 className='mt-5 text-gray-400 text-base font-normal'>
            The demand for application deve­lopers is expected to grow by an impressive 26%, surpassing the me­re 5% average change­ in overall employment. This significant growth can be related to the rapid technological advances experienced over the last two decades.
            </h2>
        </div>
    </div>
  )
}

export default About