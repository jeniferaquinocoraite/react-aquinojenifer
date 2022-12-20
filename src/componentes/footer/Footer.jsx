import React from 'react';
import logoface from '../../assets/logoface.png'
import logoinstagram from '../../assets/logoinstagram.png'
import logotwitter from "../../assets/logotwitter.png"
export const Footer =() =>{
  return (
    <div style= {stilos.conteiner} >
	<h4 style = {stilos.mensaje}>Seguinos en nuestras redes sociales</h4>
	<a  href="https://www.instagram.com/mi_sol_ropainfantil"> <img style = {stilos.img} src= {logoinstagram} alt= "instagram"></img></a>	
    <a  href="https://www.facebook.com/tiendamisoljujuy"><img style = {stilos.img} src= {logoface} alt= "facebook"></img></a>
    <a  href="https://twitter.com/MiSolJujuy"><img style = {stilos.img} src= {logotwitter} alt= "twitter"></img></a>
    </div> )
}
const stilos ={ img: {
    boxSizing: 'border-box',
    marginLeft: 400,
    width: 30,
    height: 25,},
conteiner: {backgroundColor: '#f1a012',
height: 75,
textAling: 'center',
},
mensaje:{ fontFamily: 'Chewy',
color: '#fff',
marginLeft: '40%' }

}