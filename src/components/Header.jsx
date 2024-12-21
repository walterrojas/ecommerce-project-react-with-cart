import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const { items } = useCart();

  return (
    <header>
      <nav className="navbar">
        <div className="container navbar-content">
          <Link to="/" className="link-unstyled">
            <h1>E-Shop</h1>
          </Link>

          <div className="navbar-actions">
          <form onSubmit={() => {}} className="search-container">
              <input
                type="search"
                placeholder="Search products..."
                className="input search-input"
              />
              <Search className="search-icon" />
            </form>
            
            <Link to="/cart" className="link-unstyled">
              <div className="cart-icon-container">
                <ShoppingCart />
                {items.length > 0 && (
                  <span className="cart-badge">
                    {items.length}
                  </span>
                )}
              </div>
            </Link>
            
            {isAuthenticated ? (
              <button onClick={logout} className="btn btn-primary">Logout</button>
            ) : (
              <Link to="/login" className="link-unstyled">
                <User />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;