import React, { useEffect, useState } from 'react'

function Carousel1() {
    const no_arr = ['https://picsum.photos/500/500','https://picsum.photos/900/900','https://picsum.photos/400/900']
    const [item, setItem] = useState('')
    const runCarousel = () => {
        var index = 0;
        setInterval(() => {
            var arr_len = no_arr.length
            index = (index+1) % arr_len 
            setItem(no_arr[index])
            console.log(no_arr[index]);
        }, 3000);
    }
    useEffect(() => {
        runCarousel()
    }, [])
    return (
        <section className='w-full'>
            <div className='h-96 '>
                <img className='object-cover h-96 w-full' src={item} alt="" />
            </div>
        </section>
    )
}

export default Carousel1