import { useCallback, useEffect, useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import axios from 'axios';

interface Detalle {
  imagen: string;
  titulo: string;
  banner: string;
  fotos: { url: string; descripcion: string }[];
  descripcion: string;
  incluye: string[];
}

interface Foto {
  url: string;
  descripcion: string;
}

const FotoCarrusel = ({ foto }: { foto: Foto }) => (
  <div>
    <img src={foto.url} alt={foto.descripcion} className="h-full w-full object-cover" />
    <p>{foto.descripcion}</p>
  </div>
);

const DetalleTuristico = ({ id }) => {

  const [detalle, setDetalle] = useState<Detalle | null>(null);

  const obtenerDetalle = useCallback(async () => {
   try {
     const respuesta = await axios.get(`https://tu-api.com/detalle/${id}`);
     setDetalle(respuesta.data);
   } catch (error) {
    console.error('Error al hacer la solicitud:', error);
    }
  }, [id]);

  useEffect(() => {
   obtenerDetalle();
  }, [obtenerDetalle]);

  const renderizarFotos = (fotos: Foto[] | null) => {
    if (fotos) {
      return fotos.map((foto) => <FotoCarrusel key={foto.url} foto={foto} />);
    }
    return null;
   };
   
 return (
 <div>
  <img src={detalle?.imagen} alt={detalle?.titulo} className="w-full h-64 object-cover" />
  <h1 className="text-2xl font-bold">{detalle?.titulo}</h1>
  <h2 className="text-xl">{detalle?.banner}</h2>
  <Carousel className="rounded-xl">
    {detalle?.fotos ? renderizarFotos(detalle.fotos) : null}
  </Carousel>

  <p>{detalle?.descripcion}</p>
  <ul>
      {detalle?.incluye.map((item, index) => (
      <li key={index}>{item}</li>
      ))} 
  </ul>
  <Carousel className="rounded-xl">
    {detalle?.fotos ? renderizarFotos(detalle.fotos) : null}
  </Carousel>
 </div>
 );
};

export default DetalleTuristico;