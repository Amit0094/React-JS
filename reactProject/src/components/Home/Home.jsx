import React from 'react'
import logo from '../../assets/frontend.png'
import coverImage from '../../assets/bg.png'

const Home = () => {
    return (
        <div className='bg-slate-950'>
            <div className=' text-white py-10 px-14 flex flex-col md:flex-row items-start md:gap-20'>
                <div className='md:w-1/3 ml-0 md:ml-24 md:mt-10 mt-0'>
                    <h2
                        className=' text-4xl md:text-5xl font-normal  md:font-medium tracking-wide leading-10'
                    >I'm Amit, A Software developer 🧑‍💻 specializing in frontend Engineering <span><img className='w-10' src={logo} alt="" /></span></h2>
                </div>
                <div className='md:ml-56'>
                    <img className=' w-60 md:w-96' src={coverImage} alt="" />
                </div>
            </div>

            <div className='text-white ml-14'>
                <h2 className='text-2xl text-gray-400 font-semibold '>Technologies :</h2>

                <ul className='mt-5 text-gray-200 pr-2 md:w-1/2'>
                    <li className='text-xl font-medium'>
                        HTML : <span className='text-base '>HyperText Markup Language (HTML) is a text-based markup language that defines the structure and meaning of web content. It's the foundation of the web, and most web pages use HTML, along with other technologies, to create a page's appearance, functionality, and behavior: 
                        </span>
                        <span>
                        <svg className='w-32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,85,0,1)"><path d="M12 18.1778L16.6192 16.9222L17.2434 10.1444H9.02648L8.82219 7.88889H17.4477L17.6747 5.67778H6.32535L6.96091 12.3556H14.7806L14.5195 15.2222L12 15.8889L9.48045 15.2222L9.32156 13.3778H7.0517L7.38083 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2Z"></path></svg>
                        </span>
                    </li>
                    <li className='text-xl font-medium mt-5'>
                        CSS : <span className='text-base '>Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes. These classes enable rapid styling without writing custom CSS, promoting consistency and scalability. Tailwind’s approach shifts focus from traditional CSS components to functional classes, empowering developers to efficiently build responsive and visually appealing interfaces with minimal effort. 
                        </span>
                        <span>
                        <svg className='w-32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(9,163,239,1)"><path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path></svg>
                        </span>
                    </li>
                    <li className='text-xl font-medium mt-5'>
                        JavaScript : <span className='text-base '>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes 
                        </span>
                        <span>
                        <svg className='w-32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(252,220,24,1)"><path d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z"></path></svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home