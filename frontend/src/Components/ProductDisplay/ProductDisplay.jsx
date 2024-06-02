import React from 'react';
import './ProductDisplay.css';
import { FaStar } from "react-icons/fa";

const ProductDisplay = (props) => {
    const {product} = props;

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
            <img src={product.image} className='productDisplay-main-img' alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
