import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets/PrincipalPage1.jpg';
import image2 from '../../assets/PrincipalPage2.jpg';
import image3 from '../../assets/PrincipalPage3.jpg';


const ImageCarousel = () => {
  // Array de rutas de imágenes
  const images = [image1, image2, image3];

  // Estado para mantener el índice de la imagen actual en el carrusel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Referencia al componente Slider de react-slick
  const sliderRef = useRef(null);

  // Configuración del componente Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

 
  const handleThumbnailClick = (thumbIndex) => {
    setCurrentSlide(thumbIndex);
    sliderRef.current.slickGoTo(thumbIndex);
  };

  return (
    <div className="image-carousel relative">
      {/* Carrusel principal de imágenes */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover rounded-md" />
          </div>
        ))}
      </Slider>

      {/* Miniaturas de las imágenes */}
      <div className="flex justify-center mt-4">
        {/* Mapea el array de miniaturas para renderizar cada miniatura */}
        {images.map((thumbnail, thumbIndex) => (
          <div
            key={thumbIndex}
          // Aplica clases condicionales para resaltar la miniatura activa
            className={`w-8 h-8 mx-2 cursor-pointer overflow-hidden ${
              thumbIndex === currentSlide ? 'border-2 border-blue-500' : 'border'
            }`}
          // Asigna la función de manejo de clic al hacer clic en la miniatura
            onClick={() => handleThumbnailClick(thumbIndex)}
          >
          {/* Renderiza la miniatura con efectos visuales */}
            <img
              src={thumbnail}
              alt={`Thumbnail ${thumbIndex + 1}`}
              className="w-full h-full object-cover rounded-md transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
