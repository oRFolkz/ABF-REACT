import React from 'react'
import Slider from 'react-slick'
import { MainBanner,  WhiteFade } from './styles.ts'

import BannerImg2 from '../imgs/locationImgs/IMG2.png'
import BannerImg9 from '../imgs/locationImgs/IMG9.png'
import BannerImg12 from '../imgs/locationImgs/IMG12.png'
import BannerImg15 from '../imgs/locationImgs/IMG15.png'

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: true,
        speed: 1000,
        fade: true
    };
    return (
        <MainBanner className="slider-container">
            <Slider {...settings} className="Slider">
                <img src={BannerImg9} alt="" />
                <img src={BannerImg12} alt="" />
                <img src={BannerImg15} alt="" />
                <img src={BannerImg2} alt="" />
            </Slider>
            <WhiteFade />
        </MainBanner>
    )
}

export default Banner