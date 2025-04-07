/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "swiper/css"; // استيراد أنماط المكتبة
import "swiper/css/navigation";

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const cardsData = [
    { id: 3, image: "/assets/3.png", title: "أسمدة", link: "/fertilizers" },
    { id: 1, image: "/assets/1.png", title: "مبيدات", link: "/pesticides" },
    { id: 2, image: "/assets/2.png", title: "بذور تقاوي", link: "/seeds" },
    { id: 4, image: "/assets/4.jpg", title: "منظمات نمو", link: "/pgr" },
  ];

  const faqs = [
    {
      question: "ما أهمية المبيدات الزراعية؟",
      answer: [
        "زيادة الإنتاجية: تساعد المبيدات في حماية المحاصيل من الآفات والأمراض، مما يزيد من الإنتاج الزراعي.",
        "تحسين جودة المحاصيل: من خلال مكافحة الأمراض والآفات، يمكن تحسين جودة المنتجات الزراعية.",
        "خفض الفاقد: تساهم في تقليل الخسائر الناتجة عن الأضرار التي قد تلحق بالمحاصيل من قبل الآفات.",
      ],
    },
    {
      question: "ما هي أنواع المبيدات الزراعية؟",
      answer: [
        "المبيدات الحشرية: تُستخدم للقضاء على الحشرات التي تتغذى على النباتات أو تنقل الأمراض.",
        "مبيدات الأعشاب: تُستخدم للتحكم في نمو الأعشاب الضارة التي تنافس النباتات المزروعة على الموارد مثل الماء والعناصر الغذائية.",
        "المبيدات الفطرية: تُستخدم لمنع أو علاج الأمراض الفطرية التي تصيب النباتات مثل العفن أو البياض الدقيقي.",
        "مبيدات القوارض: تستخدم للتحكم في القوارض مثل الفئران التي قد تتلف المحاصيل.",
        "مبيدات البكتيريا: تهدف إلى القضاء على البكتيريا المسببة للأمراض النباتية مثل مرض التبقع البكتيري.",
      ],
    },
    {
      question: "ما هي الفئات الأساسية للمبيدات؟",
      answer: [
        "المبيدات الجهازية: تمتصها النباتات وتنتقل عبر أنسجتها، مما يجعلها فعّالة ضد الآفات التي تتغذى على النبات. مثال: مبيدات الحشرات التي تمتصها الأوراق.",
        "المبيدات التلامسية: تؤثر فقط عند ملامستها للآفة مباشرة، مثل المبيدات التي تُرش على سطح النبات.",
        "المبيدات التربوية: تُستخدم للتحكم في الآفات الموجودة في التربة، مثل الديدان والحشرات التحت سطحية.",
      ],
    },
    {
      question: "ما هي تقنيات استخدام المبيدات بفعالية؟",
      answer: [
        "التوقيت الصحيح: يجب رش المبيدات في الوقت المناسب (على سبيل المثال، في بداية ظهور الآفات أو في مراحل نمو محددة).",
        "المعدل الصحيح: استخدام الكمية الصحيحة من المبيد لتجنب الإفراط أو القليل من المادة الفعالة.",
        "الظروف الجوية: رش المبيدات في أوقات الرياح المنخفضة لتقليل التبخر والتأثيرات السلبية.",
      ],
    },
    {
      question: "ما هي الإجراءات الوقائية في استخدام المبيدات؟",
      answer: [
        "استخدام المبيدات بشكل معتدل: يجب اتباع التعليمات الواردة في ملصق المبيد لتجنب الاستخدام المفرط.",
        "التبديل بين المبيدات: لتقليل مخاطر مقاومة الآفات، يُفضل التبديل بين أنواع مختلفة من المبيدات.",
        "استخدام معدات الحماية الشخصية: لضمان السلامة، يجب على المزارعين استخدام معدات حماية مثل القفازات والملابس الواقية والكمامات.",
        "اتباع فترات الأمان: يجب الالتزام بفترات الأمان بين رش المبيدات وجني المحاصيل لتقليل المخاطر الصحية.",
      ],
    },
    {
      question: "ما هي أهمية الأسمدة الزراعية؟",
      answer: [
        "زيادة الإنتاجية: الأسمدة توفر العناصر الغذائية الأساسية التي تحتاجها النباتات لتعزيز نموها وزيادة إنتاج المحاصيل.",
        "تحسين خصوبة التربة: الأسمدة تساعد في إعادة العناصر الغذائية التي تستهلكها المحاصيل، مما يساهم في تحسين صحة التربة على المدى الطويل.",
        "تعزيز صحة النبات: توفر الأسمدة العناصر الغذائية التي تعزز مقاومة النباتات للأمراض والإجهاد البيئي.",
        "تحسين جودة المحاصيل: الأسمدة تلعب دورًا في تحسين الحجم، اللون، وطعم المحاصيل.",
      ],
    },
    {
      question: "ما هي أنواع منظمات نمو النبات؟",
      answer: [
        "الهرمونات الطبيعية:",
        "الأوكسينات (Auxins): تُساهم في نمو الجذور، تحفيز الانقسام الخلوي، والتحكم في نمو السيقان.",
        "الجيبرلينات (Gibberellins): تحفز نمو السيقان والأزهار، وتزيد من حجم الفواكه.",
        "السيتوكينينات (Cytokinins): تحفز الانقسام الخلوي في النبات وتساعد في نمو الأنسجة.",
        "الأبسيسيك أسيد (Abscisic acid): يساعد في تقليل فقد الماء خلال الجفاف، ويمنع النمو في حالات الإجهاد.",
        "الإيثيلين (Ethylene): يساعد في نضج الفواكه ويساهم في تساقط الأوراق.",
      ],
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
                  <a className="btn-green" href="#about">
                    أعرف أكتر
                  </a>
                  
                  
                  <a className="btn-white"  href="https://wa.me/+201068063055?text= السلام عليكم كنت عاوز أستفسر عن منتجات حضراتكم " >
                    تواصل معنا
                  </a>
                </div>
              </div>
              <img src="/assets/Hero-image.png" alt="Hero Image" />
            </div>
          </div>
        </section>
        {/* About */}
        <section className="about-section" id="about">
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
        <section className="products-section" id="products">
          <h1 className="title">المنتجات</h1>
          <div className="container">
            <div className="products-cards">
      {cardsData.map((card) => (
        <Link key={card.id} to={card.link} className="card-link">
          <div className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
            </div>
          </div>
        </Link>
      ))}
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
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className="faq-answer"
              style={{ display: activeIndex === index ? "block" : "none" }}
            >
              <ul className="FAQ-ul">
                {faq.answer.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

        <section className="map-section" id="location">
            <h2 className="map-title">موقعنا على الخريطة</h2>
            <div className="map-container">
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d358.664127531365!2d31.358226804598278!3d31.214981273081577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDEyJzUzLjkiTiAzMcKwMjEnMzAuNSJF!5e0!3m2!1sen!2seg!4v1742962383735!5m2!1sen!2seg"
    width="100%" 
    height="450"
    style={{border: 0}}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="El Baraka Location Map"
>
</iframe>
            </div>
        </section>

      </main>
    </>
  );
};

export default Landing;
