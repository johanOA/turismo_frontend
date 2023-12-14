import React from 'react';

const ReviewsSection = () => {
  const reviews = [
    { user: 'Usuario1', rating: 5, comment: 'Excelente servicio, lo recomiendo.' },
    { user: 'Usuario2', rating: 4, comment: 'Buena experiencia, pero podría mejorar en algunos aspectos.' },
    // Agrega más reseñas según sea necesario
  ];

  return (
    <div className="reviews-section">
      <h3 className="text-2xl font-semibold mb-4">Reseñas</h3>
      <div className="divide-y divide-gray-300">
        {reviews.map((review, index) => (
          <div key={index} className="py-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">{review.user}</span>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M12 2c-.3 0-.5.1-.7.3l-4.5 5.2-5.8.8c-.4.1-.8.7-.7 1.2s.7.8 1.2.7l6.3-.9 2.7 6.3c.2.5.8.8 1.3.6.2-.1.4-.2.6-.2.3 0 .6.1.8.3.4.4.4 1 0 1.4l-4.5 4.8 1.2 5.6c.1.5-.2 1.1-.7 1.2-.1 0-.1.1-.2.1-.3.1-.6.1-.8-.2l-5.3-3.5-5.3 3.5c-.3.2-.6.3-.9.2-.5-.1-.8-.7-.7-1.2l1.2-5.7-4.5-4.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.2 5.7-5.3 3.5c-.4.2-.8.1-1.1-.2s-.5-.7-.5-1.1l.9-5.3-5.8-5.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l6 6c.3.3.8.4 1.2.2.2-.1.4-.2.6-.2.2 0 .4.1.6.2l5.7-6.2 5.6 2.8c.5.2 1.1 0 1.3-.5.2-.5 0-1.1-.5-1.3l-5.2-2.6z" />
                  </svg>
                ))}
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      {/* Formulario para añadir una reseña */}
      <div className="mt-4">
        <h4 className="text-xl font-semibold mb-2">Añadir una reseña</h4>
        {/* Aquí iría el formulario de reseñas */}
      </div>
    </div>
  );
};

export default ReviewsSection;
