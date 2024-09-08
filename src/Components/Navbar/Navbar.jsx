import React from 'react'
import './Navbar.css';

 
import cart_icon from '../Assets/cart_icon.png'; 
import user from '../Assets/user.png'; 
import icon from '../Assets/icon.png'; 

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
             
            <p>SHOP.CO</p>
        </div>
        <ul className="nav-menu">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
        </ul>

        <div className="search-bar-container">
            <input 
            type="text"
            placeholder="Search for products..."
            className="text-bar"
             
            
            />

        <div className="icon">
         <img src={icon} alt='icon'/>
      </div>

        </div>
        <div className="nav-login-cart">
             
            <img src={cart_icon} alt=""/>
            <img src={user} className="user-icon" alt=""/>
        </div>
    </div>
  )
}

export default Navbar