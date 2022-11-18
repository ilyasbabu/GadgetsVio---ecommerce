import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAsync, loading, showProducts } from '../features/productListSlice'

function HomePage() {
    const products = useSelector(showProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProductListAsync())
    }, [])
    console.log(products);

    return (
        <div>
            
            <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 place-items-center ">

                {products.map(product => (
                    <ProductCard key={product.slug} product={product} />
                ))}

            </div>
        </div>
    )
}

export default HomePage