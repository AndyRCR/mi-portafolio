import React, { useState } from 'react'
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Carousel.css'

const projects = [
  {name: "La Tienda Pe '", image: 'https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/banners/tiendapebanner.jpg'},
  {name: "Weather Admin Panel", image: 'https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/banners/weatherbanner.jpg'},
  {name: "Foxbel Music Player", image: 'https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/banners/foxbelbanner.jpg'},
  {name: "Peko Cinema", image: 'https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/banners/pekobanner.jpg'},
  {name: "Untels Landing Page", image: 'https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/banners/untelsbanner.png'}
]

function SampleNextArrow({ onClick }) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}

const Carousel = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <div></div>,
          prevArrow: <div></div>,
        }
      }]
  };

  return (
    <div className="sliderContainer">
      <div className="slider">
        <Slider {...settings}>
          {
            projects.map((el, index) => (
              <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                <img src={el.image} alt="" />
                <h3>{el.name}</h3>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Carousel