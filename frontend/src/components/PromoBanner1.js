import React from 'react'

function PromoBanner1() {
    const username = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user_name : ''
    return (
        <div className="mt-2 md:py-6 py-6  bg-violet-400 dark:bg-black text-white ">
            <div className="mx-0 lg:mx-20 xl:mx-40">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    <div>
                        <h2 className="text-center text-4xl tracking-tighter font-bold">Up to 50% Off
                        </h2>
                    </div>
                    <div className="space-x-2 text-center  lg:py-0">
                        <span>Plus free shipping! Use code:</span>
                        <span className="font-bold text-lg">{username?.toUpperCase()}FIRSTGADGET</span>
                    </div>
                    <a href="/" className="px-5 mt-1 lg:mt-0 py-2 rounded-md block text-black bg-gray-50 dark:bg-black dark:text-gray-100 border border-zinc-500">Checkout</a>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner1