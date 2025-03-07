import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // استيراد أنماط المكتبة
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



const Landing = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "ما هو تطبيق أسرة؟",
      answer:
        "تطبيق أسرة هو منصة تهدف إلى تمكين الشباب والأطفال من اكتشاف إمكانياتهم وتحقيق أهدافهم من خلال دعم الكوتشز وبرامج متخصصة.",
    },
    {
      question: "لمن يقدم تطبيق أسرة خدماته؟",
      answer: "تطبيق أسرة يقدم خدماته للأطفال والشباب وأولياء الأمور لتطوير مهاراتهم وبناء شخصياتهم.",
    },
    {
      question: "كيف يمكنني التسجيل في تطبيق أسرة؟",
      answer:
        "يمكنك التسجيل من خلال تحميل التطبيق على هاتفك الذكي وإنشاء حساب جديد باتباع الخطوات البسيطة.",
    },
    {
      question: "ما هو دور الكوتشز في تطبيق أسرة؟",
      answer:
        "الكوتشز في تطبيق أسرة يقدمون التوجيه والدعم للأفراد، سواء كانوا أطفالًا أو أولياء أمور، لمساعدتهم على التعامل مع تحديات الحياة وتحقيق أهدافهم.",
    },
    {
      question: "هل تطبيق أسرة مناسب لأولياء الأمور؟",
      answer:
        "نعم، يقدم تطبيق أسرة برامج مخصصة لأولياء الأمور لمساعدتهم على تحسين تواصلهم مع أطفالهم وتعزيز دورهم التربوي.",
    },
    {
      question: "هل هناك جلسات فردية في تطبيق أسرة؟",
      answer:
        "نعم، يوفر تطبيق أسرة جلسات فردية مع الكوتشز لتقديم الدعم الشخصي بما يتناسب مع احتياجات المستخدم.",
    },
    {
      question: "ما هي مميزات تطبيق أسرة؟",
      answer:
        "من مميزات تطبيق أسرة: بيئة تفاعلية، دعم من كوتشز متخصصين، برامج مخصصة لكل فئة عمرية، وشهادات عند إتمام البرامج.",
    },
    {
      question: "كيف يمكنني التواصل مع فريق الدعم؟",
      answer:
        "يمكنك التواصل مع فريق الدعم من خلال قسم 'اتصل بنا' داخل التطبيق أو عبر البريد الإلكتروني الخاص بخدمة العملاء.",
    },
];

  return (
    <>
      <main>
      <section class="hero-section">
        <div class="container">
          <div className="hero-data">
          <div className="Hero-text">
            <h1>معًا نحــــــو زراعة أكثر إنتاجًا وأمانًا</h1>
            <p>مع خبرة وجودة لضمان أفضل النتائج</p>
            <div className="btns">
              <a className="btn-green" href="#about-sec">أعرف أكتر</a>
              <a  className="btn-white" href="#CTA">تواصل معنا</a>
              </div>
            </div>
          <img src="/assets/Hero-image.png" alt="" />
          </div>

        </div>
    </section>




{/*         
        <section id="CTA">
          <h1>كن واعي بـ أسرتك الان</h1>
          <div className="links-CTA" style={{ display:"flex",gap:"30px"}}>
          <a target="_blank" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">نزل التطبيق IOS</a>
          <a target="_blank" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">نزل التطبيق  Andriod</a>
          </div>
        </section>

    
        <section id="FAQ">
          <div className="container">
            <h1 className="title">الأسئلة الشائعة</h1>
            <div className="FAQ-box">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="icon">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className="faq-answer"
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        <footer id="footer">
          <div className="logo-footer">
            <img
              src="/assets/Ausrah-Footer.svg"
              alt="logo-footer"
              className="logo-qudraat"
            />
            </div>
            <div className="social-media">
              <a href="https://www.youtube.com/channel/UCQFUhLEiFUjj2JXPSt_45dA">
                <img src="/assets/Youtube.svg" alt="Youtube" />
              </a>
              <a href="https://www.tiktok.com/@qudraat?is_from_webapp=1&sender_device=pc">
                <img src="/assets/Tiktok.svg" alt="Tiktok" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571035216683&mibextid=ZbWKwL">
                <img src="/assets/Facebook.svg" alt="Facebook" />
              </a>
              <a href="">
                <img src="/assets/Insta.svg" alt="Insta" />
              </a>
              <a href="https://wa.me/+201040031584">
                <img src="/assets/Whatsapp.svg" alt="Whatsapp" />
              </a>
            </div>
            <div className="line"></div>
            <div className="copyright">جميع الحقوق محفوظة لـ أسرة © 2025</div>
        </footer> */}
      </main>
    </>
  );
};

export default Landing;