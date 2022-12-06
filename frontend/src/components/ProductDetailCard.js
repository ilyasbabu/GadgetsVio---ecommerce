import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import StarRating from './StarRating'
import { addToCart } from '../features/cartSlice'


function ProductDetailCard({ product }) {
    const [qty, setQty] = useState(1)
    const navigate = useNavigate();
    const dispatch = useDispatch()
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
        console.log("add to cart",product.slug);
        dispatch(addToCart(product.slug,qty));
        // navigate(`/cart/${product.slug}?qty=${qty}`);
    }
    return (
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2 mb-4">
            <div className="grid grid-cols-1 gap-4 ">
                <img
                    alt="Les Paul"
                    src={product.image}
                    className="object-cover w-full aspect-square rounded-xl"
                />
            </div>
            <div className="sticky top-0">
                <strong
                    className={`border rounded-full tracking-wide px-3 font-medium py-0.5 text-xs text-blue-600 border-blue-600 ${product.stock > 0 ? "text-blue-600 border-blue-600" : "text-red-600 border-red-600"}`}
                >
                    {product.stock > 0 ? "In stock" : "Out of stock"}
                </strong>
                <div className="flex justify-between mt-8">
                    <div className="max-w-[35ch]">
                        <h1 className="text-2xl font-bold">
                            {product.name}
                        </h1>
                        <p className="mt-0.5 text-sm">Highest Rated Product</p>
                        <div className="flex mt-2 -ml-0.5">
                            <StarRating starCount={product.avg_rating} text={`${product.avg_rating} FROM ${product.rating_count} REVIEWS`} />
                        </div>
                    </div>
                    <p className="text-lg font-bold">${product.price}</p>
                </div>
                <details className="relative mt-4 group">
                    <summary className="block">
                        <div>
                            <div className="prose max-w-none group-open:hidden">
                                <p>
                                    {product.description}
                                </p>
                            </div>
                            <span
                                className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
                            >
                                Read More
                            </span>
                        </div>
                    </summary>
                    <div className="pb-6 prose max-w-none">
                        <p>
                            {product.description}
                        </p>
                    </div>
                </details>
                <form className="mt-8">
                    <div className='hidden md:block'>
                        <div className="overflow-x-auto relative">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-4 text-sm">
                                            More Information:
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Brand
                                        </th>
                                        <td className="py-4 px-6">
                                            {product.brand}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                    <div className='flex mt-8 justify-between mx-3'>
                        <div className={`${product.stock ? "flex" : "hidden"}`}>
                            <div>
                                <p className='text-base p-2 px-4'>
                                    Qty :
                                </p>
                            </div>
                            <div>
                                <button
                                    className='w-10 py-2 text-lg text-center border-gray-500 rounded '
                                    type='button'
                                    onClick={decreaseQty}>
                                    -
                                </button>
                            </div>
                            <div>
                                <label className="sr-only">Qty</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    value={qty}
                                    onChange={() => { }}
                                    disabled
                                    className="w-12 py-3 text-xs text-center border border-gray-500 rounded [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>
                            <div>
                                <button
                                    className='w-10 py-2 text-lg text-center border-gray-500 rounded '
                                    type='button'
                                    onClick={increaseQty}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='w-full'>
                                <p className={`py-2 text-lg font-semibold  ${product.stock ? "text-blue-900" : "text-red-900"}`}>
                                    {product.stock ? `${product.stock} items available in stock` : "Product not available at the moment"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <button
                            type="button"
                            disabled={product.stock ? false : true}
                            className={`w-full block px-5 py-3 ml-3 text-xs font-medium text-white rounded ${product.stock ? "bg-green-600 hover:bg-green-500" : "bg-gray-500 hover:bg-gray-400"}`}
                            onClick={addToCartHandler}
                        >
                            Add to Cart &nbsp; <i className="fa fa-cart-shopping"></i>
                        </button>
                        <button
                            type="button"
                            className="w-full block px-5 py-3 ml-3 text-xs font-medium text-pink-600 hover:text-white bg-white border border-pink-700 rounded hover:bg-pink-500"
                        >
                            Wishlist &nbsp; <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </form>
                <div className='mt-4 md:hidden'>
                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="py-3 px-4 text-sm">
                                        More Information:
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                        Brand
                                    </th>
                                    <td className="py-4 px-6">
                                        {product.brand}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
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