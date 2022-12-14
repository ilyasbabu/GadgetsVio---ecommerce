import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import ErrorCard from '../components/ErrorCard'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAsync } from '../features/productListSlice'

function HomePage() {
    const { data, error_, loading } = useSelector(state => state.products_list)
    const products = data
    const errorMsg = error_
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProductListAsync())
    }, [dispatch])
    console.log(products);

    return (
        <div>
            {/* <section>
                <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
                            Trending Categories
                        </h2>
                        <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-300">
                            Choose the best among these categories from our widest range of products
                        </p>
                    </header>
                    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                        <li>
                            <a href="#" className="relative block group">
                                <img
                                    src="/images/laptops1.jpg"
                                    // src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />
                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Office Laptops</h3>
                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative block group">
                                <img
                                    src="/images/mobiles.jpg"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />
                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-white">Mobile phones</h3>
                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <a href="#" className="relative block group">
                                <img
                                    src="/images/headphones.jpg"
                                    alt=""
                                    className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                                />
                                <div
                                    className="absolute inset-0 flex flex-col items-start justify-end p-6"
                                >
                                    <h3 className="text-xl font-medium text-black">Headphones</h3>
                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section> */}
            {loading ? <Loading />
                : errorMsg ? <ErrorCard message={errorMsg} />
                    : <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 place-items-center ">
                        {products.map(product => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
            }
        </div>
    )
}

export default HomePage