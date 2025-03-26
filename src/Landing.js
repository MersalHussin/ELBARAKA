import React, { useEffect, useState } from "react";

import "swiper/css"; // استيراد أنماط المكتبة
import "swiper/css/navigation";

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
      answer:
        "تطبيق أسرة يقدم خدماته للأطفال والشباب وأولياء الأمور لتطوير مهاراتهم وبناء شخصياتهم.",
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
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-data">
              <div className="Hero-text">
                <h1>معًا نحــــو زراعة أكثر إنتاجًا وأمانًا</h1>
                <p>مع خبرة وجودة لضمان أفضل النتائج</p>
                <div className="btns">
                  <a className="btn-green" href="#about-sec">
                    أعرف أكتر
                  </a>
                  <a className="btn-white" href="#CTA">
                    تواصل معنا
                  </a>
                </div>
              </div>
              <img src="/assets/Hero-image.png" alt="Hero Image" />
            </div>
          </div>
        </section>
        {/* About */}
        <section className="about-section">
          <h1 className="title">من نحن</h1>
          <div className="container">
            <div className="img-container">
              <img src="/assets/About-us.png" alt="" />
            </div>
            <div className="about-txt">
              <h1>التأسيس</h1>
              <p>
                تأسست مؤسسة البركة في عام 1994، وكانت شريكا موثوقا به في القطاع
                الزراعي، مكرسا لخدمة احتياجات المزارعين من خلال توفير الأسمدة
                ومبيدات الآفات والبذور عالية الجودة. يقع المقر الرئيسي في 48
                شارع الجمهورية، مدينة الدقهلية، بلقاس، كانت مهمتنا دائما تقديم
                حلول زراعية مبتكرة مع تقديم المشورة الأساسية والدعم العملي
                للمزارعين.
              </p>
            </div>
          </div>
        </section>
        {/* Vision */}
        <section className="vision-section">
          <h1 className="title">رؤيتنا وأهدافنا</h1>
          <div className="container">
            <div className="vision-txt">
              <p>
                منذ نشأتنا، كان هدفنا الأساسي هو دعم المزارعين ليس فقط من خلال
                توفير منتجات عالية الجودة ولكن أيضا من خلال تقديم إرشادات
                الخبراء والمشورة المصممة خصيصا. نعمل علي ضمان الاستخدام الأمثل
                للمنتجات، وتعزيز أفضل الممارسات التي تدفع الإنتاج المستدام
                للمحاصيل. مهمتنا هي دعم الزراعة المستدامة من خلال تقديم مجموعة
                متنوعة من المبيدات والأسمدة والبذور عالية الجودة . شركتنا متخصصة
                في تقديم مبيدات الآفات والأسمدة والبذور عالية الجودة لتحقيق أقصى
                قدر من الإنتاجية الزراعية ودعم الممارسات الزراعية المستدامة.
                ⁠نحن نعمل جنبا إلى جنب مع المزارعين لفهم احتياجاتهم الفريدة
                وتقديم حلول مصممة خصيصا تؤدي إلى زيادة الإنتاجية والربحية
                والاستدامة
              </p>
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section className="about-section timeline">
          <h1 className="title">المعالم الرئيسية</h1>
          <div className="container">
            <div className="about-txt">
              <p>
                <span>1994:</span> تأسيس الشركة مع التركيز على توفير المدخلات
                الزراعية ودعم المزارعين.
                <br />
                <span>2010:</span> إطلاق التقاوي، الذي اصبح منتجنا الرئيسي،
                المصمم لتحقيق أقصى قدر من نمو المحاصيل وإنتاجيتها.
                <br />
                <span>2012:</span> التوسع في استيراد المبيدات والأسمدة عالية
                الجودة، وتعزيز عروضنا بمجموعة واسعة من المنتجات التي تعالج
                التحديات الزراعية المتنوعة.
              </p>
            </div>
            <div className="img-container">
              <img src="/assets/About2.png" alt="about-image" />
            </div>
          </div>
        </section>
        <section className="products-section">
          <h1 className="title">المنتجات</h1>
          <div className="container">
            <div className="products-cards">

            <a href="#">
          <div class="card">
        <img src="/assets/3.png" alt="فريق قدرات" class="card-image"/>
        <div class="card-content">
            <h2 class="card-title">أسمدة</h2>
        </div>
      </div>
            </a>
            <a href="#">
          <div class="card">
        <img src="/assets/2.png" alt="فريق قدرات" class="card-image"/>
        <div class="card-content">
            <h2 class="card-title">بذور تقاوي</h2>
        </div>
      </div>
            </a>
            <a href="#">
          <div class="card">
        <img src="/assets/3.png" alt="فريق قدرات" class="card-image"/>
        <div class="card-content">
            <h2 class="card-title">مبيدات</h2>
        </div>
      </div>
            </a>
            <a href="#">
          <div class="card">
        <img src="/assets/1.png" alt="فريق قدرات" class="card-image"/>
        <div class="card-content">
            <h2 class="card-title">منظمات نمو</h2>
        </div>
      </div>
            </a>
        </div>
            {/* <div className="img-container">
              <img src="/assets/About2.png" alt="about-image" />
            </div> */}
          </div>
        </section>

        {/* Map */}


{/*                
        <section id="CTA">
          <h1>كن واعي بـ أسرتك الان</h1>
          <div className="links-CTA" style={{ display:"flex",gap:"30px"}}>
          <a target="_blank" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">نزل التطبيق IOS</a>
          <a target="_blank" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">نزل التطبيق  Andriod</a>
          </div>
        </section> */}

    
        <section id="FAQ">
            <h1 className="title">الأسئلة الشائعة</h1>
          <div className="container">
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

        <section class="map-section">
            <h2 class="map-title">موقعنا على الخريطة</h2>
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d358.664127531365!2d31.358226804598278!3d31.214981273081577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDEyJzUzLjkiTiAzMcKwMjEnMzAuNSJF!5e0!3m2!1sen!2seg!4v1742962383735!5m2!1sen!2seg" 
                        width="600" height="450" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>

        <footer class="footer">
        <div class="footer-container">
        <div class="footer-links">
                <h3 class="footer-title">روابط مختصرة</h3>
                <div className="links-container">
                    <ul>
                        <li><a href="#">الرئيسية</a></li>
                        <li><a href="#">من نحن</a></li>
                        <li><a href="#">الأسئلة الشائعة</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">الأسمدة</a></li>
                        <li><a href="#">المبيدات</a></li>
                        <li><a href="#">بذور التقاوي</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-logo">
                <img src="/assets/Logo-Footer.png" alt="شعار مؤسسة البركة"/>
            </div>

            <div class="footer-contact">
                <p>info@elbarkaagri.com</p>
                <p>01068063055</p>
            </div>
            
        </div>
    </footer>
      </main>
    </>
  );
};

export default Landing;
