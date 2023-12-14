import React from 'react';
import image1 from './../../assets/PrincipalPage1.jpg'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images = [
    image1,
    'image2.jpg',
    'image3.jpg',
    // Agrega más rutas de imágenes según sea necesario
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
            {/* Miniaturas de las imágenes */}
            <div className="flex justify-center mt-2">
              {images.map((thumbnail, thumbIndex) => (
                <div key={thumbIndex} className="w-6 h-6 mx-1 cursor-pointer">
                  <img
                    src={thumbnail}
                    alt={`Thumbnail ${thumbIndex + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
