import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'
import RatingCard from '../components/RatingCard'
import ProductDetailCard from '../components/ProductDetailCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailAsync } from '../features/productDetailSlice'
import { setInitialState } from '../features/commonSlice'
import Loading from '../components/Loading'
import ErrorCard from '../components/ErrorCard'
import SuccessCard from '../components/SuccessCard'

function ProductPage() {
    let { slug } = useParams();
    const { data, loading } = useSelector(state => state.product_detail)
    const { message, type, msg_list } = useSelector(state => state.commons)
    const product = data

    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProductDetailAsync(slug))
        return () => {
            dispatch(setInitialState())
        }
    }, [dispatch, slug])

    return (
        <div className='min-h-screen'>
            {loading && <Loading />}
            {
                type !== "error" &&
                <div>
                    <Link to='/'>
                        <p className='pl-6 pt-6 md:pl-10 hover:text-slate-800 text-slate-600 dark:text-gray-200 dark:hover:text-gray-100 ml-0 '><i className="fa fa-arrow-left"></i> &nbsp; GO BACK</p>
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
                                        <div className="py-3 font-bold text-sm dark:text-gray-200">
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
            {message && type === "success" && <SuccessCard message={message} />}
            <div className='flex-col-reverse fixed bottom-4 right-4 w-1/2 sm:w-1/4 '>
                {
                    msg_list.map(msg => (
                        <ErrorCard message={msg.message} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductPage