import React, { useState } from 'react';
import StarRating from './StarRating';

const ReviewForm = ({ onAddReview }) => {
  // Estados para gestionar el nombre, reseña y calificación
  const [nombre, setNombre] = useState('');
  const [resena, setResena] = useState('');
  const [calificacion, setCalificacion] = useState(0);

  // Maneja el cambio en la calificación
  const handleRatingChange = (newRating) => {
    setCalificacion(newRating);
  };

  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Crea un objeto de nueva reseña
    const newReview = {
      user: nombre,
      rating: calificacion,
      comment: resena,
    };
    // Llama a la función proporcionada para agregar la nueva reseña
    onAddReview(newReview);
    // Limpia los campos del formulario después de agregar la reseña
    setNombre('');
    setResena('');
    setCalificacion(0);
  };

  // Devuelve el formulario de reseñas
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        {/* Campos de nombre (código previo) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resena">
            Reseña:
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="resena"
            name="resena"
            value={resena}
            onChange={(e) => setResena(e.target.value)}
          />
        </div>
        {/* Campos de calificación (código previo) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calificacion">
            Calificación:
          </label>
          {/* Incorpora el componente StarRating para seleccionar la calificación */}
          <StarRating rating={calificacion} onRatingChange={handleRatingChange} />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar Reseña
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
