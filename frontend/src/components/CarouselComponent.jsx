import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

function CarouselComponent({ carouselItems }) {
    const navigate = useNavigate()
    const handleClick = (d, e) => {
        let item = carouselItems[d]
        if (item.redirect_url) {
            navigate(item.redirect_url)
        }
    }
    return (
        <div className='px-0  '>
            <Carousel
                autoPlay emulateTouch infiniteLoop
                onClickItem={handleClick}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                stopOnHover={false}
                interval={2500}
            >
                {carouselItems.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.image} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselComponent