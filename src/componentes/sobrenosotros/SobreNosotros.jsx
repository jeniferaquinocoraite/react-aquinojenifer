import React from 'react'
import gisel from '../../assets/gisel.jpg'
import jeni from '../../assets/jeni.jpg'
function SobreNosotras() {
  return (
<div>
<div >
<h2 style={stilos.nombre} >Nosotras</h2>
</div>
<div style={stilos.contenedor}>
<div style={stilos.nombre} > 
    <img  style= {stilos.img} src= {jeni} alt="jeni"/>
    <p style = {stilos.nombre}> Jenifer, co-fundadora de Tienda de ropa infantil "Mi Sol". Este emprendimiento surge con mi hermana, la idea es acercar a las mamás ropa de calidad y variedad para sus bebés y niños en todas las estaciones del año.</p>
    
 </div>
<div style={stilos.nombre}>
	<img style= {stilos.img} src = {gisel} alt="gisel"/>
    <p style= {stilos.nombre}> Carolina, co-fundadora de Tienda de ropa infantil "Mi Sol". Mamá de Bautista y Catalina. Como madre, creo necesario que la ropa de nuestros hijos, además de tener lindos diseños, debe cuidar su piel, por eso apostamos a productos 100% algodón de primera calidad.</p>
    
</div>
</div>
</div>

  )
}

export default SobreNosotras
const stilos = { nombre: {
fontFamily: 'chewy',
color: '#f1a012',

display: 'block',
textAlign: 'center',
padding: 25,},
contenedor: {
    display:'flex',
	flexDirection: 'row',
	justifyContent: 'center',

},
img: {
    width:150,
    height:200,
}
}