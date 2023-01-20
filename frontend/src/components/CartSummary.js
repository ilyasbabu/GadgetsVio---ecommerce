import React from 'react'

function CartSummary({ total_price, total_qty, no_of_items }) {
    return (
        <div className="mt-6 h-full rounded-lg border bg-white  dark:from-black dark:to-zinc-900 bg-gradient-to-br dark:border-0 p-6 shadow-md md:mt-0 md:w-1/3">
            <div className='mb-3'>
                <h3 className='text-xl font-semibold dark:text-zinc-100'>Summary</h3>
            </div>
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700 dark:text-zinc-300">Number of items</p>
                <p className="text-gray-700 dark:text-zinc-300">{no_of_items}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700 dark:text-zinc-300">Total Quantity</p>
                <p className="text-gray-700 dark:text-zinc-300">{total_qty}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="text-lg font-bold dark:text-zinc-300">Total</p>
                <div>
                    <p className="mb-1 text-lg font-bold dark:text-zinc-100">$ {total_price}</p>
                    <p className="text-sm text-gray-700 dark:text-zinc-300">including Tax</p>
                </div>
            </div>
            <div className={`mt-6 bg-size-200 bg-pos-0 hover:bg-pos-100 dark:p-0.5 p-[0.140rem]  bg-gradient-to-l transition-all ease-in-out duration-500 rounded-full from-red-600 via-blue-500 to-red-600`}>
                {/* <button className=" w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out &nbsp; <i className="fa-solid fa-basket-shopping"></i></button> */}
                <button className=" w-full rounded-full  py-1.5 font-medium text-black dark:text-white dark:hover:text-zinc-200 hover:text-slate-700 bg-white dark:bg-black transition ease-in-out duration-500">Check out &nbsp; <i className="fa-solid fa-basket-shopping"></i></button>
            </div>
        </div>
    )
}

export default CartSummary