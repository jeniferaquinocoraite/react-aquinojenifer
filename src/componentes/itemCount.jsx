import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const ItemCount = ({stock, onAdd }) => {
  const [count, setCount] = useState(1);
const [itemStock, setItemStock]= useState (stock);
const [vendido, setVendido] = useState (false);
const subtract = () => {
    if (count > 1) { 
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < itemStock) {
      setCount(count + 1);
    }
  }
  const addToCart =(quantity)=> {
    setVendido (true);
    setItemStock (itemStock- quantity);
    setCount(1);
    onAdd (quantity);
  
  }
  
  useEffect(() => {
setItemStock (stock);
  }, [stock]

  )
  return (
    
    <div className='container text-center'>
      <div className='row mb-3'>
        <div className='col-md-12'>
          <div className=' btn-group' role="group" aria-label ="Basic outlined example">
    <button type = "button" className='btn btn-outline-primary' onClick={subtract}>-</button>
    <button type = "button" className='btn btn-outline-primary' >{count}</button>
    <button type = "button" className='btn btn-outline-primary'  onClick={add}>+</button>
    <div> {vendido ? <Link to={"/cart"}  className= "btn btn-outline-primary">Terminar mi compra </Link>:
    <button type = "button" className='btn btn-outline-primary'  onClick={()=>{addToCart (count)}}>Agregar al carrito
     </button>}
    </div>
    </div>
    </div>
    </div>
  </div>
  )
};


export default ItemCount