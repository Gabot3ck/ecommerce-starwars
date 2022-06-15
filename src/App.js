import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Juguetes from './components/Juguetes';
import Juegos from './components/Juegos';
import Ropa from './components/Ropa';
import Peliculas from './components/Peliculas';
import Series from './components/Series';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';



function App() {
  return( <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/category/:id' element={<Juguetes />}/>
        <Route path='/category/:id' element={<Juegos />}/>
        <Route path='/category/:id' element={<Ropa />}/>
        <Route path='/category/:id' element={<Peliculas />}/>
        <Route path='/category/:id' element={<Series />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    
  </> )

}

export default App;
