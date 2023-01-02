import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
const Cart = () => {
    const {cart, removeItem, clear, sumTotal, cartTotal} =useContext (CartContext)
if (cartTotal()===0) {
    return ( <div className="conteiner py-5">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="alert alert-danger text-center" role="alert">No se encontraron productos en el carrito</div>
<Link to= {"/"} className="btn btn-primary" >Volver a la página principal</Link>
      </div>
      </div>
      </div>

    )
}
    return (
    
<div className="conteiner py-5">
<h1 style={estilos.titulo}>Detalles de la compra</h1>

  <div className="row">
    <div className="col-md-12">
    <table class="table">
         
  <thead>
    <tr>
            <th  style={estilos.item} scope="col" className="text-end" colSpan={5}> <Link onClick={clear} >Vaciar carrito</Link>
                </th> 
    </tr>
    
    <tr > 
      <th scope="col">&nbsp;</th>
      <th style={estilos.item} scope="col">Producto</th>
      <th style={estilos.item} scope="col">Cantidad</th>
      <th style={estilos.item} scope="col">Precio</th>
      <th scope="col">&nbsp;</th>
    </tr>
  </thead>
  <tbody>
     {cart.map(item => (
        <tr key= {item.id} >
             <td><img src= {item.img} alt ={item.nombre} width={32}/>  </td> 
             <td> {item.nombre} </td> 
             <td>{item.quantity} </td> 
             <td>${item.quantity * item.precio} </td> 
             <td><Link onClick={() => {removeItem(item.id)}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="white" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
 </svg> </Link></td> 


   </tr>
   ))}

  <tr>
<td colSpan={2}>&nbsp;</td>
<td style={estilos.item} > <b>Suma Total </b></td>
<td  > <b>$ {sumTotal()} </b></td>
<td>&nbsp;</td>

   </tr>
  </tbody>

</table>
<Link to ={"/checkout"}><button className="btn btn-primary">Finalizar compra</button></Link>
<Link to ={"/"}><button className="btn btn-primary">Seguir comprando</button></Link>

    </div>

</div>


</div> )
} 
export default Cart 
const estilos = {titulo:{ textDecoration: "none",color: '#f1a012', fontFamily: "chewy",},
item: { color:'#f1a012', fontFamily: "chewy", textTransform: "uppercase"}}