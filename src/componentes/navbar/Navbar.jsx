import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div>
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link" href="#">Sobre Nosotros</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Nenas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Varones</a>
  </li>

</ul>
    <CartWidget/>
    </div>
  )
}

export default Navbar