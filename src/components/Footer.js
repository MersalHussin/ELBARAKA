import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
    <div className="footer-links">
            <h3 className="footer-title">روابط مختصرة</h3>
            <div className="links-container">
                <ul>
                    <li><a href="#" rel="noreferrer">الرئيسية</a></li>
                    <li><a href="#about" rel="noreferrer">من نحن</a></li>
                    <li><a href="#products" rel="noreferrer">منتجاتنا</a></li>
                    <li><a href="#FAQ" rel="noreferrer">الأسئلة الشائعة</a></li>
                </ul>
                <ul>
                    <li><Link to="/fertilizers" rel="noreferrer">الأسمدة</Link></li>
                    <li><Link to="/pesticides" rel="noreferrer">المبيدات</Link></li>
                    <li><Link to="/pgr" rel="noreferrer">منظمات النمو</Link></li>
                    <li><Link to="/seeds" rel="noreferrer">بذور التقاوي</Link></li>
                </ul>
            </div>
        </div>
        <div className="footer-logo">
            <img src="/assets/Logo-Footer.png" alt="شعار مؤسسة البركة"/>
        </div>

        <div className="footer-contact">
            <a href="mailto:info@elbarkaagri.com"><i className="fa-solid fa-square-envelope"></i>info@elbarkaagri.com</a>
            <a href="tel:+201068063055"><i className="fa-solid fa-square-phone"></i>01068063055</a>
        </div>
        
    </div>
        <div  className="developer">
          <a target="_blank" href="http://mersal.top/" rel="noreferrer">تم التطوير والتصميم بواسطة مرسال</a>
        </div>
</footer>  )
}

export default Footer