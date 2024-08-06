import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


  const Carousel2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };
  return (
    <div className='mb-10 w-full mt-16'>
       <Slider {...settings}>
            <div>
                <img src="https://cdn.midjourney.com/873b60f7-f026-40f9-b2d7-184e981ee1f5/0_3.jpeg" alt="Slide 1" className="w-full " style={{height:'550px'}}/>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/4078093/pexels-photo-4078093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 2" className="w-full " style={{height:'550px'}}/>
            </div>
            <div>
                <img src="https://cdn.midjourney.com/e0dba42d-84bc-45e6-acca-bbaf8f817371/0_1.jpeg" alt="Slide 3"className="w-full " style={{height:'550px'}} />
            </div>
            <div>
                <img src="https://cdn.midjourney.com/5b0cec06-2f37-4828-8602-316f6dbd0eb6/0_0.jpeg" alt="Slide 4"className="w-full " style={{height:'550px'}} />
            </div>
        </Slider>
    </div>
  )
}

export default Carousel2

