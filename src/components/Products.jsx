import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';

const PRODUCT_LIST = [
  {
    id: '1',
    name: 'Auriculares Premium',
    price: 100.50,
    description: 'Audifonos inalambricos de alta calidad con cancelacion de ruido externo',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Men'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 200.50,
    description: 'Reloj inteligente con las ultimas caracteristicas incluyendo monitoreo de salud',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    category: 'Women'
  },
  {
    id: '3',
    name: 'Mochila Escolar',
    price: 70.50,
    description: 'Mochila escolar duradera y resistente',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    category: 'Kids'
  },
  {
    id: '4',
    name: 'Auriculares Deportivos',
    price: 150.50,
    description: 'Auriculares deportivos para escuchar tu musica en alta calidad',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Men'
  },
  {
    id: '5',
    name: 'Watch Deportivo',
    price: 300.50,
    description: 'Creado para acompañarte en tus ejercicios asi como para monitorear tus pasos recorridos por dia y nivel caridaco',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    category: 'Kids'
  },
  {
    id: '6',
    name: 'Porta laptop',
    price: 50.50,
    description: 'Modelo ejecutivo y candado de seguridad',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    category: 'Women'
  }
];

function Products() {
  const [category, setCategory] = useState('all');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return PRODUCT_LIST.filter(product => {
      const matchesCategory = category === 'all' || 
        product.category.toLowerCase() === category.toLowerCase();

      return matchesCategory;
    });
  }, [category]);

  return (
    <div className="products-container">
      <div className="filter-container">
        <select
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">Todos los productos</option>
          <option value="men">Hombres</option>
          <option value="women">Damas</option>
          <option value="kids">Niños</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="card product-card">
              <img src={product.image} alt={product.name} />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;