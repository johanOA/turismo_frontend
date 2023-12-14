import React from 'react';
import ImageCarousel from './ImageCarousel';
import ServiceList from './ServiceList';
import RelatedPlacesCarousel from './RelatedPlacesCarousel';
import ReviewsSection from './ReviewsSection';

const PlaceDetailPage = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <div className="flex flex-wrap -mx-4">
        {/* Carrusel de imágenes */}
        <div className="w-full lg:w-1/2 lg:pr-4 mb-8">
          <ImageCarousel />
        </div>
        {/* Descripción general */}
        <div className="w-full lg:w-1/2 lg:pl-4 mb-8">
          <h2 className="text-4xl font-semibold mb-4">Nombre del lugar</h2>
          <p className="text-gray-700 leading-relaxed">
            Descripción general del lugar. Puedes incluir detalles sobre el emprendimiento aquí.
          </p>
        </div>
      </div>

      {/* Lista de servicios */}
      <div className="mb-8">
        <ServiceList />
      </div>

      {/* Carrusel de lugares relacionados */}
      <div className="mb-8">
        <RelatedPlacesCarousel />
      </div>

      {/* Sección de reseñas */}
      <div>
        <ReviewsSection />
      </div>
    </div>
  );
};

export default PlaceDetailPage;
