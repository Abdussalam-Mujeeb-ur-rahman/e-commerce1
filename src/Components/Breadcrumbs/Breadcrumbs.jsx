import React from 'react';
import './Breadcrumbs.css';
import { FaLongArrowAltRight } from "react-icons/fa";

const Breadcrumbs = (props) => {
    const {product} = props;

  return (
    <div className='breadcrumbs'>
      HOME <FaLongArrowAltRight /> SHOP <FaLongArrowAltRight /> {product.category} <FaLongArrowAltRight /> {product.name}
    </div>
  )
}

export default Breadcrumbs
