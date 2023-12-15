import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';
import ReviewForm from './ReviewForm';

const ReviewsSection = () => {
  // Estado para almacenar las reseñas
  const [reviews, setReviews] = useState(() => {
    // Recupera las reseñas almacenadas en localStorage o utiliza un array vacío si no hay ninguna
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    return storedReviews;
  });

  // Función para manejar la adición de una nueva reseña
  const addReview = (newReview) => {
    // Actualiza el estado y almacena las reseñas en localStorage
    setReviews((prevReviews) => {
      const updatedReviews = [...prevReviews, newReview];
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));
      return updatedReviews;
    });
  };

  // Limpia el almacenamiento de reseñas en localStorage al desmontar el componente
  useEffect(() => {
    return () => localStorage.removeItem('reviews');
  }, []);

  return (
    <div className="reviews-section">
      {/* Encabezado de la sección de reseñas */}
<h3 className="text-2xl font-semibold mb-4">Reseñas</h3>

{/* Lista de reseñas */}
<div className="divide-y divide-gray-300">
  {/* Mapeo de cada reseña en la lista de reseñas */}
  {reviews.map((review, index) => (
    <div key={index} className="py-4">
      {/* Información del usuario y calificación */}
      <div className="flex items-center mb-2">
        <span className="font-semibold mr-2">{review.user}</span>
        {/* Representación visual de la calificación mediante estrellas */}
        <div className="flex items-center">
          {[...Array(review.rating)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="16" height="16">
              <path d="M12 2c-.3 0-.5.1-.7.3l-4.5 5.2-5.8.8c-.4.1-.8.7-.7 1.2s.7.8 1.2.7l6.3-.9 2.7 6.3c.2.5.8.8 1.3.6.2-.1.4-.2.6-.2.3 0 .6.1.8.3.4.4.4 1 0 1.4l-4.5 4.8 1.2 5.6c.1.5-.2 1.1-.7 1.2-.1 0-.1.1-.2.1-.3.1-.6.1-.8-.2l-5.3-3.5-5.3 3.5c-.3.2-.6.3-.9.2-.5-.1-.8-.7-.7-1.2l1.2-5.7-4.5-4.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.2 5.7-5.3 3.5c-.4.2-.8.1-1.1-.2s-.5-.7-.5-1.1l.9-5.3-5.8-5.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l6 6c.3.3.8.4 1.2.2.2-.1.4-.2.6-.2.2 0 .4.1.6.2l5.7-6.2 5.6 2.8c.5.2 1.1 0 1.3-.5.2-.5 0-1.1-.5-1.3l-5.2-2.6z" />
            </svg>
          ))}
        </div>
      </div>
      {/* Comentario de la reseña */}
      <p>{review.comment}</p>
    </div>
  ))}
      </div>

      {/* Formulario para añadir una reseña */}
      <ReviewForm onAddReview={addReview} />
    </div>
  );
};

export default ReviewsSection;
