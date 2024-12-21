import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Aun no has agregado productos.</h2>
        <Link to="/products" className="link-unstyled">
          <button className="btn btn-primary">Seguir comprando</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Productos seleccionado:</h2>
      
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-image"
          />
          
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p className="cart-item-price">${item.price}</p>
          </div>
          
          <div className="cart-quantity-controls">
            <button
              className="btn"
              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
            >
              <Minus size={16} />
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button
            className="btn remove-button"
            onClick={() => removeFromCart(item.id)}
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      
      <div className="cart-summary">
        <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
        <Link to="/checkout" className="link-unstyled">
          <button className="btn btn-primary">Finalizar Pedido</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;