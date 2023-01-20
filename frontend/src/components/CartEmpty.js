import React from 'react'

function CartEmpty() {
    return (
        <div className='dark:text-zinc-400 flex justify-center items-center h-64'>
            <p className=' text-2xl font-bold opacity-50'>Nothing in your cart</p>
        </div>
    )
}

export default CartEmpty