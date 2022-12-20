import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arraydeproductos from "./componentes/json/arraydeproductos.json";
import { Link } from "react-router-dom";
const  Productos = ()=> {
  const [items, setItems] = useState ([]);
  const {id} = useParams();
  useEffect (()=>{
  
   
      const promesa =new Promise ((resolve)=>{
        setTimeout (()=>{
          resolve (id ? arraydeproductos.filter (item =>item.categoria === id) : arraydeproductos);
         },2000)
      })
promesa.then ((data)=>{
  setItems (data);   
})
    }, [id] );
   
      return (
    
        <div>
{
items.map (item =>
  

<div className="col-md-4 mb-3" key= {item.id}>
<div className="card text-center"  >
<Link to= {"/item/" + item.id} className="card-title">{item.nombre} 
</Link> 

<img style= {stilos.img} src = {item.img} alt="..." className="card-img-top"  />
    <p className="card-text">Talle:{item.talle}</p>
    <p className="card-text">Precio: $ {item.precio}</p>
    <Link to= {'/item/'+ item.id} class="btn btn-primary">Ver más</Link>


  </div>
</div>


)
      }
  </div>
  
  
  
  
  )
    } 
    
  export default Productos
  const stilos = {img:{heigt: 350,
    width:400, justifyContent: 'center', margin:15, }}