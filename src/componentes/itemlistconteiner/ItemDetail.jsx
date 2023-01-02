import React, { useContext } from 'react';
import ItemCount from '../itemCount';
import { CartContext } from '../context/CartContext';
function ItemDetail({item}) {
  const {addItem}= useContext (CartContext);
  const onAdd = (quantity) => {
    addItem (item, quantity);
  }
  return (
    <div className='row'>
    <div className="col-md-6 offset-md-3 text-center">
<img style={stilos.img} src={item.img} className= {"img-fluid"} alt= {item.nombre}/>
<h2>{item.nombre}</h2>
<p>Talle: {item.talle}</p>
<p>Precio: {item.precio}</p>
    </div>
    
    <ItemCount stock={item.stock} onAdd ={onAdd}/>

    </div>
  )
}

export default ItemDetail
const stilos = {img:{heigt: 150,
    width:200, }}