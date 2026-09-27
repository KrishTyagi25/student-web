import { useLanguage } from '../context/LanguageContext';

const GovFooter = () => {
  const { lang } = useLanguage();

  return (
    <footer className="w-full flex flex-col font-sans">
      {/* Top Tricolour Strip */}
      <div className="flex w-full h-[3px]">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-[#FFFFFF]" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#1a3557] text-white py-6 px-6 text-center flex flex-col items-center justify-center gap-1.5">
        <p className="text-[12px] font-medium tracking-wide">
          {lang === 'hi'
            ? 'सामग्री प्रबंधन: जनजातीय कार्य मंत्रालय, भारत सरकार (हैकाथॉन प्रोटोटाइप)'
            : 'Content Managed by Ministry of Tribal Affairs, Government of India (Hackathon Prototype)'}
        </p>
        <p className="text-[11px] text-gray-300">
          {lang === 'hi'
            ? 'स्मार्ट इंडिया हैकाथॉन 2026 के लिए टीम एंटीग्रेविटी द्वारा विकसित · समस्या कथन SIH26239'
            : 'Developed by Team Antigravity for Smart India Hackathon 2026 · Problem Statement SIH26239'}
        </p>
      </div>

      {/* Bottom Tricolour Strip */}
      <div className="flex w-full h-[3px]">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-[#FFFFFF]" />
        <div className="flex-1 bg-[#138808]" />
      </div>
    </footer>
  );
};

export default GovFooter;
