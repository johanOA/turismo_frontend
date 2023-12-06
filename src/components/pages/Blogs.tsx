import { useState } from 'react';
import './../Styles/PagesTailwinds.css';

export default function Blogs() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('fecha');
    const [filterOption, setFilterOption] = useState('');

    
    // Blogs predefinidos
    const blogPosts = [
        {
            title: "Tendencias en Tecnología de Genova",
            description: "Explorando las últimas innovaciones en el mundo tech.",
            imageUrl: "/src/assets/tech-blog.png",
            author: "Juan Pérez",
            date: "12 de Noviembre, 2023",
            category: "Noticias",
            categoryColor: "bg-blue-200 text-blue-800"
        },
        {
            title: "Descubre la hermosa Naturaleza de Genova",
            description: "Un viaje fotográfico a través de paisajes impresionantes.",
            imageUrl: "/src/assets/nature-blog.png",
            author: "Ana Gómez",
            date: "05 de Noviembre, 2023",
            category: "Noticias",
            categoryColor: "bg-green-200 text-green-800"
        },
        {
            title: "Cocina Saludable, todo para disfrutar en Genova",
            description: "Recetas fáciles y nutritivas para el bienestar diario.",
            imageUrl: "/src/assets/food-blog.png",
            author: "Carlos Rodríguez",
            date: "20 de Octubre, 2023",
            category: "Tips de Viaje",
            categoryColor: "bg-red-200 text-red-800"
        },
        // ... más blogs
    ];

    // Función para convertir string de fecha a objeto Date
    const parseDate = (str: string): Date => {
        const [day, month, year] = str.split(" de ");
        return new Date(`${year}-${month}-${day}`);
    };

    // Función para filtrar y ordenar los blogs
    const getFilteredAndSortedPosts = () => {
        const filteredPosts = blogPosts.filter(post => 
            (filterOption === '' || post.category === filterOption) &&
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Ordenar por fecha
        if (sortOption === 'fecha') {
            filteredPosts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
        }

        return filteredPosts;
    };

    return (
        <div className='container-internal-pages p-4 md:p-12'>
            <div className="mb-8">
                <input 
                    type="text"
                    placeholder="Buscar en blogs..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-4 border border-gray-300 rounded-lg w-full md:w-2/3 mb-4 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-start items-center mt-4">
                    <p className="text-lg text-gray-700 mr-4">Resultados encontrados</p>
                    <select 
                        onChange={(e) => setSortOption(e.target.value)}
                        className="p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-30"
                    >
                        <option value="">Ordenar por</option>
                        <option value="fecha">Fecha</option>
                        {/* Otras opciones de ordenación si se requieren */}
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 pr-4 mb-4">
                    <div className="p-4 rounded-lg shadow" >
                        <h2 className="font-bold text-xl mb-3">Filtrar por</h2>
                        <select 
                            onChange={(e) => setFilterOption(e.target.value)}
                            className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Todas las Categorías</option>
                            <option value="Noticias">Noticias</option>
                            <option value="Tips de Viaje">Tips de Viaje</option>
                        </select>
                    </div>
                </div>
                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getFilteredAndSortedPosts().map((post, index) => (
                            <div key={index} className="bg-white rounded-lg shadow p-6">
                                <img className="w-full h-48 object-cover rounded-lg mb-4" src={post.imageUrl} alt={`Blog ${post.title}`} />
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.description}</p>
                                <div className="text-gray-500 text-sm mb-2">Por {post.author} - {post.date}</div>
                                <span className={`inline-block ${post.categoryColor} rounded-full px-3 py-1 text-sm font-bold`}>{post.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
}
