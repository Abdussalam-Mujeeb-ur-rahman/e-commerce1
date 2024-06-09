import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { TbShoppingCartCancel } from "react-icons/tb";


const CartItems = () => {
    const {data, cartItems, addToCart, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {data.map((e) => {
        if(cartItems[e.id] > 0) {
            return <div>
            <div className="cartItems-format">
                <img src={e.image} alt="" className='cartIcon-product-icon' />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <TbShoppingCartCancel onClick={() => {removeFromCart(e.id)}} />
            </div>
            <hr />
          </div>
        }
      })}
    </div>
  )
}

export default CartItems
