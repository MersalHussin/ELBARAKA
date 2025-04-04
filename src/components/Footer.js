import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
    <div className="footer-links">
            <h3 className="footer-title">روابط مختصرة</h3>
            <div className="links-container">
                <ul>
                    <li><a href="#" rel="noreferrer">الرئيسية</a></li>
                    <li><a href="#" rel="noreferrer">من نحن</a></li>
                    <li><a href="#" rel="noreferrer">الأسئلة الشائعة</a></li>
                </ul>
                <ul>
                    <li><a href="#" rel="noreferrer">الأسمدة</a></li>
                    <li><a href="#" rel="noreferrer">المبيدات</a></li>
                    <li><a href="#" rel="noreferrer">بذور التقاوي</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-logo">
            <img src="/assets/Logo-Footer.png" alt="شعار مؤسسة البركة"/>
        </div>

        <div className="footer-contact">
            <a href="#mail"><i className="fa-solid fa-square-envelope"></i>info@elbarkaagri.com</a>
            <a href="#phone"><i className="fa-solid fa-square-phone"></i>01068063055</a>
        </div>
        
    </div>
        <div target="_blank" href="http://mersal.top/" style={{display:"block"}} className="developer">
          <a target="_blank" href="http://mersal.top/" rel="noreferrer">تم التطوير والتصميم بواسطة مرسال</a>
        </div>
</footer>  )
}

export default Footer