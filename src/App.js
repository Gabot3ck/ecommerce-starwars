import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import CartContext from './contexts/CartContext';
import { initializeApp } from "firebase/app";
import Footer from './components/Footer';
import Error404 from './components/Error404';



export default function App() {

  initializeApp({
    apiKey: "AIzaSyCD7O6Ds-wWxzbuwWU1eiIS5pR1Pdbe1rE",
    authDomain: "star-wars-store-dd1b6.firebaseapp.com",
    projectId: "star-wars-store-dd1b6",
    storageBucket: "star-wars-store-dd1b6.appspot.com",
    messagingSenderId: "740289420345",
    appId: "1:740289420345:web:62acd7320e477b189b81e8"
  });

  return (<>
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:id' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </CartContext>
    <Footer/>
  </>)
}
