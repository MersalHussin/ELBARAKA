import React from 'react'
import { useParams } from 'react-router-dom'
import { fertilizersData } from '../data/ProductsData';
function ProductDetails(props) {
  const { id } = useParams();
  const product = fertilizersData.find(item => item.id === parseInt(id));
  if (!product) {
    return <div>المنتج غير موجود</div>;
  }
  return (
    <>
<div className='product-details-container'>
      <div className='product-details'>
        <div className='product-details-image'>
          <img src="./assets/الأسمدة 1.jpg" alt={`${product.name}-image`} />
        </div>
        <div className='product-details-text'>
          <h1>{product.name}</h1>
          
          <h2>التركيبة:</h2>
          <ul>
            {Object.entries(product.composition).map(([key, value], index) => (
              <li key={index}>{key}: {value}</li>
            ))}
          </ul>
          
          <h2>المميزات:</h2>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <h2>معدلات الاستخدام:</h2>
          <ul>
            {Object.entries(product.usageRates).map(([key, value], index) => (
              <li key={index}>{key}: {value}</li>
            ))}
          </ul>
          
          <h2>الخلط:</h2>
          <p>{product.mixing}</p>
          
          <h2>رقم التسجيل:</h2>
          <p>{product.registrationNumber}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails