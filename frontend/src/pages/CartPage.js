import React, { useEffect } from 'react'
import CartItemCard from '../components/CartItemCard';
import CartSummarySection from '../components/CartSummarySection';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading'
import ErrorCard from '../components/ErrorCard'

function CartPage() {
    console.log("asdasdsadsadsa");
    const { cartItems, total_price, total_qty, error_, loading } = useSelector(state => state.cart_items)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            {
                loading ? <Loading />
                    :
                    error_ ? <ErrorCard message={error_} />
                        :
                        <div className='w-full h-full flex lg:flex-row flex-col justify-between'>
                            <div className='h-full lg:px-60 md:px-4 px-4 lg:py-20 md:py-10 py-6'>
                                <div className='pb-6 md:pb-14'>
                                    <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-gray-50">Cart</p>
                                </div>
                                {
                                    cartItems.map((cartItem, index) => (
                                        <CartItemCard key={index} item={cartItem} />
                                    ))
                                }
                            </div>
                            <CartSummarySection total_price={total_price} total_qty={total_qty} />
                        </div>
            }
        </div>
    )
}


export default CartPage