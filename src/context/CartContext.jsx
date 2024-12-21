import React, { createContext, useContext, useState } from 'react';

// const Product = {
//     id: "",
//     name: "",
//     price: 0,
//     description: "",
//     image: "",
//     category: "",
// }

// const CartItem = {
//     id: "",
//     name: "",
//     price: 0,
//     description: "",
//     image: "",
//     category: "",
//     quantity: 0,
// }

// const CartContextType = {
//   items: [CartItem],
//   addToCart: (product) => {},
//   removeFromCart: (productId) => {},
//   updateQuantity: (productId, quantity) => {},
//   clearCart: () => {},
//   total: number,
// }

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems(current => {
      const existingItem = current.find(item => item.id === product.id);
      if (existingItem) {
        return current.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setItems(current => current.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setItems(current =>
      current.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};