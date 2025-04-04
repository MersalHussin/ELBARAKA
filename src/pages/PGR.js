import React from 'react'
import "./products.css"
import ProductsBanner from '../components/ProductsBanner'

function PGR() {
  return (
    <>
    <div id='products'>
    <ProductsBanner title="منظمات النمو"/>
    <div className='uploadFiles'>
    <img src='./assets/Upload Files.svg'></img>
    <h1>يتم رفع المنتجات</h1>
    </div>
    </div>
    </>
  )
}

export default PGR