import React, { useContext } from 'react';
import './ProductDisplay.css';
import { FaStar } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
            <img src={product.image} alt="clothe" />
            <img src={product.image} alt="clothe" />
            <img src={product.image} alt="clothe" />
            <img src={product.image} alt="clothe" />
        </div>
        <div className="productDisplay-img">
            <img src={product.image} className='productDisplay-main-img' alt="main-image" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">{product.old_price}</div>
          <div className="productDisplay-right-price-new">{product.new_price}</div>
        </div>
        <div className="productDisplay-right-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque velit eius sit labore. Cupiditate numquam consequatur repudiandae laborum. Voluptate sequi maxime autem fugiat. Tempora, ut!
        </div>
        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="productDisplay-right-size-list">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        <p className='productDisplay-right-category'>
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className='productDisplay-right-category'>
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
