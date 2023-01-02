import React from 'react'
import { Link } from 'react-router-dom'
function ItemList({items}) {
  return (
    (
    
        <div>
{
items.map (item =>
  

<div className="col-md-4 mb-3" key= {item.id}>
<div className="card text-center"  >
<Link to= {"/item/" + item.id} className="card-title">{item.nombre} 
</Link> 

<img style= {stilos.img} src = {item.img} alt="..." className="card-img-top"  />
    <p className="card-text">Precio: $ {item.precio}</p>
    <Link to= {'/item/'+ item.id} class="btn btn-primary">Ver más</Link>


  </div>
</div>


)
      }
  </div>
  
  
  
  
  )
  )
}


export default ItemList
const stilos = {img:{ heigt: 350,
    width:400, justifyContent: 'center', margin:15, }}
