import React from 'react'
import { Link } from 'react-router-dom';

function CartSummary({ cartItems, total_price, total_qty, no_of_items }) {
    return (
        <div className="mt-6 h-full rounded-lg border bg-white  dark:from-black dark:to-zinc-900 bg-gradient-to-br dark:border-0 p-6 shadow-md md:mt-0 md:w-1/3">
            <div className='mb-3'>
                <h3 className='text-xl font-semibold dark:text-zinc-100'>Summary</h3>
            </div>
            {
                cartItems && cartItems.map((cartItem, index) => (
                    <div className="mb-2 flex justify-between" key={index}>
                        <p className="text-gray-700 dark:text-zinc-300">
                            {cartItem.name.length > 15 ? cartItem.name.substring(0, 13) + "..." : cartItem.name}
                            <span className='text-xs text-blue-500 dark:text-blue-500'>
                                &nbsp;x{cartItem.qty}
                            </span>
                        </p>
                        <p className="text-gray-700 dark:text-zinc-300">$ {(parseInt(cartItem.qty) * parseFloat(cartItem.price)).toLocaleString()}</p>
                    </div>
                ))
            }
            {
                cartItems && cartItems.length ?
                    <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr> : <></>
            }
            {
                no_of_items !== 0 ?
                    <>
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700 dark:text-zinc-300">Number of items</p>
                            <p className="text-gray-700 dark:text-zinc-300">{no_of_items}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700 dark:text-zinc-300">Total Quantity</p>
                            <p className="text-gray-700 dark:text-zinc-300">{total_qty}</p>
                        </div>
                    </>
                    :
                    <div className='flex justify-center items-center'>
                        <p className='dark:text-zinc-700 text-zinc-400 font-mono text-center'>Add Items to Cart to display Summary</p>
                    </div>
            }
            <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
            <div className="flex justify-between">
                <p className="text-lg font-bold dark:text-zinc-300">Total</p>
                <div>
                    <p className="mb-1 text-lg font-bold dark:text-zinc-100">$ {total_price}</p>
                    <p className="text-sm text-gray-700 dark:text-zinc-300">including Tax</p>
                </div>
            </div>
            <div className='mt-6 bg-size-200 bg-pos-0 hover:bg-pos-100 dark:p-0.5 p-[0.140rem]  bg-gradient-to-l transition-all ease-in-out duration-500 rounded-full from-red-600 via-blue-500 to-red-600'>
                <button className=" w-full rounded-full  py-1.5 font-medium text-black dark:text-white dark:hover:text-zinc-200 hover:text-slate-700 bg-white dark:bg-black transition ease-in-out duration-500">{no_of_items === 0 ? "Continue Shopping" : "Check out"} &nbsp; <i className="fa-solid fa-basket-shopping"></i></button>
            </div>
        </div>
    )
}

export default CartSummary