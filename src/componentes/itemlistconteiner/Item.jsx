import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import arraydeproductos from "../json/arraydeproductos.json"

const Item = () => {
    const [item, setItem ]=useState ({});
    const {id} = useParams ();
   useEffect (()=>{
   const promesa = new Promise ((resolve)=>{
   setTimeout (()=> {
    resolve (arraydeproductos.find(item => item.id === parseInt (id)));
   });
   
   
   });
   promesa.then ((data)=>{
    setItem(data)
   })
   
},[id])

  return (
    <div className='row'>
    <div className="col-md-6 offset-md-3 text-center">
<img src={item.img} className= {"img-fluid"} alt= {item.nombre}/>
<h2>{item.nombre}</h2>
<p>Talle: {item.talle}</p>
<p>Precio: {item.precio}</p>


    </div>
    
    
    </div>
  )
}

export default Item