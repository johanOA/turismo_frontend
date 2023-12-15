import React from 'react';

const ServiceList = () => {
  const services = [
    { name: 'Servicio 1', price: '$20' },
    { name: 'Servicio 2', price: '$30' },
    { name: 'Servicio 3', price: '$25' },
  ];

  return (
    <div className="service-list">
      <h3 className="text-2xl font-semibold mb-4">Servicios incluidos</h3>
      <ul className="list-disc pl-6">
        {services.map((service, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{service.name}</span> - {service.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceList;