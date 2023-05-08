import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import ErrorCard from '../components/ErrorCard'
import SuccessCard from '../components/SuccessCard'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getProductListAsync } from '../features/productListSlice'
import { setInitialState } from '../features/commonSlice'
import PromoBanner1 from '../components/PromoBanner1'
import FaqCard from '../components/FaqCard'
import PromoBanner2 from '../components/PromoBanner2'
import CarouselComponent from '../components/CarouselComponent'
import banner1 from "../images/banner/18494353_6003842.jpg"
import banner2 from "../images/banner/33139536_7995902.jpg"
import banner3 from "../images/banner/33139539_7995937.jpg"
import ProductsSlider from '../components/ProductsSlider'
import BrandsCard from '../components/BrandsCard'

function HomePage() {
    const { data, brands, loading } = useSelector(state => state.products_list)
    const { message, type, msg_list } = useSelector(state => state.commons)
    const products = data
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProductListAsync())
        console.log(banner1);
        return () => {
            dispatch(setInitialState())
        }
    }, [dispatch])
    const bannerArr = [
        banner1, banner2, banner3
    ]

    return (
        <div className='min-h-screen'>
            {loading && <Loading />}
            <div className='px-0 sm:px-3 md:px-10 lg:px-28 xl:px-44 pt-9'>
                <CarouselComponent carouselItems={bannerArr} />
                <PromoBanner1 />
                <ProductsSlider products={products} header={"Featured Products"}/>
                <BrandsCard brands={brands}/>
                <PromoBanner2 />
                <FaqCard />
            </div>

            {message && type === "success" && <SuccessCard message={message} />}
            <div className='flex-col-reverse fixed bottom-4 right-4 w-1/2 sm:w-1/4 '>
                {
                    msg_list.map((msg, index) => (
                        <ErrorCard key={index} message={msg.message} />
                    ))
                }
            </div>
            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying shopping here</h1>
                </div>
                <div className='container mx-auto md:flex w-full'>
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50 w-full">
                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-blue-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-blue-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                        <p className='text-center'><span className='text-yellow-400'>★★★★☆</span></p>
                        <p className='text-center text-zinc-600'>John Doe</p>
                        <p className='text-center text-zinc-500 text-xs'>(iPhone 14 pro max)</p>
                    </div>

                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50 w-full">
                        <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-blue-600">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>Lorem eligendi exercitationem molestias possimus facere.
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-blue-600">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </p>
                        <p className='text-center'><span className='text-yellow-400'>★★★★★</span></p>
                        <p className='text-center text-zinc-600'>Jane Daniel</p>
                        <p className='text-center text-zinc-500 text-xs'>(JBL Tune 510BT)</p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default HomePage