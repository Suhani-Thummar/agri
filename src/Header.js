import React from 'react';
export default function Header(props) {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{zIndex:"99"}}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Pocket Array</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
          
          <li class="nav-item">
              <a class="nav-link" href="/vendorpage">vendor card</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cards">Cards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/productdetails">Product Detail</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/vendordetails">Vendor Detail</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/list">List</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/timer">Timer</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/timeCard">Time Card</a>
          </li>
            <li class="nav-item">
              <a class="nav-link"  href="/displaycart">DisplayCart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checkout">Checkout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About us">About us</a>
            </li>
            {/*<li class="nav-item">
              <a class="nav-link" href="/contect us">Contect us</a>
  </li>*/}
            <li class="nav-item">
              <a class="nav-link" href="/successorder">Success Order</a>
            </li>
            {/*<li class="nav-item">
              <a class="nav-link" href="/cardDes">Card Des</a>
  </li>*/}
            <li class="nav-item">
              <a class="nav-link" href="/Search">city search</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
