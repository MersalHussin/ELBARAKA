import React, { useEffect } from 'react'
import './ProductsBanner.css'
function ProductsBanner(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<div className="fertilizer-banner">
      {/* الخلفية الخضراء مع الصورة */}
      <div className="banner-background"></div>

      {/* المحتوى */}
      <div className="banner-content">
        <h1 className="banner-title">{props.title}</h1>

        <div className="breadcrumb">
          <a href="/" className="breadcrumb-link">
            الرئيسية
          </a>
          <span className="breadcrumb-separator">
          <i class="fa-solid fa-caret-right"></i>
          </span>
          <a href="/#products" className="breadcrumb-link">
            منتجاتنا
          </a>
          <span className="breadcrumb-separator">
          <i class="fa-solid fa-caret-right"></i>
          </span>
          <span className="breadcrumb-current">{props.title}</span>
        </div>
      </div>
    </div>  )
}

export default ProductsBanner