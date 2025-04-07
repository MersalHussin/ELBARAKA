import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { fertilizersData,pgrsData } from '../data/ProductsData';
function ProductDetails(props) {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   

  let productType;
  let dataSource;
  if (location.pathname.startsWith('/fertilizers')) {
    productType = 'fertilizers';
    dataSource = fertilizersData;
  }else if (location.pathname.startsWith('/pgr')) {
    productType = 'pgrs';
    dataSource = pgrsData;
  }else {
    return <div>نوع المنتج غير معروف</div>;
  }
  const product = dataSource.find(item => item.id === parseInt(id));
if (!product) {
    return <div>المنتج غير موجود</div>;
  }
  return (
    <>
<div className='product-details-container'>
      <div className='product-details'>
        <div className='product-details-image'>
          <img 
            src={`${product.img}`} 
            alt={`${product.name}-image`} 
          />
        </div>
        <div className='product-details-text'>
          <h1>{product.name}</h1>

          {/* التركيبة */}
          {product.composition && (
            <>
              <h2>التركيبة:</h2>
              <ul>
                {Array.isArray(product.composition)
                  ? product.composition.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  : Object.entries(product.composition).map(([key, value], index) => (
                      <li key={index}>{key}: {value}</li>
                    ))}
              </ul>
            </>
          )}

          {/* المميزات */}
          {product.features && (
            <>
              <h2>المميزات:</h2>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}

{/* معدلات الاستخدام (للأسمدة) */}
{product.usageRates && (
            <>
              <h2>معدلات الاستخدام:</h2>
              {typeof product.usageRates === 'string' ? (
                <p>يضاف بمعدل: {product.usageRates}</p>
              ) : (
                <ul>
                  {Object.entries(product.usageRates).map(([key, value], index) => (
                    <li key={index}>
                      <span>{key || ''},</span> يضاف بمعدل: {value}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}


    {/* معدلات الاستخدام الإضافية (متداخلة) */}
    {product.usageRatesExtra && (
            <>
              <h2>معدلات الاستخدام حسب المحصول:</h2>
              {Object.entries(product.usageRatesExtra).map(([cropType, rates], index) => (
                <div key={index} className="crop-usage">
                  <h3>{cropType}</h3>
                  <ul>
                    {Object.entries(rates).map(([method, value], subIndex) => (
                      <li key={subIndex}>{method}: {value}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}

          {/* معدل الزراعة (للبذور) */}
          {product.plantingRate && (
            <>
              <h2>معدل الزراعة:</h2>
              <p>{product.plantingRate}</p>
            </>
          )}

          {/* الخلط */}
          {product.mixing && (
            <>
              <h2>الخلط:</h2>
              <p>{product.mixing}</p>
            </>
          )}

          {/* رقم التسجيل */}
          {product.registrationNumber && (
            <>
              <h2>رقم التسجيل:</h2>
              <p>{product.registrationNumber}</p>
            </>
          )}

          {/* النوع */}
          {product.type && (
            <>
              <h2>النوع:</h2>
              <p>{product.type}</p>
            </>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails