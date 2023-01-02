import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrayDeProductos from "../json/arraydeproductos";
import ItemList from "./ItemList";
const  ItemListContainer = ()=> {
  const [loading, setLoading] = useState(true);

  const [items, setItems] = useState ([]);
  const {id} = useParams();
  useEffect (()=>{
  
   
      const promesa =new Promise ((resolve)=>{
        setTimeout (()=>{
          resolve (id ? ArrayDeProductos.filter (item =>item.categoria === id) : ArrayDeProductos);
         },2000)
      })
promesa.then ((data)=>{
  setItems (data);   
}

)

.catch(() => ('hubo un error, intente mas tarde'))
.finally(() => setLoading(false));

    }, [id] );
   
      return (
      
      <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList items={items} />
        
      )}
    </div>
  );
      
      
      
      
      
      
      
      
      
      
      
      
     
    } 
    
  export default ItemListContainer