import CartContextProvider from './componentes/context/CartContext';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './componentes/navbar/Navbar';
import ItemListContainer from './componentes/itemlistconteiner/ItemListContainer';
import Error404 from './Error404';
import ItemDetail from './componentes/itemlistconteiner/ItemDetailContainer';
import { Footer } from './componentes/footer/Footer';
import Cart from './componentes/Cart';
import SobreNosotras from './componentes/sobrenosotros/SobreNosotros';
import Checkout from './componentes/Checkout';
import Cierre from './componentes/Cierre';

function App() {
  return ( 
    <CartContextProvider>

    <div>
    <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path ={"*"}element = {<Error404/>} />
      <Route path ={"/"}element = {<ItemListContainer/>} />
      <Route path ={"/categoria/:id"}element = {<ItemListContainer/>} />
      <Route path ={"/sobrenosotras"}element = {<SobreNosotras/>} />
      <Route path ={"/item/:id"}element = {<ItemDetail/>} />
      <Route path ={"/cart"}element = {<Cart/>} />
      <Route path ={"/checkout"}element = {<Checkout/>} />
      <Route path ={"/cierre/:id"}element = {<Cierre/>} />

    </Routes>
    <Footer/>

    </BrowserRouter>
    </div>
    </CartContextProvider>

  );
}

export default App;