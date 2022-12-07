import React from 'react'

function CartItemCard() {
    return (
        <div>
            <div className='flex md:flex-row justify-between pb-6 flex-col'>
                <div className='md:w-1/4'>
                    <div className='w-full'>
                        <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Black Leather Purse" className="h-full object-center object-cover" />
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <p className="text-xs leading-3 text-gray-800 dark:text-gray-100  md:pt-0 pt-4">Added on 21-23-1222</p>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-base font-black leading-none text-gray-800 dark:text-gray-300 ">Luxe card holder 4546GB 34</p>
                        <div className='md:hidden block '>
                            <button
                                className='w-10 py-2 md:mx-4 text-lg dark:text-white text-center rounded hover:text-black hover:md:scale-125 transition ease-in-out duration-500'
                                type='button'
                            // onClick={decreaseQty}
                            >
                                &#8722;
                            </button>
                            <input
                                type="number"
                                value={1}
                                onChange={() => { }}
                                disabled
                                className="w-16 py-2 text-base text-center border dark:bg-gray-700 dark:text-white border-gray-800 rounded [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                            <button
                                className='w-10 py-2 md:mx-4 text-lg dark:text-white text-center rounded hover:text-black hover:md:scale-125 transition ease-in-out duration-500'
                                type='button'
                            // onClick={increaseQty}
                            >
                                &#43;
                            </button>
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 pt-2">Height: 10 inches</p>
                    <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 py-4">Color: Black</p>
                    <p className="w-96 text-xs leading-3 text-gray-600 dark:text-gray-400">Composition: 100% calf leather</p>
                    <div className="flex items-center justify-between pt-5">
                        <div className="flex justify-between w-full">
                            <div className='flex'>
                                <p className="text-xs leading-3 underline text-gray-800 dark:text-gray-200 cursor-pointer">Add to favorites</p>
                                <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                            </div>
                            <div>
                                <p className="md:hidden text-lg font-black leading-none text-gray-800 dark:text-gray-100">$ 1000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/4 md:flex-col flex-row justify-between hidden md:flex'>
                    <div className="py-4 px-6 flex w-full">
                        <button
                            className='w-10 py-2 md:mx-4 text-lg text-center rounded hover:text-black hover:md:scale-125 transition ease-in-out duration-500'
                            type='button'
                        // onClick={decreaseQty}
                        >
                            &#8722;
                        </button>
                        <input
                            type="number"
                            value={1}
                            onChange={() => { }}
                            disabled
                            className="w-16 py-2 text-base text-center border border-gray-800 rounded [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button
                            className='w-10 py-2 md:mx-4 text-lg text-center rounded hover:text-black hover:md:scale-125 transition ease-in-out duration-500'
                            type='button'
                        // onClick={increaseQty}
                        >
                            &#43;
                        </button>
                    </div>
                    <div className='w-full'>
                        <p className="pt-4 text-xl font-black text-center leading-none text-gray-800">$ 1000</p>
                    </div>
                </div>

            </div>
            <hr className='pb-4' />
        </div>
    )
}

export default CartItemCard