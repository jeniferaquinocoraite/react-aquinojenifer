import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from "../../logo.png"
function Navbar() {
  return (
    <header  style={style.conteiner}>
    <Link to ={"/"}>    <img style={style.imagenes} src= {logo} alt="tiendamisol" /> </Link>
    <div>
<ul>
  <li style = {style.lista} >
    <NavLink  style={style.categoria}  to={"categoria/sobrenosotros"}>Sobre Nosotros</NavLink>
  </li>
  <li style = {style.lista}  >
    <NavLink  style={style.categoria} to={"categoria/nenas"}>Nenas</NavLink>
  </li>
  <li style = {style.lista}  >
    <NavLink style={style.categoria} to={"categoria/varones"}>Varones</NavLink>
  </li>

</ul>
    </div>

    <CartWidget/>

    </header>
  )
}


export default Navbar
const style = {
  conteiner:{ backgroundColor:'#f1a012',
    display: 'flex',
    width:'100%',
  height: 120,
 

},
lista: {textDecoration: 'none',
display: 'inline',
listStyle:'none', marginTop: 100,},
imagenes: {
  margin: 10,
  width: 160,
height: 100,
},
categoria: { 

  textDecoration:'none',
  display: 'inline',
  fontSize: 30,
  color: '#fff',
  fontFamily: 'Chewy',
  textTransform: 'uppercase',
  width:'50%',  
marginBottom:300,
padding: 100,


  
},
titulo:{
  color: '#fff',
    fontFamily: 'Chewy',
  textTransform: 'uppercase',
  marginBottom: 100,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: 1400,
  margin: 100,

}
}