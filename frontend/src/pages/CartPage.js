import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading'
import ErrorCard from '../components/ErrorCard'
import SuccessCard from '../components/SuccessCard';
import { getCartItemsAsync } from '../features/cartSlice';
import CartEmpty from '../components/CartEmpty';
import CartItemCard2 from '../components/CartItemCard';
import CartSummary from '../components/CartSummary';

function CartPage() {
    const { cartItems, loading } = useSelector(state => state.cart_items)
    const { message, type, msg_list } = useSelector(state => state.commons)
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getCartItemsAsync())
    }, [dispatch])
    return (
        <div className='min-h-screen bg-gray-100 dark:bg-opacity-0'>
            {loading && <Loading />}
            <div className="  pt-20">
                <div className='flex px-6 lg:px-0 justify-between lg:justify-around items-center mb-10'>
                    <h3 className=" text-2xl font-bold text-slate-800 dark:text-zinc-50 ">Cart Items</h3>
                    <p className='text-blue-500'><span className="text-md font-medium">Continue Shopping</span><i className="fa fa-arrow-right text-sm pl-2"></i></p>
                </div>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3 hello">
                        {cartItems.length  ?
                            cartItems.map((cartItem, index) => (
                                <CartItemCard2 key={index} item={cartItem} />
                            ))
                            : <CartEmpty />
                        }
                    </div>
                    <CartSummary
                        cartItems={cartItems}
                        total_price={cartItems ? cartItems.reduce((acc, item) => acc + parseFloat(item.price * item.qty), 0).toFixed(2) : 0}
                        total_qty={cartItems ? cartItems.reduce((acc, item) => acc + item.qty, 0) : 0}
                        no_of_items={cartItems ? cartItems.length : 0}
                    />
                </div>
            </div>
            {message && type === "success" && <SuccessCard message={message} />}
            <div className='flex-col-reverse fixed bottom-4 right-4 w-1/2 sm:w-1/4 '>
                {
                    msg_list.map(msg => (
                        <ErrorCard message={msg.message} />
                    ))
                }
            </div>
        </div>

    )
}


export default CartPage