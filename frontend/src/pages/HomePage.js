import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

function HomePage() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    const [products, setProducts] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
        async function getProducts() {
            const { data } = await axios.get('/api/products')
            console.log(data)
            setProducts(data)
        }
        getProducts()
    }, [])

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