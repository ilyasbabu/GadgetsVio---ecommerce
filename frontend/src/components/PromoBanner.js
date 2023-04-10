import React from 'react'

function PromoBanner() {
    const username = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).user_name : ''
    return (
        <div className="p-6 mt-2 py-12 mb-3 bg-violet-400 text-white dark:text-black">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                        <br className="sm:hidden" />50% Off
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Plus free shipping! Use code:</span>
                        <span className="font-bold text-lg">{username.toUpperCase()}FIRSTGADGET</span>
                    </div>
                    <a href="/" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block text-black bg-gray-50 dark:text-gray-900 border-gray-400">Checkout</a>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner