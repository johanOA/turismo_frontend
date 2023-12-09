import React, { useState } from 'react';

interface Microsite {
  id: number;
  name: string;
  creator: string;
  date: string;
  status: 'pendiente' | 'rechazado' | 'aprobado';
}

const ITEMS_PER_PAGE = 3;

const ApprovalPanel: React.FC = () => {
  const [microsites, setMicrosites] = useState<Microsite[]>([
    { id: 1, name: 'Micrositio 1', creator: 'Usuario1', date: '01/01/2023', status: 'pendiente' },
    { id: 2, name: 'Micrositio 2', creator: 'Usuario2', date: '02/01/2023', status: 'rechazado' },
    { id: 3, name: 'Micrositio 3', creator: 'Usuario3', date: '02/01/2023', status: 'aprobado' },
    { id: 4, name: 'Micrositio 4', creator: 'Usuario4', date: '02/01/2023', status: 'aprobado' },
    { id: 5, name: 'Micrositio 5', creator: 'Usuario5', date: '02/01/2023', status: 'aprobado' },
    { id: 6, name: 'Micrositio 6', creator: 'Usuario6', date: '02/01/2023', status: 'aprobado' },
    // Agregar más micrositios según sea necesario
  ]);

  const [selectedMicrosite, setSelectedMicrosite] = useState<Microsite | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<'pendiente' | 'rechazado' | 'aprobado' | 'todos'>('todos');

  const totalPages = Math.ceil(microsites.length / ITEMS_PER_PAGE);

  const handleApprove = (microsite: Microsite) => {
    const updatedMicrosites = microsites.map((m) =>
      m.id === microsite.id ? { ...m, status: 'aprobado' } : m
    );
    setMicrosites(updatedMicrosites);
    setSelectedMicrosite(null);
  };

  const handleReject = (microsite: Microsite) => {
    const updatedMicrosites = microsites.map((m) =>
      m.id === microsite.id ? { ...m, status: 'rechazado' } : m
    );
    setMicrosites(updatedMicrosites);
    setSelectedMicrosite(null);
  };

  const handleViewDetails = (microsite: Microsite) => {
    setSelectedMicrosite(microsite);
  };

  const handleCloseModal = () => {
    setSelectedMicrosite(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newFilter: 'pendiente' | 'rechazado' | 'aprobado' | 'todos') => {
    setFilter(newFilter);
    setCurrentPage(1); // Resetear la página actual al cambiar el filtro
  };

  const getStatusColor = (status: Microsite['status']): string => {
    switch (status) {
      case 'pendiente':
        return 'text-yellow-500';
      case 'rechazado':
        return 'text-red-500';
      case 'aprobado':
        return 'text-green-500';
      default:
        return '';
    }
  };

  const filteredMicrosites =
    filter === 'todos' ? microsites : microsites.filter((m) => m.status === filter);
  const paginatedMicrosites = filteredMicrosites.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-full mx-auto bg-white p-8 rounded-md shadow-md">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Micrositios</h1>

      {/* Selector de filtro */}
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 font-semibold text-gray-800">
          Filtrar por Estado:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) =>
            handleFilterChange(e.target.value as 'pendiente' | 'rechazado' | 'aprobado' | 'todos')
          }
          className="p-2 border rounded-md"
        >
          <option value="todos">Todos</option>
          <option value="pendiente">Pendiente</option>
          <option value="rechazado">Rechazado</option>
          <option value="aprobado">Aprobado</option>
        </select>
      </div>

      {/* Lista de micrositios paginados */}
      <ul>
        {paginatedMicrosites.map((microsite) => (
          <li
            key={microsite.id}
            className="mb-4 p-4 bg-white bg-opacity-80 rounded transition transform hover:scale-105"
          >
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-semibold text-gray-800">{microsite.name}</span>
              <div className="flex space-x-2">
                <span className={`text-sm font-semibold ${getStatusColor(microsite.status)}`}>
                  Estado: {microsite.status.charAt(0).toUpperCase() + microsite.status.slice(1)}
                </span>
                <div className="flex space-x-2">
                  {(microsite.status === 'pendiente' || microsite.status === 'rechazado') && (
                    <>
                      <button
                        onClick={() => handleApprove(microsite)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300"
                      >
                        Aprobar
                      </button>
                    </>
                  )}
                  {(microsite.status === 'pendiente' || microsite.status === 'rechazado') && (
                    <button
                      onClick={() => handleReject(microsite)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                    >
                      Rechazar
                    </button>
                  )}
                  <button
                    onClick={() => handleViewDetails(microsite)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Creado por {microsite.creator} el {microsite.date}
            </div>
          </li>
        ))}
      </ul>

      {/* Paginación */}
      <div className="flex justify-between items-center mt-4">
        <div>
          Página {currentPage} de {totalPages}
        </div>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`bg-gray-300 px-3 py-1 rounded ${
                page === currentPage ? 'bg-gray-500' : ''
              } hover:bg-gray-400 transition duration-300`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Detalles del micrositio seleccionado */}
      {selectedMicrosite && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {selectedMicrosite.name} Detalles
            </h2>
            <p className={`text-gray-800 mb-2 ${getStatusColor(selectedMicrosite.status)}`}>
              Estado Actual: {selectedMicrosite.status}
            </p>
            <p>Nombre del Usuario: {selectedMicrosite.creator}</p>
            <p>Fecha de Creación: {selectedMicrosite.date}</p>
            <div className="flex space-x-2 mt-4">
              {(selectedMicrosite.status === 'pendiente' || selectedMicrosite.status === 'rechazado') && (
                <>
                  <button
                    onClick={() => handleApprove(selectedMicrosite)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300"
                  >
                    Aprobar
                  </button>
                </>
              )}
              {(selectedMicrosite.status === 'pendiente' || selectedMicrosite.status === 'rechazado') && (
                <button
                  onClick={() => handleReject(selectedMicrosite)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                >
                  Rechazar
                </button>
              )}
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovalPanel;
