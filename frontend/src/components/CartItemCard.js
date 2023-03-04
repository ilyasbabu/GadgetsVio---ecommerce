import React from 'react'
import { Link } from 'react-router-dom'
import { increaseCartItem, decreaseCartItem, removeFromCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux'

function CartItemCard2({ item }) {
    const dispatch = useDispatch();
    const removeFromCartHandler = () => {
        dispatch(removeFromCart(item.slug))
    }
    const increaseQtyHandler = () => {
        dispatch(increaseCartItem(item.slug, item.qty))
    }
    const decreaseQtyHandler = () => {
        dispatch(decreaseCartItem(item.slug, item.qty))
    }
    return (
        <div className="justify-between mb-6 rounded-lg bg-white dark:to-black   dark:from-black bg-gradient-to-tl p-6 shadow-md sm:flex sm:justify-start">
            <Link to={`/product/${item.slug}/`} className='sm:w-1/3'>
                <img src={item.image} alt="product-image" className="w-full h-48 object-contain scale-110 sm:h-28 rounded-lg sm:w-40" />
            </Link>
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h2>
                    <p className="mt-1 text-xs text-gray-700 dark:text-zinc-200">{item.brand}</p>
                    <p className="sm:mt-14 text-xs text-gray-500 dark:text-zinc-400">Added on 12-2-2023 12:25 am</p>
                </div>
                <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-200 dark:bg-zinc-600 py-1 px-3.5 duration-100 hover:bg-blue-500 dark:hover:bg-zinc-700 dark:text-slate-100 hover:text-blue-50"
                            onClick={decreaseQtyHandler}> - </span>
                        <span className="pt-2 h-8 w-8  bg-white dark:bg-zinc-500 dark:text-white font-medium text-center text-xs outline-none" type="number"
                            value={item.qty} min="1" >{item.qty}</span>
                        <span className="cursor-pointer rounded-r bg-gray-200 dark:bg-zinc-600 py-1 px-3 duration-100 hover:bg-blue-500 dark:hover:bg-zinc-700 dark:text-slate-100 hover:text-blue-50"
                            onClick={increaseQtyHandler}> + </span>
                    </div>
                    <div className="flex items-center space-x-4 justify-end">
                        <p className="text-lg font-semibold text-slate-800 dark:text-zinc-100">$ {item.price * item.qty}</p>
                    </div>
                    <div className="flex items-center justify-end">
                        <p className='text-red-600 text-sm group' onClick={removeFromCartHandler}><i className="group-hover:font-bold group-hover:cursor-pointer fa-regular fa-trash-can"></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard2