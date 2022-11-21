import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import ErrorCard from '../components/ErrorCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAsync } from '../features/productListSlice'

function HomePage() {
    const { data, error_, loading } = useSelector(state => state.products_list)
    const products = data
    const isLoading = loading
    const errorMsg = error_
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProductListAsync())
    }, [])
    console.log(products);

    return (
        <div>
            {isLoading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : errorMsg ? <ErrorCard message={errorMsg} /> :
                (
                    <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 place-items-center ">
                        {products.map(product => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                )
            }

        </div>
    )
}

export default HomePage