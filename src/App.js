import './App.css'; 
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemListConteiner from './componentes/itemlistconteiner/ItemListConteiner';
import Navbar from './componentes/navbar/Navbar';
import Productos from './listaDeProductos';
import Error404 from './Error404';
import Item from './componentes/itemlistconteiner/Item';
import SobreNosotros from './componentes/sobrenosotros/SobreNosotros';
import { Footer } from './componentes/footer/Footer';

function App() {
  return (
          <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path ={"/"}element = {<Productos/>} />
      <Route path ={"/categoria/sobrenosotros"}element = {<SobreNosotros/>} />
      <Route path ={"*"}element = {<Error404/>} />
      <Route path ={"/categoria/:id"}element = {<Productos/>} />
      <Route path ={"/item/:id"}element = {<Item/>} />

    </Routes>
    <ItemListConteiner nombre ={ "Jenifer"} />
    <Footer/>

    </BrowserRouter>
  );
}

export default App;