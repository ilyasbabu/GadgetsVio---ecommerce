import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'
import RatingCard from '../components/RatingCard'
import ProductDetailCard from '../components/ProductDetailCard'
import axios from 'axios'
import products from '../products'

function ProductPage() {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])
    let { slug } = useParams();
    console.log(slug);
    // const product = products.find((obj) => obj._id === slug)
    const [product, setProduct] = useState({})
    useEffect(() => {
        window.scrollTo(0, 0)
        async function getProduct(slug){
            const { data } = await axios.get(`/api/product/${slug}`)
            console.log(data)
            setProduct(data)
        }
        getProduct(slug)
    }, [])
    
    return (
        <div>
            <Link to='/'>
                <p className='pl-6 pt-6 md:pl-10 hover:text-slate-800 text-slate-600 ml-0 '><i className="fa fa-arrow-left"></i> &nbsp; GO BACK</p>
            </Link>
            <section>
                <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                    <div>
                        <ProductDetailCard product={product} />
                    </div>
                    <div>
                        <RatingCard />
                    </div>
                    <article className='px-4 mt-4' id='reviewsA'>
                        <Reviews />
                    </article>
                </div>
            </section>
        </div>
    )
}

export default ProductPage