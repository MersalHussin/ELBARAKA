import React from 'react'
import "./products.css"
import ProductsBanner from '../components/ProductsBanner'
import { Link } from 'react-router-dom';
import { pgrsData } from './data/ProductsData';

function PGR() {
  return (
    <>
    <div id='products'>
    <ProductsBanner title="منظمات النمو"/>
    {/* <div className='uploadFiles'>
    <img src='./assets/Upload Files.svg'></img>
    <h1>يتم رفع المنتجات</h1>
    </div> */}
      <section className='products-container'>
        {pgrsData.map((item, index) => {
          return (
            <div key={index} className='product'>
              <img src="./assets/الأسمدة 1.jpg" alt="Product-image" />
              <div className='product-info'>
                <h1>{item.name}</h1>
                {/* <p>{item.features.join(" ").slice(0, 80) + (item.features.join(" ").length > 50 ? "..." : "")}</p>  */}
                <Link to={`/pgr/${item.id}`}> المزيد</Link>  
              </div>
            </div>
          )
        })}
      </section>
    </div>
    </>
  )
}
export default PGR