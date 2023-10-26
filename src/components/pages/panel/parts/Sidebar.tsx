import {ArrowLeft, List } from '@phosphor-icons/react';
import React, { useState } from 'react';

const Sidebar = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Función para alternar el estado del sidebar
  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <aside className={`bg-gray-800 p-5 left-0 ${sidebarExpanded ? 'w-1/5' : 'w-16'}`}>
        {sidebarExpanded?
        <ul className="space-y-4">
        <li>
          <a href="#" className="text-white hover:text-gray-400">Inicio</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-400">Perfil</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-400">Configuración</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-400">Salir</a>
        </li>
        <ArrowLeft className=" text-white text-3xl" onClick={toggleSidebar} /> 
              </ul>
      :
      <List className=" text-white text-3xl" onClick={toggleSidebar} /> 
        }
    </aside>
  );
};

export default Sidebar;
