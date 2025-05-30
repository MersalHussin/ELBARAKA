import React from 'react'
import ProductsBanner from '../components/ProductsBanner'
import { Link, NavLink } from 'react-router-dom'
import { seedsData} from './data/ProductsData'

function Seeds() {
  let Pagefor = "بذور التقاوي"
  return (
    <>
    <div id='products'>
    <ProductsBanner title={Pagefor}/>
    {/* <div className='uploadFiles'>
    <img src='./assets/Upload Files.svg'></img>
    <h1>يتم رفع المنتجات</h1>
    </div> */}
      <section className='products-page'>
        <h1 className='page-title'>منتجات {Pagefor}</h1>
        <div className='filters'>
          <NavLink to="/fertilizers">الأسمدة</NavLink>
          <NavLink to="/pgr">منظمات النمو</NavLink>
          <NavLink to="/pesticides">المبيدات</NavLink>
          <NavLink to="/seeds">بذور التقاوي</NavLink>
        </div>
        <div className='products-container'>
        {seedsData.map((item, index) => {
          return (
            <div key={index} className='product'>
              <img src={item.img} alt={item.name} />
              <div className='product-info'>
                <h1>{item.name}</h1>
                {/* <p>{item.features.join(" ").slice(0, 80) + (item.features.join(" ").length > 50 ? "..." : "")}</p>  */}
                <Link to={`/seeds/${item.id}`}> المزيد</Link>  
              </div>
            </div>
          )
        })}
        </div>
      </section>
    </div>
    </>
  )
}

export default Seeds