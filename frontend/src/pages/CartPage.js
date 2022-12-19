import React, { useEffect } from 'react'
import CartItemCard from '../components/CartItemCard';
import CartSummarySection from '../components/CartSummarySection';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading'
import ErrorCard from '../components/ErrorCard'
import { getCartItemsAsync } from '../features/cartSlice';

function CartPage() {
    console.log("asdasdsadsadsa");
    const { cartItems, total_price, total_qty, error_, loading } = useSelector(state => state.cart_items)
    const { message, type } = useSelector(state => state.commons)
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getCartItemsAsync())
    }, [dispatch])
    return (
        <div className='min-h-screen'>
            {loading && <Loading />}
            {
                type !== "error" &&
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
                    <CartSummarySection
                        total_price={cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2)}
                        total_qty={cartItems.reduce((acc, item) => acc + item.qty, 0)}
                        no_of_items={cartItems.length}
                    />
                </div>
            }
            {message && type === "success" && <SuccessCard message={message} />}
            {message && type === "error" && <ErrorCard message={message} />}
        </div>
    )
}


export default CartPage