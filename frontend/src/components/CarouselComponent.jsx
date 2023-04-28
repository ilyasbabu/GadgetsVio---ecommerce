import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent({ carouselItems }) {
    const testo = (d, e) => {
    }
    return (
        <div className='px-0  '>
            <Carousel
                autoPlay emulateTouch infiniteLoop
                onClickItem={testo}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                stopOnHover={false}
                interval={2500}
            >
                {carouselItems.map(item => (
                    <div>
                        <img src={item} alt="" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselComponent