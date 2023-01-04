import React from 'react'
import useDarkTheme from '../hooks/useDarkTheme'

function DarkModeToggle({ text }) {
    const sun = "/images/icons/sun-svgrepo-com.svg"
    const moon = "/images/icons/moon-svgrepo-com.svg"
    const [colorTheme, setTheme] = useDarkTheme();
    const toggleDarkMode = () => {
        setTheme(colorTheme);
    };
    return (
        <div>
            <button
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