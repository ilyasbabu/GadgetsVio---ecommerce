import React, { useEffect } from 'react'
import CartItemCard from '../components/CartItemCard';
import CartSummarySection from '../components/CartSummarySection';

function CartPage() {
    console.log("asdasdsadsadsa");
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className='w-full h-full flex lg:flex-row flex-col justify-between'>
                <div className='h-full'>
                    <div className='lg:px-72 md:px-7 px-4 lg:py-20 md:py-10 py-6'>
                        <div className='pb-6 md:pb-14'>
                            <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800 ">Cart</p>
                        </div>
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                    </div>
                </div>
                <CartSummarySection />
            </div>
        </div>
    )
}


export default CartPage