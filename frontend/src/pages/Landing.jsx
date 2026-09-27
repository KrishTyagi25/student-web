import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  UserPlus,
  ShieldCheck,
  Award,
  ArrowRight,
  GraduationCap,
  Globe,
  BookOpen,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  FileText
} from 'lucide-react';
import GovHeader from '../components/GovHeader';
import GovFooter from '../components/GovFooter';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';

const LandingContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { lang } = useLanguage();

  // Auto-rotating hero carousel (every 5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa] font-sans">
      {/* Dedicated Government Header */}
      <GovHeader />

      {/* Main Content Wrapper */}
      <main id="main-content" className="flex-1">
        {/* 3. HERO CAROUSEL */}
        <section className="relative w-full h-[420px] md:h-[460px] bg-[#eef2f7] overflow-hidden border-b border-gray-200">
          {/* Slide 1 */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-between px-6 sm:px-12 md:px-16 ${
              currentSlide === 0 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="max-w-2xl z-10">
              <span className="inline-block text-[12px] font-bold text-[#1a3557] tracking-wider uppercase mb-2">
                {lang === 'hi' ? 'भारत सरकार की पहल' : 'GOVERNMENT OF INDIA INITIATIVE'}
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[36px] font-bold text-[#1c2b3a] leading-tight mb-3">
                {lang === 'hi'
                  ? 'NFST एवं NOS छात्रवृत्ति के लिए ऑनलाइन आवेदन करें'
                  : 'Apply for NFST & NOS Scholarships Online'}
              </h2>
              <p className="text-[14px] md:text-[15px] text-[#4b5563] mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'एक बार पंजीकरण करें, आवेदन जमा करें, दस्तावेज अपलोड करें और स्थिति ट्रैक करें — जनजातीय शिक्षा के आधिकारिक पोर्टल पर।'
                  : 'Register once, submit your application, upload documents, and track your status — all in one official portal for Tribal Education.'}
              </p>
              <div>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 bg-[#1a3557] hover:bg-[#102540] text-white text-[15px] font-medium px-6 py-3 rounded-lg shadow-sm transition-colors"
                >
                  {lang === 'hi' ? 'शुरू करें' : 'Get Started'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Watermark Graphic */}
            <div className="hidden sm:block absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none">
              <GraduationCap className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] text-[#1a3557] opacity-10" />
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-between px-6 sm:px-12 md:px-16 ${
              currentSlide === 1 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="max-w-2xl z-10">
              <span className="inline-block text-[12px] font-bold text-[#1a3557] tracking-wider uppercase mb-2">
                {lang === 'hi' ? 'भारत सरकार की पहल' : 'GOVERNMENT OF INDIA INITIATIVE'}
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[36px] font-bold text-[#1c2b3a] leading-tight mb-3">
                {lang === 'hi'
                  ? 'देशभर के जनजातीय छात्रों के लिए शिक्षा तक पहुंच को सरल बनाना'
                  : 'Simplifying Access to Education for Tribal Students Nationwide'}
              </h2>
              <p className="text-[14px] md:text-[15px] text-[#4b5563] mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'सुव्यवस्थित डिजिटल आवेदनों और पारदर्शी चयन के माध्यम से अनुसूचित जनजाति के छात्रों को सशक्त बनाना।'
                  : 'Empowering Scheduled Tribe students through streamlined digital applications and transparent selection.'}
              </p>
              <div>
                <a
                  href="#about-scheme"
                  className="inline-flex items-center gap-2 border-2 border-[#1a3557] text-[#1a3557] hover:bg-[#1a3557] hover:text-white text-[15px] font-medium px-6 py-2.5 rounded-lg transition-colors"
                >
                  {lang === 'hi' ? 'योजना के बारे में जानें' : 'Learn About the Scheme'}
                </a>
              </div>
            </div>
            {/* Watermark Graphic */}
            <div className="hidden sm:block absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none">
              <BookOpen className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] text-[#1a3557] opacity-10" />
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-between px-6 sm:px-12 md:px-16 ${
              currentSlide === 2 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="max-w-2xl z-10">
              <span className="inline-block text-[12px] font-bold text-[#1a3557] tracking-wider uppercase mb-2">
                {lang === 'hi' ? 'भारत सरकार की पहल' : 'GOVERNMENT OF INDIA INITIATIVE'}
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[36px] font-bold text-[#1c2b3a] leading-tight mb-3">
                {lang === 'hi'
                  ? 'अपने आवेदन को रियल टाइम में ट्रैक करें — जमा करने से चयन तक'
                  : 'Track Your Application in Real Time — From Submission to Selection'}
              </h2>
              <p className="text-[14px] md:text-[15px] text-[#4b5563] mb-6 leading-relaxed">
                {lang === 'hi'
                  ? 'स्वचालित स्थिति ट्रैकिंग, डिजिलॉकर सत्यापन और संस्थागत समीक्षा अपडेट के साथ हर चरण में सूचित रहें।'
                  : 'Stay informed at every stage with automated status tracking, DigiLocker verification, and institutional review updates.'}
              </p>
              <div>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 bg-[#1a3557] hover:bg-[#102540] text-white text-[15px] font-medium px-6 py-3 rounded-lg shadow-sm transition-colors"
                >
                  {lang === 'hi' ? 'शुरू करें' : 'Get Started'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* Watermark Graphic */}
            <div className="hidden sm:block absolute right-8 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none">
              <ClipboardCheck className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] text-[#1a3557] opacity-10" />
            </div>
          </div>

          {/* Carousel Arrow Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white text-[#1a3557] flex items-center justify-center shadow-md border border-gray-200 transition-all focus:outline-none"
            aria-label="Previous slide"
            type="button"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 hover:bg-white text-[#1a3557] flex items-center justify-center shadow-md border border-gray-200 transition-all focus:outline-none"
            aria-label="Next slide"
            type="button"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Dot Indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center gap-2">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  currentSlide === idx ? 'w-8 h-2.5 bg-[#1a3557]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </section>

        {/* 4. SCROLLING NOTICE TICKER */}
        <section className="bg-[#dbeafe] border-y border-[#93c5fd] h-10 overflow-hidden flex items-center relative">
          <div className="bg-[#1a3557] text-white text-[11px] font-bold px-3 py-1 ml-4 rounded-full shrink-0 z-10 shadow-sm uppercase tracking-wider">
            {lang === 'hi' ? 'सूचनाएं' : 'NOTICES'}
          </div>
          <div className="overflow-hidden w-full ml-4">
            <div className="animate-marquee flex items-center whitespace-nowrap text-[13px] text-[#1a3557] font-medium">
              <span className="inline-flex items-center gap-3 px-4">
                <span>{lang === 'hi' ? 'शैक्षणिक वर्ष 2026-27 के लिए आवेदन खुले हैं' : 'Applications open for the 2026-27 academic year'}</span>
                <span className="text-gray-400 font-bold">•</span>
                <span>{lang === 'hi' ? 'दस्तावेज़ सत्यापन दिशानिर्देश अद्यतन किए गए' : 'Document verification guidelines updated'}</span>
                <span className="text-gray-400 font-bold">•</span>
                <span>{lang === 'hi' ? 'मेरिट सूची प्रकाशन अनुसूची की घोषणा' : 'Merit list publication schedule announced'}</span>
                <span className="text-gray-400 font-bold">•</span>
                <span>{lang === 'hi' ? 'हेल्पडेस्क सहायता सोमवार से शुक्रवार उपलब्ध है' : 'Helpdesk support available Monday to Friday'}</span>
                <span className="text-gray-400 font-bold">•</span>
              </span>
              <span className="inline-flex items-center gap-3 px-4">
                <span>{lang === 'hi' ? 'शैक्षणिक वर्ष 2026-27 के लिए आवेदन खुले हैं' : 'Applications open for the 2026-27 academic year'}</span>
                <span className="text-gray-400 font-bold">•</span>
                <span>{lang === 'hi' ? 'दस्तावेज़ सत्यापन दिशानिर्देश अद्यतन किए गए' : 'Document verification guidelines updated'}</span>
                <span className="text-gray-400 font-bold">•</span>
                <span>{lang === 'hi' ? 'मेरिट सूची प्रकाशन अनुसूची की घोषणा' : 'Merit list publication schedule announced'}</span>
                <span className="text-gray-400 font-bold">•</span>
                <span>{lang === 'hi' ? 'हेल्पडेस्क सहायता सोमवार से शुक्रवार उपलब्ध है' : 'Helpdesk support available Monday to Friday'}</span>
                <span className="text-gray-400 font-bold">•</span>
              </span>
            </div>
          </div>
        </section>

        {/* 5. "ABOUT THE MINISTRY & SCHEME" SECTION WITH OFFICIAL MINISTER CARDS */}
        <section id="about-scheme" className="py-12 md:py-14 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left & Middle Columns: About the Ministry & About the Scheme */}
            <div className="md:col-span-2 space-y-8">
              {/* About The Ministry */}
              <div>
                <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-5 py-2 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
                  <h2 className="font-serif text-[20px] font-bold text-[#1a3557]">
                    {lang === 'hi' ? 'मंत्रालय के बारे में' : 'About The Ministry'}
                  </h2>
                </div>
                <p className="text-justify text-[14px] text-[#374151] leading-relaxed">
                  {lang === 'hi'
                    ? 'जनजातीय कार्य मंत्रालय की स्थापना 1999 में अनुसूचित जनजातियों (STs) के एकीकृत सामाजिक-आर्थिक विकास पर अधिक केंद्रित दृष्टिकोण प्रदान करने के उद्देश्य से की गई थी। मंत्रालय के कार्यक्रम और योजनाएं संस्थानों और बुनियादी ढांचे में महत्वपूर्ण कमियों को पूरा करने के लिए अन्य केंद्रीय मंत्रालयों, राज्य सरकारों और स्वैच्छिक संगठनों का समर्थन करती हैं।'
                    : 'The Ministry of Tribal Affairs was set up in 1999 with the objective of providing a more focused approach to the integrated socio-economic development of Scheduled Tribes (STs). The programmes and schemes of the Ministry support and supplement other Central Ministries, State Governments, and voluntary organizations to fill critical gaps in institutions and infrastructure.'}
                </p>
              </div>

              {/* About The Scheme */}
              <div>
                <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-5 py-2 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
                  <h2 className="font-serif text-[20px] font-bold text-[#1a3557]">
                    {lang === 'hi'
                      ? 'राष्ट्रीय फेलोशिप योजना एवं पोर्टल के बारे में'
                      : 'About The National Fellowship Scheme & Portal'}
                  </h2>
                </div>
                <p className="text-justify text-[14px] text-[#374151] leading-relaxed mb-3">
                  {lang === 'hi'
                    ? 'यह पोर्टल अनुसूचित जनजाति के छात्रों के लिए जनजातीय कार्य मंत्रालय की छात्रवृत्ति और फेलोशिप योजनाओं की आवेदन प्रक्रिया को डिजिटल और सरल बनाने के लिए मौजूद है। मैनुअल, कागज आधारित और असंबद्ध प्रक्रियाओं को एक एकल जवाबदेह डिजिटल प्लेटफॉर्म के साथ बदलकर, प्रणाली आवेदन प्रसंस्करण में तेजी लाती है।'
                    : "This portal exists to digitise and simplify the application process for the Ministry of Tribal Affairs' scholarship and fellowship schemes for Scheduled Tribe students. By replacing legacy, manual, paper-based, and disconnected processes with a single accountable digital platform, the system accelerates application processing while ensuring equitable access to higher education support."}
                </p>
                <p className="text-justify text-[14px] text-[#374151] leading-relaxed">
                  {lang === 'hi'
                    ? 'यह प्लेटफॉर्म आवेदन चक्र के सभी चरणों का समर्थन करता है — जिसमें पंजीकरण, दस्तावेज जमा करना (डिजिलॉकर के साथ एकीकृत), एआई-सहायता प्राप्त सत्यापन और पारदर्शी मेरिट-आधारित चयन शामिल हैं।'
                    : 'The platform supports the complete application lifecycle — including registration, document submission (integrated with DigiLocker), AI-assisted verification, and transparent merit-based selection while ensuring that every final award decision is made by an authorized administrator.'}
                </p>
              </div>
            </div>

            {/* Right Column: Minister Photo Cards & Key Objectives */}
            <div className="md:col-span-1 space-y-5 flex flex-col items-center md:items-stretch">
              {/* Minister 1: Sh. Jual Oram */}
              <div className="bg-white border border-gray-200 rounded-lg p-3.5 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <img
                  src="/images/jual_oram.jpg"
                  alt="Sh. Jual Oram"
                  className="w-28 h-32 object-cover rounded border border-gray-300 shadow-inner mb-2.5"
                />
                <h3 className="font-serif font-bold text-[14px] text-[#1a3557] leading-snug">
                  {lang === 'hi' ? 'श्री जुअल ओराम' : 'Sh. Jual Oram'}
                </h3>
                <span className="text-[12px] font-medium text-[#4b5563]">
                  {lang === 'hi' ? 'माननीय मंत्री' : "Hon'ble Minister"}
                </span>
              </div>

              {/* Minister 2: Sh. Durgadas Uikey */}
              <div className="bg-white border border-gray-200 rounded-lg p-3.5 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <img
                  src="/images/durgadas_uikey.jpg"
                  alt="Sh. Durgadas Uikey"
                  className="w-28 h-32 object-cover rounded border border-gray-300 shadow-inner mb-2.5"
                />
                <h3 className="font-serif font-bold text-[14px] text-[#1a3557] leading-snug">
                  {lang === 'hi' ? 'श्री दुर्गादास उइके' : 'Sh. Durgadas Uikey'}
                </h3>
                <span className="text-[12px] font-medium text-[#4b5563]">
                  {lang === 'hi' ? 'माननीय राज्य मंत्री' : "Hon'ble MoS"}
                </span>
              </div>

              {/* Key Objectives Card */}
              <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-4 shadow-sm w-full">
                <h3 className="font-serif font-bold text-[14px] text-[#1a3557] border-b border-gray-200 pb-2 mb-2.5">
                  {lang === 'hi' ? 'मुख्य उद्देश्य' : 'Key Objectives'}
                </h3>
                <ul className="space-y-2 text-[12px] text-[#374151] font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#1a3557] shrink-0" />
                    <span>{lang === 'hi' ? 'प्रसंस्करण समय कम करना' : 'Reduce processing time'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#1a3557] shrink-0" />
                    <span>{lang === 'hi' ? 'पारदर्शी चयन सुनिश्चित करना' : 'Ensure transparent selection'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#1a3557] shrink-0" />
                    <span>{lang === 'hi' ? 'डिजिटल-प्रथम पहुंच सक्षम करना' : 'Enable digital-first access'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#1a3557] shrink-0" />
                    <span>{lang === 'hi' ? 'मानवीय पर्यवेक्षण बनाए रखना' : 'Maintain human oversight'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. "ABOUT THE PORTAL" SECTION */}
        <section className="py-8 px-4 sm:px-6 max-w-5xl mx-auto border-t border-gray-200/60">
          <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-5 py-2.5 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
            <h2 className="font-serif text-[22px] font-bold text-[#1a3557]">
              {lang === 'hi' ? 'डिजिटल पोर्टल के बारे में' : 'About the Digital Portal'}
            </h2>
          </div>
          <p className="text-justify text-[14px] text-[#374151] leading-relaxed">
            {lang === 'hi'
              ? 'यह पोर्टल स्मार्ट इंडिया हैकाथॉन 2026 (समस्या कथन SIH26239) के हिस्से के रूप में बनाया गया था। यह त्वरित दस्तावेज़ सत्यापन के लिए डिजिलॉकर के साथ एकीकृत है और आवेदकों को वास्तविक समय में अपनी स्थिति को ट्रैक करने के लिए एक मोबाइल और वेब इंटरफेस प्रदान करता है। कृपया ध्यान दें कि यह प्रणाली प्रदर्शन उद्देश्यों के लिए डिज़ाइन किया गया एक हैकाथॉन प्रोटोटाइप है।'
              : 'This portal was built as part of Smart India Hackathon 2026 (Problem Statement SIH26239). It is integrated with DigiLocker for instant document verification and provides applicants a mobile and web interface to track their status in real time. Please note that this system is a hackathon prototype designed for demonstration purposes.'}
          </p>
        </section>

        {/* 7. "NEWS & UPDATES" WIDGET */}
        <section id="news" className="py-8 px-4 sm:px-6 max-w-5xl mx-auto border-t border-gray-200/60">
          <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-5 py-2.5 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
            <h2 className="font-serif text-[22px] font-bold text-[#1a3557]">
              {lang === 'hi' ? 'समाचार एवं अद्यतन' : 'News & Updates'}
            </h2>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg max-h-64 overflow-y-auto divide-y divide-gray-100 shadow-sm">
            {(lang === 'hi'
              ? [
                  '2026-27 आवेदन चक्र के संबंध में सूचना',
                  'दस्तावेज़ सत्यापन के लिए दिशानिर्देश प्रकाशित',
                  'एफएक्यू अनुभाग नए प्रश्नों के साथ अपडेट किया गया',
                  'हेल्पडेस्क संपर्क विवरण संशोधित',
                  'पोर्टल रखरखाव अनुसूची की घोषणा',
                  'योजना पात्रता मानदंड स्पष्ट किया गया'
                ]
              : [
                  'Notice regarding the 2026-27 application cycle',
                  'Guidelines for document verification published',
                  'FAQ section updated with new questions',
                  'Helpdesk contact details revised',
                  'Portal maintenance schedule announced',
                  'Scheme eligibility criteria clarified'
                ]
            ).map((item, idx) => (
              <div key={idx} className="py-3 px-4 flex items-start gap-2.5 hover:bg-slate-50 transition-colors">
                <FileText className="w-3.5 h-3.5 text-[#1a3557] mt-1 shrink-0" />
                <a href="#" className="text-[13px] text-[#1a3557] font-medium hover:underline">
                  {item}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 8. HOW IT WORKS SECTION */}
        <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto border-t border-gray-200/60">
          <div className="text-center mb-10">
            <h2 className="font-serif text-[20px] md:text-[24px] font-bold text-[#1c2b3a]">
              {lang === 'hi' ? 'यह कैसे काम करता है' : 'How It Works'}
            </h2>
            <p className="text-[14px] text-[#6b7a8d] mt-1">
              {lang === 'hi'
                ? 'फेलोशिप या छात्रवृत्ति प्राप्त करने की 3-चरण प्रक्रिया'
                : 'Simple 3-step process to get your fellowship or scholarship'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-[#dde1e7] rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#1a3557]/10 flex items-center justify-center text-[#1a3557] mb-4">
                <UserPlus className="w-6 h-6" />
              </div>
              <span className="text-[12px] font-bold text-[#1a3557] bg-[#f5f7fa] px-2.5 py-1 rounded-full border border-[#dde1e7] mb-2">
                Step 01
              </span>
              <h3 className="text-[17px] font-semibold text-[#1c2b3a] mb-2 font-serif">
                {lang === 'hi' ? 'पंजीकरण एवं आवेदन' : 'Register & Apply'}
              </h3>
              <p className="text-[14px] text-[#6b7a8d] leading-relaxed">
                {lang === 'hi'
                  ? 'मूल विवरण के साथ अपनी छात्र प्रोफ़ाइल बनाएं और अपना आवेदन शुरू करने के लिए अपनी पात्र योजना चुनें।'
                  : 'Create your student profile with basic details and choose your eligible scheme to start your application.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#dde1e7] rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#1a3557]/10 flex items-center justify-center text-[#1a3557] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[12px] font-bold text-[#1a3557] bg-[#f5f7fa] px-2.5 py-1 rounded-full border border-[#dde1e7] mb-2">
                Step 02
              </span>
              <h3 className="text-[17px] font-semibold text-[#1c2b3a] mb-2 font-serif">
                {lang === 'hi' ? 'सत्यापित करवाएं' : 'Get Verified'}
              </h3>
              <p className="text-[14px] text-[#6b7a8d] leading-relaxed">
                {lang === 'hi'
                  ? 'हमारी प्रणाली निर्बाध और पारदर्शी सत्यापन के लिए आपके दस्तावेजों की स्वचालित रूप से जांच करती है।'
                  : 'Our system checks your documents automatically for seamless and transparent verification.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#dde1e7] rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#1a3557]/10 flex items-center justify-center text-[#1a3557] mb-4">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[12px] font-bold text-[#1a3557] bg-[#f5f7fa] px-2.5 py-1 rounded-full border border-[#dde1e7] mb-2">
                Step 03
              </span>
              <h3 className="text-[17px] font-semibold text-[#1c2b3a] mb-2 font-serif">
                {lang === 'hi' ? 'चयनित हों' : 'Get Selected'}
              </h3>
              <p className="text-[14px] text-[#6b7a8d] leading-relaxed">
                {lang === 'hi'
                  ? 'ऑनलाइन अपनी स्थिति ट्रैक करें, स्वचालित सूचनाएं प्राप्त करें और प्रत्यक्ष संवितरण सहायता प्राप्त करें।'
                  : 'Track your status online, receive automated notifications, and obtain direct disbursement support.'}
              </p>
            </div>
          </div>
        </section>

        {/* 9. AVAILABLE SCHEMES SECTION */}
        <section id="available-schemes" className="py-12 px-4 sm:px-6 max-w-5xl mx-auto border-t border-gray-200/60">
          <div className="text-center mb-10">
            <h2 className="font-serif text-[20px] md:text-[24px] font-bold text-[#1c2b3a]">
              {lang === 'hi' ? 'उपलब्ध योजनाएं' : 'Available Schemes'}
            </h2>
            <p className="text-[14px] text-[#6b7a8d] mt-1">
              {lang === 'hi'
                ? 'एसटी छात्रों के लिए राष्ट्रीय फेलोशिप और विदेशी छात्रवृत्ति कार्यक्रम'
                : 'National fellowship and overseas scholarship programs for ST students'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Scheme 1: NFST */}
            <div className="bg-white border border-[#dde1e7] rounded-xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#f5f7fa] border border-[#dde1e7] text-[#1a3557]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[17px] font-semibold text-[#1c2b3a]">
                      {lang === 'hi' ? 'NFST योजना' : 'NFST Scheme'}
                    </h3>
                    <span className="inline-block text-[12px] font-medium text-[#16a34a] bg-green-50 border border-green-200 px-2 py-0.5 rounded mt-0.5">
                      {lang === 'hi' ? 'अनुसूचित जनजाति के छात्र' : 'Scheduled Tribe Students'}
                    </span>
                  </div>
                </div>
                <p className="text-[14px] text-[#6b7a8d] leading-relaxed mb-4">
                  {lang === 'hi'
                    ? 'भारतीय विश्वविद्यालयों और संस्थानों में एम.फिल. और पीएच.डी. की डिग्री हासिल करने वाले एसटी छात्रों की उच्च शिक्षा के लिए राष्ट्रीय फेलोशिप।'
                    : 'National Fellowship for Higher Education of ST Students pursuing M.Phil. and Ph.D. degrees in Indian Universities and Institutions.'}
                </p>
              </div>
              <div className="pt-3 border-t border-[#dde1e7]">
                <Link
                  to="/scheme-details/nfst"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1a3557] hover:underline"
                >
                  {lang === 'hi' ? 'और जानें' : 'Learn More'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Scheme 2: NOS */}
            <div className="bg-white border border-[#dde1e7] rounded-xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#f5f7fa] border border-[#dde1e7] text-[#1a3557]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[17px] font-semibold text-[#1c2b3a]">
                      {lang === 'hi' ? 'NOS योजना' : 'NOS Scheme'}
                    </h3>
                    <span className="inline-block text-[12px] font-medium text-[#16a34a] bg-green-50 border border-green-200 px-2 py-0.5 rounded mt-0.5">
                      {lang === 'hi' ? 'अनुसूचित जनजाति के छात्र' : 'Scheduled Tribe Students'}
                    </span>
                  </div>
                </div>
                <p className="text-[14px] text-[#6b7a8d] leading-relaxed mb-4">
                  {lang === 'hi'
                    ? 'विदेश में स्नातकोत्तर और पीएच.डी. पाठ्यक्रम करने के लिए चयनित एसटी छात्रों को वित्तीय सहायता प्रदान करने वाली राष्ट्रीय विदेशी छात्रवृत्ति।'
                    : 'National Overseas Scholarship providing financial assistance to selected ST students for pursuing Post Graduate and Ph.D. courses abroad.'}
                </p>
              </div>
              <div className="pt-3 border-t border-[#dde1e7]">
                <Link
                  to="/scheme-details/nos"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1a3557] hover:underline"
                >
                  {lang === 'hi' ? 'और जानें' : 'Learn More'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 10. RESOURCE LINKS ROW */}
        <section id="resources" className="py-8 px-6 border-t border-gray-200 bg-[#f8fafc] text-center">
          <h3 className="text-[13px] font-bold text-[#6b7a8d] uppercase tracking-wide mb-4">
            {lang === 'hi' ? 'संबंधित संसाधन' : 'Related Resources'}
          </h3>
          <div className="flex flex-wrap justify-center items-center text-[13px] text-[#1a3557] font-medium">
            <a href="#" className="hover:underline">{lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}</a>
            <span className="mx-3 text-gray-300">•</span>
            <a href="#" className="hover:underline">{lang === 'hi' ? 'उपयोग की शर्तें' : 'Terms of Use'}</a>
            <span className="mx-3 text-gray-300">•</span>
            <a href="#" className="hover:underline">{lang === 'hi' ? 'सुगम्यता कथन' : 'Accessibility Statement'}</a>
            <span className="mx-3 text-gray-300">•</span>
            <a href="#" className="hover:underline">{lang === 'hi' ? 'साइटमैप' : 'Sitemap'}</a>
            <span className="mx-3 text-gray-300">•</span>
            <a href="#" className="hover:underline">{lang === 'hi' ? 'सूचना का अधिकार (RTI)' : 'RTI'}</a>
            <span className="mx-3 text-gray-300">•</span>
            <a href="#" className="hover:underline">{lang === 'hi' ? 'शिकायत निवारण' : 'Grievance Redressal'}</a>
          </div>
        </section>

        {/* Contact Anchor / CTA Band */}
        <section id="contact" className="bg-[#1a3557] text-white py-12 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-[22px] md:text-[26px] font-bold mb-3">
              {lang === 'hi' ? 'आवेदन करने के लिए तैयार हैं?' : 'Ready to apply?'}
            </h2>
            <p className="text-[14px] md:text-[15px] text-gray-200 mb-6">
              {lang === 'hi'
                ? 'अपनी फेलोशिप या छात्रवृत्ति आवेदन शुरू करने के लिए कुछ ही मिनटों में अपना खाता बनाएं।'
                : 'Create your account in minutes to start your fellowship or scholarship application.'}
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center bg-white text-[#1a3557] hover:bg-gray-100 font-semibold px-7 py-3 rounded-lg min-h-[44px] transition-colors shadow-sm"
            >
              {lang === 'hi' ? 'अभी साइन अप करें' : 'Sign Up Now'}
            </Link>
          </div>
        </section>
      </main>

      {/* Dedicated Government Footer */}
      <GovFooter />
    </div>
  );
};

const Landing = () => (
  <LanguageProvider>
    <LandingContent />
  </LanguageProvider>
);

export default Landing;
