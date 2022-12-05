import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'
import RatingCard from '../components/RatingCard'
import ProductDetailCard from '../components/ProductDetailCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailAsync } from '../features/productDetailSlice'
import Loading from '../components/Loading'
import ErrorCard from '../components/ErrorCard'

function ProductPage() {
    let { slug } = useParams();
    const { data, error_, loading } = useSelector(state => state.product_detail)
    const product = data

    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProductDetailAsync(slug))
    }, [slug])

    return (
        <div>
            {
                loading ? <Loading />
                    : error_ ? <ErrorCard message={error_} />
                        :
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
                                        <div className="text-xs text-gray-700 uppercase ">
                                            <div>
                                                <div className="py-3 font-bold text-sm">
                                                    Reviews:
                                                </div>
                                            </div>
                                        </div>
                                        {product.reviews.map(review => (
                                            <div key={review.id}>
                                                <Reviews review={review} />
                                                <hr />
                                            </div>
                                        ))}
                                    </article>
                                </div>
                            </section>
                        </div>
            }
        </div>
    )
}

export default ProductPage