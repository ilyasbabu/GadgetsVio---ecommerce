import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import StarRating from './StarRating'
import { addToCart } from '../features/cartSlice'
import { showSuccessMessage } from '../features/commonSlice'


function ProductDetailCard({ product }) {
    const [qty, setQty] = useState(1)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const decreaseQty = () => {
        if (qty <= 0) {
            return
        } else {
            setQty(qty - 1);
        }
    }
    const increaseQty = () => {
        if (qty >= product.stock) {
            return
        } else {
            setQty(qty + 1);
        }
    }
    const addToCartHandler = () => {
        dispatch(addToCart(product.slug, qty));
        dispatch(showSuccessMessage("Item added to cart Successfully"))
        setTimeout(function () {
            navigate(`/cart/`);
        }, 1500);
    }
    return (
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2 mb-4">
            <div className="grid grid-cols-1 gap-4 ">
                <img
                    alt="product_image"
                    src={product.image}
                    className="object-cover w-full aspect-square rounded-xl"
                />
            </div>
            <div className="sticky top-0">
                <div className='flex justify-between items-center'>
                    <strong
                        className={`border rounded-full tracking-wide px-3 font-medium py-0.5 text-xs h-6 ${product.stock > 0 ? "text-blue-600 dark:text-blue-400 border-blue-600" : "text-red-600 dark:text-red-400 border-red-600"}`}
                    >
                        {product.stock > 0 ? "In stock" : "Out of stock"}
                    </strong>
                    <button
                        type='button'
                        className='px-5 py-2 ml-2 transition ease-in-out duration-200  text-2xl w-1/8  text-red-600 group'>
                        <i className="fa-regular fa-heart group-hover:font-bold"></i></button>
                </div>
                <div className="sm:flex justify-between mt-5">
                    <div className="max-w-[35ch]">
                        <h1 className="text-2xl font-bold dark:text-gray-100">
                            {product.name}
                        </h1>
                        <p className="mt-0.5 text-sm dark:text-gray-300">Highest Rated Product</p>
                        <div className="flex mt-2 -ml-0.5">
                            <StarRating starCount={product.avg_rating} text={`${product.avg_rating} FROM ${product.rating_count} REVIEWS`} />
                        </div>
                    </div>
                    <p className="text-2xl font-bold dark:text-gray-50 sm:pt-0 pt-4">${product.price}</p>
                </div>
                <details className="relative mt-4 group">
                    <summary className="block">
                        <div>
                            <div className="prose max-w-none group-open:hidden dark:text-gray-300">
                                <p>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </summary>
                </details>
                <form className="mt-8">
                    <div className='hidden md:block'>
                        <div className="overflow-x-auto relative">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-4 text-sm">
                                            More Information:
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Brand
                                        </th>
                                        <td className="py-4 px-6">
                                            {product.brand}
                                        </td>
                                    </tr>
                                    <tr className="border-b dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Category
                                        </th>
                                        <td className="py-4 px-6">
                                            {product.category}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        {
                            product.stock ?
                                <table className="w-full text-sm text-left text-gray-500 ">
                                    <thead className="text-xs text-gray-700 uppercase ">
                                        <tr>
                                            <th scope="col" className="md:py-3 px-4 text-sm">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-gray-300">
                                                Select Quantity:
                                            </th>
                                            <td className="py-4 px-6">
                                                <button
                                                    className='w-10 py-2 md:mx-4 text-lg text-center rounded dark:text-white hover:text-black hover:md:scale-125 transition ease-in-out duration-500'
                                                    type='button'
                                                    onClick={decreaseQty}>
                                                    &#8722;
                                                </button>
                                                <input
                                                    type="number"
                                                    value={qty}
                                                    onChange={() => { }}
                                                    disabled
                                                    className="w-16 py-2 text-base text-center border dark:bg-gray-700 dark:text-white border-gray-800 rounded [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                />
                                                <button
                                                    className='w-10 py-2 md:mx-4 text-lg text-center rounded dark:text-white hover:text-black hover:md:scale-125 transition ease-in-out duration-500'
                                                    type='button'
                                                    onClick={increaseQty}>
                                                    &#43;
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> : <></>
                        }
                    </div>
                    <div className='mx-5 md:mt-1'>
                        <div>
                            <p className={`py-2 text-sm font-semibold  ${product.stock ? "text-blue-900 dark:text-blue-500" : "text-red-900 dark:text-red-400"}`}>
                                {product.stock ? `${product.stock} items currently available in stock` : "Product not available at the moment"}
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-6'>
                        <button
                            type='button'
                            disabled={product.stock ? false : true}
                            onClick={addToCartHandler}
                            className={`px-5 py-3 transition ease-in-out duration-200 rounded text-xs font-medium w-full text-white ${product.stock? "bg-green-500 hover:bg-green-600" : "bg-zinc-500 hover:bg-zinc-600" } `}>
                            Add to Cart &nbsp; <i className="fa fa-cart-shopping"></i>
                        </button>
                    </div>
                </form>
                <div className='mt-4 md:hidden'>
                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase  ">
                                <tr>
                                    <th scope="col" className="py-3 px-4 text-sm dark:text-gray-300">
                                        More Information:
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="dark:text-gray-400 border-b dark:border-gray-500 ">
                                    <th scope="row" className="py-4 px-6 dark:text-gray-400 font-medium text-gray-900 whitespace-nowrap ">
                                        Brand
                                    </th>
                                    <td className="py-4 px-6">
                                        {product.brand}
                                    </td>
                                </tr>
                                <tr className="dark:text-gray-400 border-b dark:border-gray-500">
                                    <th scope="row" className="py-4 px-6 dark:text-gray-400 font-medium text-gray-900 whitespace-nowrap ">
                                        Category
                                    </th>
                                    <td className="py-4 px-6">
                                        {product.category}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailCard