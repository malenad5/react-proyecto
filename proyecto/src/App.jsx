import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import './css/Navbar.css'
import './css/card.css'
import './css/detalle.css'
import NavBarBts from './components/navbarbts';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout.jsx';



function App() {

  return (
    
    <BrowserRouter>
    <CartProvider>
    <NavBarBts/>
    <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenidos a Latam Airlines!'/>}/>
        <Route path='/categories/:category' element={<ItemListContainer saludo='Estas en la categoria: '/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/checkout' element={<Checkout />} />

    </Routes>
    </CartProvider>
  </BrowserRouter>
  )
}

export default App
