import React from 'react'
import "./products.css"
import ProductsBanner from '../components/ProductsBanner'
import { Link } from 'react-router-dom';
import { fertilizersData } from './data/ProductsData';

function Fertilizers() {
  return (
    <>
    <div id='products'>
    <ProductsBanner title="الأسمدة"/>
    {/* <div className='uploadFiles'>
    <img src='./assets/Upload Files.svg'></img>
    <h1>يتم رفع المنتجات</h1>
    </div> */}
      <section className='products-container'>
        {fertilizersData.map((item, index) => {
          return (
            <div key={index} className='product'>
              <img src="./assets/الأسمدة 1.jpg" alt="Product-image" />
              <div className='product-info'>
                <h1>{item.name}</h1>
                <p>{item.features.join(" ").slice(0, 80) + (item.features.join(" ").length > 50 ? "..." : "")}</p> 
                <Link to={`/fertilizers/${item.id}`}> المزيد</Link>  
              </div>
            </div>
          )
        })}
      </section>
    </div>
    </>
  )
}

export default Fertilizers