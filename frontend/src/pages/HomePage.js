import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import ErrorCard from '../components/ErrorCard'
import SuccessCard from '../components/SuccessCard'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAsync } from '../features/productListSlice'
import { setInitialState } from '../features/commonSlice'
import PromoBanner from '../components/PromoBanner'
import FaqCard from '../components/FaqCard'

function HomePage() {
    const { data, loading } = useSelector(state => state.products_list)
    const { message, type, msg_list } = useSelector(state => state.commons)
    const products = data
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProductListAsync())
        return () => {
            dispatch(setInitialState())
        }
    }, [dispatch])

    return (
        <div className='min-h-screen'>
            {loading && <Loading />}
            <div>
                <PromoBanner/>
                {
                    type !== "error" &&
                    <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 place-items-center ">
                        {products.map(product => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                }
                <FaqCard/>
            </div>

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

export default HomePage