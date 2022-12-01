import React from 'react';
import CartWidget from './CartWidget';
import logo from "../../logo.png"
function Navbar() {
  return (
    <header>
        <img src= {logo} alt="tiendamisol" />
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
    </header>
  )
}

export default Navbar