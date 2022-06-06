import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.jsx';

function App() {
  const onAdd = (count) => {
    alert(`Acabas de agregar ${count} productos a tu carrito de compras`)
  }

  return <>
    <NavBar />
    <ItemListContainer />
    <ItemCount initial={1} max={10} onAdd={onAdd}/>
  </>

}

export default App;
