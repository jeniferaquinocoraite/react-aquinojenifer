import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { collection, getFirestore, addDoc, doc, updateDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
  const Checkout=()=> {
    const {cart, sumTotal, clear} =useContext (CartContext)
    const [nombre, setNombre]= useState ("");
    const [email, setEmail]= useState ("");
    const [telefono, setTelefono]= useState ("");
    const [orderId, setOrderId]= useState ("");
 const generarOrden =()=> {
    const fecha= new Date ();
    const order ={
        buyer: {name:nombre, email: email, phone: telefono},
        items: cart.map (item=> ({id: item.id,title:item.nombre, precio: item.precio, cantidad: item.quantity, preciototal: item.quantity * item.precio})),
        date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`,
        total: sumTotal(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc (ordersCollection, order).then((snapShot)=>{
      setOrderId (snapShot.id); 
      const orderDoc = doc(db, "orders", snapShot.id);
      updateDoc (orderDoc, {total: order.total - 500});
      clear();
    })
 }
  return (
    <div className='container' >
        <div className='row my-5'>
        <div className='col' >
        <h1 style={estilos.titulo}>Completa tus datos: </h1> 
        <form>
        <div className="mb-3">
    <label for ="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e)=>{setNombre(e.target.value)}} />
  </div>
  <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
    <input type= "email" className= "form-control"  aria-describedby="emailHelp"  placeholder="Ingrese su Email" onInput={(e)=>{setEmail(e.target.value)}}/>
    <div className="form-text">Nunca compartiremos tu información</div>
  </div>
  <div class="mb-3">
    <label htmlFor ="telefono" className= "form-label">Telefono </label>
    <input type="number" className="form-control"  placeholder="Ingrese su telefono" onInput={(e)=>{setTelefono(e.target.value)}}/>
  </div>


  <button type="button" onClick={generarOrden} className="btn btn-outline-warning">Enviar</button>
</form>
</div>
<div className='col'>
<h1 style={estilos.titulo}>Detalle de la compra</h1>

        <table class="table">
        <thead>
    <tr > 
      <th scope="col">&nbsp;</th>
      <th  style={estilos.item} scope="col">Product</th>
      <th  className="text-aling" style={estilos.item} scope="col">Cantidad</th>
      <th style={estilos.item} scope="col">Precio</th>
      <th scope="col">&nbsp;</th>
    </tr>

  </thead>

            <tbody>
            {cart.map(item => (
        <tr key= {item.id} >
             <td><img src= {item.img} alt ={item.nombre} width={32}/>  </td> 
             <td>{item.nombre}</td> 
             <td>{item.quantity}</td> 
             <td>${item.quantity * item.precio}</td> 
             <td colSpan={3}> <b> Total a pagar:</b></td>
             <td><b>{sumTotal()}</b> </td>
   </tr>
   ))}
            </tbody>
            </table>
            </div>
            </div>

<div className='row my5'>
  <div className='col text-center'>
    {orderId ? <Navigate to ={"/cierre/" + orderId } /> : ""}


</div>
  </div>

</div>

  ) 
} 

export default Checkout
const estilos = {titulo:{ textDecoration: "none",color: '#f1a012', fontFamily: "chewy",},
item: { color:'#f1a012', fontFamily: "chewy", textTransform: "uppercase"}}