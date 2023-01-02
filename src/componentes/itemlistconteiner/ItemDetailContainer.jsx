import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrayDeProductos from "../json/arraydeproductos";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem ]=useState ({});
    const {id} = useParams ();
   useEffect (()=>{
   const promesa = new Promise ((resolve)=>{
   setTimeout (()=> {
    resolve (ArrayDeProductos.find(item => item.id === parseInt (id)));
   }, );
   
   
   });
   promesa.then ((data)=>{
    setItem(data)
   })
    
},[id])

  return (
    <div >
    <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer
