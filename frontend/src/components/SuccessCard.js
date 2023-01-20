import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInitialState } from '../features/commonSlice';

function SuccessCard({ message }) {
    const [visible, setVisible] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 300)
        setTimeout(() => {
            setVisible(false)
        }, 2000)
        setTimeout(() => {
            dispatch(setInitialState())
        }, 2300)
    }, [dispatch])
    return (
        <div className={`transition-all duration-300 ${visible ? "opacity-95" : "opacity-0"}`}>
            <aside className="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-white">
                <svg fill="currentColor" className='h-8 w-8 p-1 mr-3' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier">
                        <polygon points="437.3,30 202.7,339.3 64,200.7 0,264.7 213.3,478 512,94 "></polygon>
                    </g>
                </svg>
                <p className="text-sm font-medium">{message}</p>
            </aside>
        </div>
    )
}

export default SuccessCard