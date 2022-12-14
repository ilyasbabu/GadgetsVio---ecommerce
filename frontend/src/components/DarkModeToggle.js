import React from 'react'
import useDarkTheme from '../hooks/useDarkTheme'

function DarkModeToggle({ text }) {
    const sun = "/images/icons/sun-svgrepo-com.svg"
    const moon = "/images/icons/moon-svgrepo-com.svg"
    const [colorTheme, setTheme] = useDarkTheme();
    const toggleDarkMode = () => {
        setTheme(colorTheme);
    };
    console.log(colorTheme,)
    return (
        // <div className='fixed bottom-20 border-y-2 border-r-2 p-1 w-14 flex justify-end rounded-r-full dark:bg-slate-500 opacity-60'>
        <div>

            <button
                // className='rounded-full p-2 border border-black shadow dark:bg-white bg-slate-800'
                className='flex items-center'
                onClick={toggleDarkMode}>
                { text && <p>Change Theme &nbsp;</p> }
                <img
                    alt='switch theme'
                    src={colorTheme === "light" ? sun : moon} className={`w-5 h-5 whiteColor hover:scale-110 ease-in-out transition duration-200`} />
            </button>
        </div>
    )
}

export default DarkModeToggle