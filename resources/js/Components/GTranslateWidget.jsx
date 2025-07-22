import { useEffect } from 'react';

export default function GTranslateWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'id',
        includedLanguages: 'id,en,ar',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div id="google_translate_element" className="flex justify-end " />
  );
}
