import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GovHeader = () => {
  const [fontScale, setFontScale] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSchemesDropdownOpen, setIsSchemesDropdownOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
  }, [fontScale]);

  const decreaseFont = () => setFontScale((prev) => Math.max(0.85, Number((prev - 0.1).toFixed(2))));
  const resetFont = () => setFontScale(1);
  const increaseFont = () => setFontScale((prev) => Math.min(1.3, Number((prev + 0.1).toFixed(2))));

  return (
    <header className="w-full flex flex-col font-sans">
      {/* 1. UTILITY BAR */}
      <div className="bg-[#0d1b2e] py-1.5 px-4 sm:px-6 flex flex-row justify-between items-center text-[11px] text-gray-300">
        <div className="flex items-center">
          <a href="#main-content" className="hover:text-white transition-colors">
            {lang === 'hi' ? 'मुख्य विषय पर जाएं' : 'Skip to Main Content'}
          </a>
          <a href="#" className="hover:text-white transition-colors border-l border-gray-600 pl-3 ml-3">
            {lang === 'hi' ? 'स्क्रीन रीडर एक्सेस' : 'Screen Reader Access'}
          </a>
          <a href="#" className="hover:text-white transition-colors border-l border-gray-600 pl-3 ml-3">
            {lang === 'hi' ? 'साइटमैप' : 'Sitemap'}
          </a>
        </div>
        <div className="flex items-center font-medium">
          {/* Font Scale Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={decreaseFont}
              className="px-1.5 hover:text-white hover:underline transition-colors"
              title="Decrease font size"
              type="button"
            >
              A-
            </button>
            <button
              onClick={resetFont}
              className="px-1.5 hover:text-white hover:underline transition-colors"
              title="Reset font size"
              type="button"
            >
              A
            </button>
            <button
              onClick={increaseFont}
              className="px-1.5 hover:text-white hover:underline transition-colors"
              title="Increase font size"
              type="button"
            >
              A+
            </button>
          </div>

          {/* Bilingual Language Switcher Button */}
          <button
            onClick={toggleLang}
            className="ml-3 border-l border-gray-600 pl-3 text-[#93c5fd] hover:text-white font-semibold transition-colors focus:outline-none"
            title={lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            type="button"
          >
            {lang === 'en' ? 'हिन्दी' : 'English'}
          </button>
        </div>
      </div>

      {/* 2. GovHeader ROW 1 — Ministry Branding */}
      <div className="bg-white py-4 px-4 sm:px-6 flex flex-row justify-between items-center border-b border-gray-200">
        {/* Left Side: Badge + Stacked Text */}
        <div className="flex flex-row gap-3 sm:gap-4 items-center">
          <Link to="/" className="flex flex-row gap-3 sm:gap-4 items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1a3557] flex items-center justify-center shrink-0 shadow-sm">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className="text-[14px] sm:text-[15px] font-semibold text-[#1a3557] leading-tight"
                style={{ fontFamily: "'Noto Sans Devanagari', serif" }}
              >
                जनजातीय कल्याण एवं छात्रवृत्ति पोर्टल
              </span>
              <span className="font-serif text-[12px] sm:text-[13px] text-[#4b5563]">
                {lang === 'hi' ? 'जनजातीय कार्य मंत्रालय' : 'Ministry of Tribal Affairs'}
              </span>
            </div>
          </Link>
        </div>

        {/* Right Side: Portal Name */}
        <div className="text-right ml-2">
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <h1 className="font-serif text-[15px] sm:text-[18px] md:text-[24px] font-bold text-[#1a3557] tracking-wide leading-tight uppercase">
              {lang === 'hi' ? 'राष्ट्रीय छात्रवृत्ति एवं फेलोशिप पोर्टल' : 'NATIONAL SCHOLARSHIP & FELLOWSHIP PORTAL'}
            </h1>
          </Link>
        </div>
      </div>

      {/* 2. GovHeader ROW 2 — Navigation Bar */}
      <nav className="bg-[#1a3557] w-full px-4 sm:px-6 flex flex-row justify-between items-center h-12 relative z-20">
        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-row items-center gap-1 text-[14px] text-white font-medium h-full">
          <Link
            to="/"
            className="hover:bg-[#25456e] text-white px-4 h-full flex items-center transition-colors"
          >
            {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
          </Link>
          <a
            href="/#about-scheme"
            className="hover:bg-[#25456e] text-white px-4 h-full flex items-center transition-colors"
          >
            {lang === 'hi' ? 'योजना के बारे में' : 'About the Scheme'}
          </a>

          {/* Available Schemes Dropdown Container */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsSchemesDropdownOpen(true)}
            onMouseLeave={() => setIsSchemesDropdownOpen(false)}
          >
            <button
              onClick={() => setIsSchemesDropdownOpen(!isSchemesDropdownOpen)}
              className="hover:bg-[#25456e] text-white px-4 h-full flex items-center gap-1.5 transition-colors focus:outline-none"
              type="button"
            >
              <span>{lang === 'hi' ? 'उपलब्ध योजनाएं' : 'Available Schemes'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSchemesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Schemes Dropdown Menu */}
            {isSchemesDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white text-[#1a3557] rounded-b-lg shadow-xl border border-gray-200 py-2 z-50">
                <Link
                  to="/scheme-details/nfst"
                  onClick={() => setIsSchemesDropdownOpen(false)}
                  className="block px-4 py-2.5 hover:bg-[#dbeafe] transition-colors border-b border-gray-100"
                >
                  <div className="font-bold text-[14px] text-[#1a3557]">
                    {lang === 'hi' ? 'NFST योजना' : 'NFST Scheme'}
                  </div>
                  <div className="text-[12px] text-gray-500 font-normal mt-0.5">
                    {lang === 'hi' ? 'उच्च शिक्षा के लिए राष्ट्रीय फेलोशिप' : 'National Fellowship for ST Students'}
                  </div>
                </Link>
                <Link
                  to="/scheme-details/nos"
                  onClick={() => setIsSchemesDropdownOpen(false)}
                  className="block px-4 py-2.5 hover:bg-[#dbeafe] transition-colors"
                >
                  <div className="font-bold text-[14px] text-[#1a3557]">
                    {lang === 'hi' ? 'NOS योजना' : 'NOS Scheme'}
                  </div>
                  <div className="text-[12px] text-gray-500 font-normal mt-0.5">
                    {lang === 'hi' ? 'राष्ट्रीय विदेशी छात्रवृत्ति' : 'National Overseas Scholarship'}
                  </div>
                </Link>
              </div>
            )}
          </div>

          <a
            href="/#resources"
            className="hover:bg-[#25456e] text-white px-4 h-full flex items-center transition-colors"
          >
            {lang === 'hi' ? 'संसाधन' : 'Resources'}
          </a>
          <a
            href="/#contact"
            className="hover:bg-[#25456e] text-white px-4 h-full flex items-center transition-colors"
          >
            {lang === 'hi' ? 'संपर्क करें' : 'Contact Us'}
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1.5 hover:bg-[#25456e] rounded transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            type="button"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Right Side Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-white text-[14px] hover:underline font-medium px-2 py-1 transition-colors"
          >
            {lang === 'hi' ? 'लॉग इन' : 'Login'}
          </Link>
          <Link
            to="/signup"
            className="bg-white text-[#1a3557] text-[14px] font-semibold px-4 py-1.5 rounded hover:bg-gray-100 transition-colors shadow-sm"
          >
            {lang === 'hi' ? 'साइन अप' : 'Sign Up'}
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a3557] border-t border-[#25456e] px-4 py-3 flex flex-col gap-1 text-[14px] text-white">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:bg-[#25456e] px-3 py-2 rounded font-medium transition-colors"
          >
            {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
          </Link>
          <a
            href="/#about-scheme"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:bg-[#25456e] px-3 py-2 rounded font-medium transition-colors"
          >
            {lang === 'hi' ? 'योजना के बारे में' : 'About the Scheme'}
          </a>
          <div className="px-3 py-2 font-semibold text-gray-300 text-[13px] uppercase tracking-wider">
            {lang === 'hi' ? 'उपलब्ध योजनाएं' : 'Available Schemes'}
          </div>
          <Link
            to="/scheme-details/nfst"
            onClick={() => setIsMobileMenuOpen(false)}
            className="pl-6 pr-3 py-1.5 hover:bg-[#25456e] rounded font-medium text-[13px] text-blue-200 transition-colors"
          >
            • {lang === 'hi' ? 'NFST योजना' : 'NFST Scheme'}
          </Link>
          <Link
            to="/scheme-details/nos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="pl-6 pr-3 py-1.5 hover:bg-[#25456e] rounded font-medium text-[13px] text-blue-200 transition-colors"
          >
            • {lang === 'hi' ? 'NOS योजना' : 'NOS Scheme'}
          </Link>
          <a
            href="/#resources"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:bg-[#25456e] px-3 py-2 rounded font-medium transition-colors"
          >
            {lang === 'hi' ? 'संसाधन' : 'Resources'}
          </a>
          <a
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:bg-[#25456e] px-3 py-2 rounded font-medium transition-colors"
          >
            {lang === 'hi' ? 'संपर्क करें' : 'Contact Us'}
          </a>
        </div>
      )}
    </header>
  );
};

export default GovHeader;
