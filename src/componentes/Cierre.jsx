import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Cierre=()=>  {
const {id} = useParams();
  return (
    <div>
    <div className='conteiner py-5' >
        <div className='row' > 
        <div className='col-md-12 text-center'> 
        < div className=" alert alert-success">
        <h1>Gracias por tu compra</h1>
  <h4>Tu código de pedido es: {id} </h4>
  <p>Felicidades, con tu compra tenes $500 de regalo </p>
        </div >
        <Link to ={"/" }><span className="btn btn-warning" >Volver a la página principal</span></Link>
        </div>
        </div>
    </div>
    </div>
  )
}
export default Cierre