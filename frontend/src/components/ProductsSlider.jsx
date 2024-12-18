import React from 'react'
import ProductCard2 from './ProductCardcopy'

function ProductsSlider({ products, header }) {
    const scrollLeft = (e) => {
        document.getElementById("container").scrollLeft += 340;
    }
    const scrollRight = (e) => {
        document.getElementById("container").scrollLeft -= 340;
    }
    return (
        <div className='relative'>
            <div>
                <h3 className='dark:text-white text-xl font-semibold ml-4 mt-6'>{header}</h3>
            </div>
            <div className='flex overflow-x-scroll scrollbar scroll-smooth' id='container' >
                {products && products.map(product => (
                    <ProductCard2 key={product.slug} product={product} />
                ))}
            </div>
            <div className='absolute top-56 right-5' onClick={scrollLeft}>
                <button className='h-12 w-12 opacity-40 hover:opacity-60 hover:scale-105 p-2 bg-zinc-400 dark:bg-white rounded-full dark:text-zinc-400'>
                    <svg className='fill-current ' viewBox="0 0 24 24" ><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"></path> </g></svg>
                </button>
            </div>
            <div className='absolute top-56 left-5' onClick={scrollRight}>
                <button className='h-12 w-12 opacity-40 hover:opacity-60 hover:scale-105 p-2 bg-zinc-400 dark:bg-white rounded-full dark:text-zinc-400'>
                    <svg className='fill-current' viewBox="0 0 24 24" transform="matrix(-1, 0, 0, 1, 0, 0)"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g > <path d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"></path> </g></svg>
                </button>
            </div>
        </div>
    )
}

export default ProductsSlider