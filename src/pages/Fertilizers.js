import React from 'react'
import "./products.css"
import ProductsBanner from '../components/ProductsBanner'

function Fertilizers() {
  return (
    <>
    <div id='products'>
    <ProductsBanner title="الأسمدة"/>
    <div className='uploadFiles'>
    <img src='./assets/Upload Files.svg'></img>
    <h1>يتم رفع المنتجات</h1>
    </div>
    </div>
    </>
  )
}

export default Fertilizers