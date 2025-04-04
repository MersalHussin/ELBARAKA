import React from 'react'
import ProductsBanner from '../components/ProductsBanner'

function Seeds() {
  return (
    <>
    <div id='products'>
    <ProductsBanner title="بذور التقاوي"/>
    <div className='uploadFiles'>
    <img src='./assets/Upload Files.svg' alt="Upload files icon" />
    <h1>يتم رفع المنتجات</h1>
    </div>
    </div>
    </>
  )
}

export default Seeds