import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-44 bg-slate-800 px-20'>
            <div className=' flex items-center md:gap-48 gap-36'>
                <div className='text-white'>
                    <h1
                        className='text-3xl italic text-orange-700'
                    >Portfolio</h1>
                </div>
                <div className='pt-10'>
                    <ul className=' text-white flex flex-col gap-1  border-l border-gray-400 pl-4'>
                        <li className='font-medium text-base hover:text-orange-700 cursor-pointer'>
                            Github
                        </li>
                        <li className='font-medium text-base hover:text-orange-700 cursor-pointer'>Linkden</li>
                        <li className='font-medium text-base hover:text-orange-700 cursor-pointer'>Twitter</li>
                    </ul>
                </div>
            </div>

            <div className='text-gray-400'>
                <h3 className='text-base font-medium'>@All Right reserved | 2024</h3>
            </div>
        </div>
    )
}

export default Footer