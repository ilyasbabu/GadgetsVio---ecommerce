import React from 'react'
import { Link } from 'react-router-dom'

function BrandsCard({brands}) {
    return (
        <div>
            <div>
                <h3 className='dark:text-white text-xl font-semibold ml-4 mt-6 mb-2'>Explore Brands</h3>
            </div>
            <div  className='grid items-center grid-cols-2 gap-y-6 md:grid-cols-4 self-center p-2'>
                {brands.map(brand => (
                    <Link to={`brand/${brand.slug}`} key={brand.slug} className='flex justify-center p-2'>
                        <img src={brand.image} alt="" className='h-16' />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default BrandsCard