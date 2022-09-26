import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import StarRating from '../components/StarRating'
import products from '../products'

function truncate(str) {
    return str.length > 100 ? str.substring(0, 94) + "..." : str;
}



function ProductPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let { id } = useParams();
    console.log(id);
    const product = products.find((obj) => obj._id === id)
    return (

        <div>
            <Link to='/'>
                <p className='pl-6 pt-6 md:pl-10 hover:font-semibold text-slate-600 ml-0 '><i class="fa fa-arrow-left"></i> &nbsp; GO BACK</p>
            </Link>
            <section>
                <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
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



                    <div className='px-4'>
                        <thead class="text-xs text-gray-700 uppercase ">
                            <tr>
                                <th scope="col" class="py-3  text-sm">
                                    Ratings:
                                </th>
                            </tr>
                        </thead>
                        <div class="flex items-center">
                            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <p class="ml-2 text-sm font-bold text-gray-900">{product.rating}</p>
                            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
                            <a href="#reviewsA" class="text-sm font-medium text-gray-900 underline hover:no-underline ">{product.numReviews} reviews</a>
                        </div>
                        <div class="flex items-center mt-4">
                            <span class="text-sm font-medium text-blue-600">5</span>
                            <div class="mx-4 w-4/5 h-4 bg-gray-200 rounded">
                                <div class="h-4 bg-yellow-400 rounded" style={{ width: "70%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-blue-600">70%</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <span class="text-sm font-medium text-blue-600">4</span>
                            <div class="mx-4 w-4/5 h-4 bg-gray-200 rounded">
                                <div class="h-4 bg-yellow-400 rounded" style={{ width: "17%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-blue-600">17%</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <span class="text-sm font-medium text-blue-600">3</span>
                            <div class="mx-4 w-4/5 h-4 bg-gray-200 rounded">
                                <div class="h-4 bg-yellow-400 rounded" style={{ width: "8%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-blue-600">8%</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <span class="text-sm font-medium text-blue-600">2</span>
                            <div class="mx-4 w-4/5 h-4 bg-gray-200 rounded">
                                <div class="h-4 bg-yellow-400 rounded" style={{ width: "4%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-blue-600">4%</span>
                        </div>
                        <div class="flex items-center mt-4">
                            <span class="text-sm font-medium text-blue-600">1</span>
                            <div class="mx-4 w-4/5 h-4 bg-gray-200 rounded">
                                <div class="h-4 bg-yellow-400 rounded" style={{ width: "1%" }}></div>
                            </div>
                            <span class="text-sm font-medium text-blue-600">1%</span>
                        </div>
                    </div>



                    <article className='px-4 mt-4' id='reviewsA'>
                        <thead class="text-xs text-gray-700 uppercase ">
                            <tr>
                                <th scope="col" class="py-3  text-sm">
                                    Reviews:
                                </th>
                            </tr>
                        </thead>
                        <div class="flex items-center mb-4 space-x-4">
                            <img class="w-10 h-10 rounded-full" src={product.image} alt="" />
                            <div class="space-y-1 font-medium ">
                                <p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 ">Joined on August 2014</time></p>
                            </div>
                        </div>
                        <div class="flex items-center mb-1">
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                        </div>
                        <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                        <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                        <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                        <a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
                        <aside>
                            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                            <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                                <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                            </div>
                        </aside>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default ProductPage