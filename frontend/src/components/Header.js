import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

function Header() {
    const [state, setState] = useState(true)
    return (
        <header className="w-full shadow-lg bg-white dark:bg-gray-900 items-center h-16 rounded-2xl z-40 fixed">
            <div className="relative z-20  flex-col justify-center h-full px-3 mx-auto flex-center hidden md:flex">
                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div className="container relative left-0 z-50 flex w-3/4 h-full">
                        <div className="relative p-1 flex items-center justify-start w-1/2 ml-5 mr-4 sm:mr-0 sm:right-auto">
                            <Link to="/" className="block relative text-lg font-semibold text-slate-600 dark:text-white">
                                GadgetsVio &nbsp;&nbsp;
                            </Link>
                        </div>
                        <div className="relative p-1 flex items-center justify-start w-1/2 ml-5 mr-4 sm:mr-0 sm:right-auto">
                            <div className="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                <svg fill="none" className="relative w-5 h-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                    </path>
                                </svg>
                            </div>
                            <svg className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                </path>
                            </svg>
                            <input type="text" className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-slate-800 text-gray-400 aa-input" placeholder="Search" />
                            <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 dark:border-gray-600 rounded-2xl md:block">
                                +
                            </div>
                        </div>
                    </div>
                    <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                        <div className="block relative dark:text-white px-4 ">
                            <DarkModeToggle text={true} />
                        </div>
                        <Link to="/" className="block relative dark:text-white">
                            Login &nbsp;&nbsp;<i className="fa-solid fa-user dark:text-white"></i>&nbsp;&nbsp;
                        </Link>
                        <Link to="/cart/" className="block relative dark:text-white">
                            Cart &nbsp;&nbsp;<i className="fa-solid fa-shopping-cart dark:text-white"></i>&nbsp;&nbsp;
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center  md:hidden">
                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div className="container relative left-0 z-50 flex w-1/2 h-full">
                        <div className="relative mt-7 flex items-center justify-start w-1/4  mr-5 sm:mr-0 sm:right-auto">
                            <Link to="/" className="block relative text-lg font-semibold text-slate-600 dark:text-white">
                                GadgetsVio &nbsp;&nbsp;
                            </Link>
                        </div>
                    </div>
                    <div className="relative p-1 flex items-center justify-end w-1/2 ml-5 mr-4 sm:mr-0 sm:right-auto">
                        <div className="block relative dark:text-white  mr-7">
                            <DarkModeToggle />
                        </div>
                        <Link to="/" className="block relative">
                            <i className="fa-solid fa-user dark:text-white"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        </Link>
                        <Link to="/cart/" className="block relative">
                            &nbsp;&nbsp;<i className="fa-solid fa-shopping-cart dark:text-white"></i>
                        </Link>
                    </div>
                </div>
            </div>
            {
                state &&
                <div className="relative bg-indigo-600 px-4 py-3 pr-14 text-white ">
                    <p className="text-left text-sm font-medium sm:text-center">
                        This site is still in development. This is a preview version.
                        <a className="underline" href="/cart"> Learn More &rarr; </a>
                    </p>
                    <button
                        aria-label=""
                        onClick={() => setState(false)}
                        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            }
        </header>
    )
}

export default Header