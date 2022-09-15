import React from 'react'
import products from '../products'
import ProductCard from '../components/ProductCard'

function HomePage() {
    return (
        <div>


            <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 place-items-center ">

                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}






            </div>
        </div>
    )
}

export default HomePage