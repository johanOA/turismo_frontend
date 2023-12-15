import React from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/willys.jpg';
import image2 from '../../assets/_JGM7388.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RelatedPlacesCarousel = () => {
  const relatedPlaces = [
    { name: 'Miradores', image: image1 },
    { name: 'Lugar 2', image: image2 },
    { name: 'Lugar 3', image: 'place3.jpg' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="related-places-carousel">
      <h3 className="text-2xl font-semibold mb-4">Otros lugares que podrían interesarte</h3>
      <Slider {...settings}>
        {relatedPlaces.map((place, index) => (
          <div key={index} className="mx-2">
            <img src={image1} alt={place.name} className="w-full h-32 object-cover rounded" />
            <p className="text-center mt-2">{place.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default RelatedPlacesCarousel;