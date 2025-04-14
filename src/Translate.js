import React, { useEffect } from 'react';

function Translate() {
  // دالة التهيئة بتاعة Google Translate
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'ar', // اللغة الرئيسية عربي
        includedLanguages: 'en,fr,es,de', // اللغات المتاحة
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, // شكل القايمة
        autoDisplay: false, // ماتترجمش لوحدها
      },
      'google_translate_element' // الـ ID بتاع القايمة
    );
  };

  // تحميل الدالة لما المكون يتحمل
  useEffect(() => {
    // نضيف الدالة لـ window عشان السكربت يلاقيها
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div>
      <h1>مؤسسة البركة</h1>
      <div id="google_translate_element"></div> {/* القايمة هتظهر هنا */}
    </div>
  );
}

export default Translate;