import React from 'react'
import StarRating from './StarRating'

function ProductDetailCard({ product }) {
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
                    className={`border rounded-full tracking-wide px-3 font-medium py-0.5 text-xs text-blue-600 border-blue-600 ${product.countInStock > 0 ? "text-blue-600 border-blue-600" : "text-red-600 border-red-600"}`}
                >
                    {product.countInStock > 0 ? "In stock" : "Out of stock"}
                </strong>

                <div className="flex justify-between mt-8">
                    <div className="max-w-[35ch]">
                        <h1 className="text-2xl font-bold">
                            {product.name}
                        </h1>

                        <p className="mt-0.5 text-sm">Highest Rated Product</p>

                        <div className="flex mt-2 -ml-0.5">
                            <StarRating starCount={product.rating} text={`${product.rating} FROM ${product.numReviews} REVIEWS`} />
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
                        <div class="overflow-x-auto relative">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="py-3 px-4 text-sm">
                                            More Information:
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Brand
                                        </th>
                                        <td class="py-4 px-6">
                                            {product.brand}
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Category
                                        </th>
                                        <td class="py-4 px-6">
                                            {product.category}
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex mt-8'>
                        <div>
                            <p className='text-xs p-2 px-4'>
                                Qty:
                            </p>
                        </div>
                        <div>
                            <button className='border p-1 px-4'>
                                -
                            </button>
                        </div>
                        <div>
                            <p className='border p-1 px-4'>
                                1
                            </p>
                        </div>
                        <div>
                            <button className='border p-1 px-4'>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <div>
                            <label className="sr-only">Qty</label>

                            <input
                                type="number"
                                id="quantity"
                                min="1"
                                value="1"
                                className="w-12 py-3 text-xs text-center border border-gray-500 rounded [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className=" w-full block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                        >
                            Add to Cart &nbsp; <i class="fa fa-cart-shopping"></i>
                        </button>
                        <button
                            type="submit"
                            className="w-full block px-5 py-3 ml-3 text-xs font-medium text-pink-600 hover:text-white bg-white border border-pink-700 rounded hover:bg-pink-500"
                        >
                            Wishlist &nbsp; <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </form>
                <div className='mt-4 md:hidden'>
                    <div class="overflow-x-auto relative">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" class="py-3 px-4 text-sm">
                                        More Information:
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b ">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                        Brand
                                    </th>
                                    <td class="py-4 px-6">
                                        {product.brand}
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                        Category
                                    </th>
                                    <td class="py-4 px-6">
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