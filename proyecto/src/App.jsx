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

function App() {

  return (
    
    <BrowserRouter>
    <NavBarBts/>
    <Routes>
        <Route path='/' element={<ItemListContainer saludo='Bienvenidos a Latam Airlines!'/>}/>
        <Route path='/categories/:category' element={<ItemListContainer saludo='Estas en la categoria: '/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
