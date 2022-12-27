import React from 'react'
import { Link } from 'react-router-dom'


function CartEmpty() {
    return (
        <div className='dark:text-zinc-400'>
            <p className='mb-7'>No items in your cart</p>
            <Link to="/" className=' bg-blue-600 hover:bg-blue-700 rounded p-3 text-white'>Continue shopping</Link>
        </div>
    )
}

export default CartEmpty