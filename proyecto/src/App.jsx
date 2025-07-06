import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from "./components/ItemListContainer"
import './css/Navbar.css'
import NavBarBts from './components/navbarbts';

function App() {

  return (
    <>
    <NavBarBts/>
    <ItemListContainer saludo='Bienvenidos a Latam Airlines!'/>
    </>
  )
}

export default App
