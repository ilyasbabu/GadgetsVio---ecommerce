import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

function Header() {
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 768;
    const [fade, setFade] = useState(false);
    const [searchShow, setSearchShow] = useState(false);
    const fadeOut = () => {
        setFade(false)
        setTimeout(() => {
            setSearchShow(false)
        }, 600)
    }
    const fadeIn = () => {
        setSearchShow(true)
        setTimeout(() => {
            setFade(true)
        }, 100)
    }
    return (
        <header className='min-w-screen fixed w-full h-16 shadow-lg z-20 bg-white dark:bg-black dark:bg-opacity-80 bg-opacity-90'>
            <div className='flex justify-between items-center h-full px-5'>
                <Link to="/">
                    <h1 className='text-lg font-mono font-semibold text-zinc-600 dark:text-zinc-200'>Gadgetsvio</h1>
                </Link>
                <div>
                    <div className="relative hidden md:block">
                        <svg className="w-6 h-6 z-20 text-gray-700 absolute top-3 left-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input type="search" placeholder="Search"
                            className="z-30 transition-all duration-300 md:w-96 md:focus:w-96 w-16 focus:w-screen focus:outline-none text-zinc-700 dark:text-zinc-400 dark:placeholder-gray-500 border-b-2  border-gray-200 dark:border-zinc-700 bg-white dark:bg-black py-3 px-7 dark:bg-opacity-0 bg-opacity-0" />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex md:hidden px-2 md:px-1 lg:px-3'>
                        <div className='h-7 w-7 cursor-pointer' onClick={fadeIn}>
                            <svg className='fill-current text-zinc-600 dark:text-zinc-300' viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5C12.082 19.5 14.0076 18.8302 15.5731 17.6944L20.2929 22.4142C20.6834 22.8047 21.3166 22.8047 21.7071 22.4142L22.4142 21.7071C22.8047 21.3166 22.8047 20.6834 22.4142 20.2929L17.6944 15.5731C18.8302 14.0076 19.5 12.082 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10Z"></path> </g></svg>
                        </div>
                    </div>
                    <div className='flex px-2 md:px-1 lg:px-3'>
                        <DarkModeToggle />
                        <div className='p-1 hidden md:block font-mono text-zinc-600 dark:text-zinc-400'>Theme</div>
                    </div>
                    <Link to="/cart" className='flex px-2 md:px-1 lg:px-3'>
                        <div className='h-7 w-7'>
                            <svg className='fill-current text-zinc-600 dark:text-zinc-300' viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.46785 10.2658C4.47574 10.3372 4.48376 10.4094 4.49187 10.4823L4.61751 11.6131C4.7057 12.4072 4.78218 13.0959 4.91562 13.6455C5.05917 14.2367 5.29582 14.7937 5.78931 15.2354C6.28281 15.6771 6.86251 15.8508 7.46598 15.9281C8.02694 16.0001 8.71985 16 9.51887 16H14.8723C15.4201 16 15.9036 16 16.3073 15.959C16.7448 15.9146 17.1698 15.8162 17.5785 15.5701C17.9872 15.324 18.2731 14.9944 18.5171 14.6286C18.7422 14.291 18.9684 13.8637 19.2246 13.3797L21.7141 8.67734C22.5974 7.00887 21.3879 4.99998 19.5 4.99998L9.39884 4.99998C8.41604 4.99993 7.57525 4.99988 6.90973 5.09287C6.5729 5.13994 6.24284 5.21529 5.93326 5.34375L5.78941 4.04912C5.65979 2.88255 4.67375 2 3.5 2H3C2.44772 2 2 2.44771 2 3C2 3.55228 2.44772 4 3 4H3.5C3.65465 4 3.78456 4.11628 3.80164 4.26998L4.46785 10.2658Z" ></path> <path fillRule="evenodd" clipRule="evenodd" d="M14 19.5C14 18.1193 15.1193 17 16.5 17C17.8807 17 19 18.1193 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5Z" ></path> <path fillRule="evenodd" clipRule="evenodd" d="M5 19.5C5 18.1193 6.11929 17 7.5 17C8.88071 17 10 18.1193 10 19.5C10 20.8807 8.88071 22 7.5 22C6.11929 22 5 20.8807 5 19.5Z" ></path> </g></svg>
                        </div>
                        <div className='p-1 hidden md:block font-mono text-zinc-600 dark:text-zinc-400'>Cart</div>
                    </Link>
                    <Link to={'/login'} className='flex px-2 md:px-1 lg:px-3'>
                        <div className='h-7 w-7'>
                            <svg className='fill-current text-zinc-600 dark:text-zinc-300' viewBox="0 0 16 16"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"></path> </g></svg>
                        </div>
                        <div className='p-1 hidden md:block font-mono text-zinc-600 dark:text-zinc-400'>Login</div>
                    </Link>
                </div>
            </div>
            {
                searchShow && isMobile &&
                <div className={`absolute top-0 bg-white dark:bg-black w-screen h-16 flex justify-center items-center space-x-4 transition-all duration-500 ${fade ? "opacity-95" : "opacity-0"} `}>
                    <div className='h-7 w-7'>
                        <svg className='fill-current text-zinc-600 dark:text-zinc-300' viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5C12.082 19.5 14.0076 18.8302 15.5731 17.6944L20.2929 22.4142C20.6834 22.8047 21.3166 22.8047 21.7071 22.4142L22.4142 21.7071C22.8047 21.3166 22.8047 20.6834 22.4142 20.2929L17.6944 15.5731C18.8302 14.0076 19.5 12.082 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10Z"></path> </g></svg>
                    </div>
                    <div>
                        <form action="/search" className=''>
                            <input type="text" name="query" placeholder='Search' id=""
                            className="z-30 transition-all duration-300 w-[70vw] focus:w-screen focus:outline-none text-zinc-700 dark:text-zinc-400 dark:placeholder-gray-500 border-b-2  border-gray-200 dark:border-zinc-700 dark:bg-black py-3 px-7" />
                        </form>
                    </div>
                    <div className='h-7 w-7' onClick={fadeOut}>
                        <svg className='fill-current text-zinc-500' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel2</title> <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g></svg>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header