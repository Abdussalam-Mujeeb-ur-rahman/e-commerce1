import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { TbShoppingCartCancel } from "react-icons/tb";


const CartItems = () => {
    const {data, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className="cartItems-format-main headers">
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
            <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className='cartIcon-product-icon' />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <TbShoppingCartCancel className='cartItems-remove-icon' onClick={() => {removeFromCart(e.id)}} />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className='cartItems-total-button'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promo-code">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartItems-promo-box">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
