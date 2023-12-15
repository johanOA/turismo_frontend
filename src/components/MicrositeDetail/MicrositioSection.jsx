import React from 'react';

const MicrositioSection = ({
 nombreMicrositio,
 descripcion,
 productos,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-2">
      <h2 className="text-4xl font-semibold mb-1 text-gray-800">{nombreMicrositio}</h2>
      <p className="text-gray-600 leading-relaxed mb-2">{descripcion}</p>

      {/* Productos ofrecidos */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2 text-blue-600">Productos ofrecidos</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-gray-100 p-4 rounded-md">
              <ul className="list-disc list-inside">
                <li className="text-gray-800">{producto.nombre}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicrositioSection;
