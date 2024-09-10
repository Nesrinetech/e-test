import React, { useContext } from 'react'
import './Navbar.css';
import { useState } from 'react';
import { ShopContext } from '../../Context/ShopContext'; 
import { Link } from 'react-router-dom';
import cart_icon from '../Assets/cart_icon.png'; 
import user from '../Assets/user.png'; 
import icon from '../Assets/icon.png'; 

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(ShopContext); // Get cartItems from context

  // Calculate the total number of items in the cart
  const totalItemsInCart = Object.values(cartItems).reduce((sum, current) => sum + current, 0);

  return (
    <div className='navbar'>
        <div className="nav-logo">
             <Link to="/">
            <p>SHOP.CO</p>
            </Link>
        </div>

        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        &#9776;
        </div>

         

        
        <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
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
        <Link to="/cart">
          <div className="cart-icon">
            <img src={cart_icon} alt="cart" />
            {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>} {/* Display item count */}
          </div>
        </Link>
          
            <img src={user} className="user-icon" alt=""/>
        </div>
    </div>
  )
}

export default Navbar