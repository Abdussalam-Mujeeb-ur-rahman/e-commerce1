import React, {useContext, useState, useRef} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import navDropdown from '../Assets/dropdown.png'
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div>
      <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>TMP</p>
        </div>
        <img src={navDropdown} alt="nav-dropdown" className='nav-dropdown' onClick={dropdown_toggle} />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr/> : ""}</li>
          <li onClick={()=>{setMenu("men")}}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{menu === "men" ? <hr/> : ""}</li>
          <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{menu === "women" ? <hr/> : ""}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr/> : ""}</li>
        </ul>
        <div className="nav-login-cart">
          <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
          <Link className='nav-login-cart-image' style={{ textDecoration: 'none' }} to='/cart'><MdShoppingCart className='cart-icon'/></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
