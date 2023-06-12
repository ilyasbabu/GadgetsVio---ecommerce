import React from 'react'
import ProductListCard from '../components/ProductListCard'
import { useDispatch, useSelector } from 'react-redux'

function BrandPage() {
    const { data, brands, banners, loading } = useSelector(state => state.products_list)
    console.log(data,brands,banners,loading);
    return (
        <div className='flex'>
            <div className='bg-slate-600 hidden md:block'>
                <h2>Filter</h2>
            </div>
            <div className='md:p-28 w-full '>
                {
                    data.map((product) =>
                        <ProductListCard item={product} />
                    )
                }
            </div>
            <div className='py-2 pr-5 hidden md:block'>
                <h5>Ad banner</h5>
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
        </div>
    )
}

export default BrandPage