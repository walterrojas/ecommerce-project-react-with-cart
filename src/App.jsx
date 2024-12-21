// import {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import Login from './components/Login'
import Footer from './components/Footer'
// import Button from './components/Button'
// import Product from './components/Product'
import Navbar from './components/Navbar';
// import Counter from './components/Counter';
// import CounterWithUseEffect from './components/CounterWithUseEffect';
// import Window from './components/Window'
// import PasswordField from './components/PasswordField'
// import CounterWithUseMemo from './components/CounterWithUseMemo'
// import CounterWithUseCallback from './components/CounterWithUseCallback';

function App() {
  // const [valor, setvalor] = useState(1);
  // const handleIncrement = () => setvalor(valor + 1);

  // const handleClick = (id) => {
  //   alert('El boton con id ' + id + ' fue clickeado')
  // }
   const navbarMenus = [
    {id:1, path:"/", name:"product list"},
    {id:2, path:"/cart", name:"cart"},
    {id:3, path:"/login", name:"login"},
  ];

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Header />
          <main className="container">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />}/>
          </Routes>
          </main>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

