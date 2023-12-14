import React from 'react';
import ImageCarousel from './ImageCarousel';
import ServiceList from './ServiceList';
import RelatedPlacesCarousel from './RelatedPlacesCarousel';
import ReviewsSection from './Review/ReviewsSection';
import MicrositioSection from './MicrositioSection';

const PlaceDetailPage = () => {

  
  //Este puede servir para agregar los productos que ofrece el micro sitio
  //Array de productos
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' },
    { id: 4, nombre: 'Producto 1' },
    { id: 5, nombre: 'Producto 2' },
    { id: 6, nombre: 'Producto 3' },
  ];

  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <div className="flex flex-wrap -mx-4">

        {/* Carrusel de imágenes */}
        <div className="w-full lg:w-1/2 lg:pr-4 mb-8">
          <ImageCarousel />
        </div>

        {/* Descripción general, recibe nombre, descripcion y el array de productos*/}
        <div className="w-full lg:w-1/2 lg:pl-4 mb-4">
          {/* Sección del Micrositio */}
          <MicrositioSection
            nombreMicrositio="Nombre del Micrositio"
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, autem eos repellat blanditiis aliquid in, repellendus doloremque nobis ut quisquam nam consequuntur consequatur qui debitis. Ratione, maiores! In, soluta perferendis."
            productos={productos}
          />
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
      <div className="mb-8">
        <ReviewsSection />
      </div>
    </div>
  );
};

export default PlaceDetailPage;
