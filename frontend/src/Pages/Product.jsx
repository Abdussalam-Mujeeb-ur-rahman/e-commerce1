import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const data = useContext(ShopContext);
  const {productId} = useParams(); 
  const product = data.find((e) => e.id == productId)

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product
