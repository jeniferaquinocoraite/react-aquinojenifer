import './App.css';
import ItemListConteiner from './componentes/itemlistconteiner/ItemListConteiner';
import Navbar from './componentes/navbar/Navbar';

function App() {
  return (
    <div >
    <Navbar/>
    <ItemListConteiner nombre ={ "Jenifer"} />
    </div>
  );
}

export default App;
