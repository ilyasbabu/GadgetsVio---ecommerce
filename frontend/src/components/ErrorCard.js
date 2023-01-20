import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInitialState } from '../features/commonSlice';

function ErrorCard({ message }) {
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
        <div className={`transition-all duration-300 ${visible ? "opacity-95" : "opacity-0"} p-2`}>
            <aside className=" z-50 flex items-center justify-center rounded-lg bg-red-500 px-5 py-3 text-white">
                <svg fill='currentColor' className='h-8 w-8 p-1 mr-3' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 492.804 492.804" xmlSpace="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_iconCarrier"> <g> <g>
                        <path d="M482.592,381.614L288.863,69.966c-11.22-18.044-26.348-27.96-42.656-27.96c-16.32,0-31.456,9.924-42.672,27.976 L10.267,381.142c-11.216,18.04-13.316,35.268-5.94,48.564c7.432,13.38,23.36,20.728,44.864,20.752l394.608,0.3h-0.336v0.04 c19.272,0,37.56-7.316,44.984-20.652C495.824,416.89,493.808,399.666,482.592,381.614z M256.96,388.59 c-2.868,2.86-6.736,4.484-10.792,4.484c-4.048,0-7.988-1.64-10.868-4.5c-2.856-2.86-4.476-6.852-4.472-10.932 c0.008-4.056,0.956-8.024,3.82-10.86c2.924-2.888,5.404-4.54,9.26-4.54l0.72-0.008c4.04,0,8.84,1.66,11.744,4.564 c2.872,2.856,4.932,6.812,4.924,10.876C261.292,381.762,259.852,385.742,256.96,388.59z M246.216,331.398 c-4.12,0-7.94-1.6-10.852-4.512c-2.912-2.916-4.488-6.792-4.484-10.92l-1.616-139.068c0.016-8.512,5.972-15.416,13.684-15.416 h1.772c4.124,0,8.88,1.604,11.788,4.52c2.916,2.92,4.932,6.788,4.928,10.916l0.1,139.068 C261.528,324.482,254.724,331.398,246.216,331.398z"></path>
                    </g> </g> </g>
                </svg>
                <p className="text-sm font-medium">{message}</p>
            </aside>
        </div>
    )
}

export default ErrorCard