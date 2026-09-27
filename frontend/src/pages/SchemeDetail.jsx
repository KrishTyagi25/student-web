import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  GraduationCap,
  Globe,
  ArrowRight,
  CheckCircle,
  FileText,
  HelpCircle,
  BookOpen,
  Award,
  DollarSign,
  ChevronRight,
  Download
} from 'lucide-react';
import GovHeader from '../components/GovHeader';
import GovFooter from '../components/GovFooter';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';

const SchemeDetailContent = () => {
  const { schemeId } = useParams();
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  // Scroll to top on mount or schemeId change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [schemeId]);

  const isNfst = schemeId !== 'nos';

  const schemeData = isNfst
    ? {
        id: 'nfst',
        titleEn: 'National Fellowship for Higher Education of ST Students (NFST)',
        titleHi: 'अनुसूचित जनजाति के छात्रों की उच्च शिक्षा के लिए राष्ट्रीय फेलोशिप (NFST)',
        shortTitleEn: 'NFST Fellowship Scheme',
        shortTitleHi: 'NFST फेलोशिप योजना',
        ministryEn: 'Ministry of Tribal Affairs, Government of India',
        ministryHi: 'जनजातीय कार्य मंत्रालय, भारत सरकार',
        badgeEn: 'Higher Education in India (M.Phil / Ph.D)',
        badgeHi: 'भारत में उच्च शिक्षा (एम.फिल / पीएच.डी)',
        icon: GraduationCap,
        seatsEn: '750 Fresh Fellowships per Year',
        seatsHi: 'प्रतिवर्ष 750 नई फेलोशिप',
        incomeLimitEn: 'Up to ₹6.00 Lakh per annum',
        incomeLimitHi: '₹6.00 लाख प्रति वर्ष तक',
        ageLimitEn: 'Maximum 36 Years (as on 1st July)',
        ageLimitHi: 'अधिकतम 36 वर्ष (1 जुलाई तक)',
        
        historyEn: `The National Fellowship for Higher Education of ST Students (NFST) was launched by the Ministry of Tribal Affairs, Government of India, to support Scheduled Tribe (ST) students pursuing higher studies leading to M.Phil. and Ph.D. degrees in Sciences, Humanities, Social Sciences, and Engineering & Technology in recognized Indian Universities and Institutions. Historically, tribal students faced significant financial barriers when pursuing research-level degrees. NFST was instituted as a dedicated Central Sector Scheme to eliminate economic constraints and ensure equal representation of tribal scholars in national academia.`,
        historyHi: `अनुसूचित जनजाति (ST) के छात्रों की उच्च शिक्षा के लिए राष्ट्रीय फेलोशिप (NFST) की शुरुआत भारत सरकार के जनजातीय कार्य मंत्रालय द्वारा की गई थी। इसका उद्देश्य मान्यता प्राप्त भारतीय विश्वविद्यालयों और संस्थानों में विज्ञान, मानविकी, सामाजिक विज्ञान और इंजीनियरिंग और प्रौद्योगिकी में एम.फिल. और पीएच.डी. की डिग्री हासिल करने वाले एसटी छात्रों को वित्तीय सहायता प्रदान करना है। ऐतिहासिक रूप से, शोध स्तर की डिग्री हासिल करते समय जनजातीय छात्रों को वित्तीय बाधाओं का सामना करना पड़ता था। NFST की स्थापना आर्थिक बाधाओं को खत्म करने और राष्ट्रीय अकादमिक क्षेत्र में जनजातीय विद्वानों का समान प्रतिनिधित्व सुनिश्चित करने के लिए की गई थी।`,

        goalsEn: [
          'Provide full financial support to 750 fresh ST research scholars every academic year.',
          'Encourage Scheduled Tribe candidates to take up advanced research and doctoral studies in top-tier Indian institutions.',
          'Digitize and streamline fellowship application, document verification (via DigiLocker), and monthly stipend disbursement directly into scholars bank accounts.'
        ],
        goalsHi: [
          'प्रत्येक शैक्षणिक वर्ष में 750 नए एसटी शोधार्थियों को पूर्ण वित्तीय सहायता प्रदान करना।',
          'अनुसूचित जनजाति के उम्मीदवारों को शीर्ष भारतीय संस्थानों में उन्नत अनुसंधान और डॉक्टरेट अध्ययन करने के लिए प्रोत्साहित करना।',
          'डिजिटलीकरण के माध्यम से फेलोशिप आवेदन, दस्तावेज सत्यापन (डिजिलॉकर द्वारा) और शोधार्थियों के बैंक खातों में सीधे मासिक वजीफा संवितरण को सुव्यवस्थित करना।'
        ],

        eligibilityEn: [
          'Must belong to a Scheduled Tribe (ST) community recognized under the Constitution of India.',
          'Must have secured admission / registered for full-time M.Phil. or Ph.D. course in a UGC-recognized University / Institute.',
          'Total annual family income from all sources must not exceed ₹6.00 Lakh per annum.',
          'Maximum age limit is 36 years as on 1st July of the application year.',
          'Candidate must not be receiving any other fellowship/scholarship from Central or State Government for the same course.'
        ],
        eligibilityHi: [
          'उम्मीदवार को भारत के संविधान के तहत मान्यता प्राप्त अनुसूचित जनजाति (ST) समुदाय से होना चाहिए।',
          'उम्मीदवार ने UGC द्वारा मान्यता प्राप्त विश्वविद्यालय/संस्थान में पूर्णकालिक M.Phil. या Ph.D. पाठ्यक्रम में प्रवेश/पंजीकरण प्राप्त किया हो।',
          'सभी स्रोतों से कुल वार्षिक पारिवारिक आय ₹6.00 लाख प्रति वर्ष से अधिक नहीं होनी चाहिए।',
          'आवेदन वर्ष की 1 जुलाई तक अधिकतम आयु सीमा 36 वर्ष है।',
          'उम्मीदवार को उसी पाठ्यक्रम के लिए केंद्र या राज्य सरकार से कोई अन्य फेलोशिप/छात्रवृत्ति प्राप्त नहीं होनी चाहिए।'
        ],

        financialEn: [
          { item: 'JRF (Junior Research Fellowship)', rate: '₹31,000 / month (First 2 Years)' },
          { item: 'SRF (Senior Research Fellowship)', rate: '₹35,000 / month (Remaining Duration)' },
          { item: 'Contingency (Humanities & Social Sciences)', rate: '₹10,000 / year (JRF) & ₹20,500 / year (SRF)' },
          { item: 'Contingency (Sciences, Engg & Tech)', rate: '₹12,000 / year (JRF) & ₹25,000 / year (SRF)' },
          { item: 'HRA (House Rent Allowance)', rate: 'As per Govt rules based on city category (8%, 16%, 24%)' },
          { item: 'Escort/Reader Assistance', rate: '₹2,000 / month for Divyangjan (PWD) scholars' }
        ],
        financialHi: [
          { item: 'JRF (जूनियर रिसर्च फेलोशिप)', rate: '₹31,000 / माह (पहले 2 वर्ष)' },
          { item: 'SRF (सीनियर रिसर्च फेलोशिप)', rate: '₹35,000 / माह (शेष अवधि)' },
          { item: 'कंटिजेंसी (मानविकी एवं सामाजिक विज्ञान)', rate: '₹10,000 / वर्ष (JRF) और ₹20,500 / वर्ष (SRF)' },
          { item: 'कंटिजेंसी (विज्ञान एवं इंजीनियरिंग)', rate: '₹12,000 / वर्ष (JRF) और ₹25,000 / वर्ष (SRF)' },
          { item: 'HRA (मकान किराया भत्ता)', rate: 'शहर की श्रेणी के अनुसार सरकारी नियमों के तहत (8%, 16%, 24%)' },
          { item: 'दिव्यांग सहायता भत्ता', rate: 'दिव्यांग विद्वानों के लिए ₹2,000 / माह' }
        ],

        documentsEn: [
          'Valid ST Caste Certificate issued by competent authority.',
          'Income Certificate for current financial year (less than ₹6.00 Lakh).',
          'Self-attested copies of Class 10th, 12th, Bachelor’s, and Master’s Degree marksheets.',
          'M.Phil / Ph.D Admission Confirmation / Registration letter from University.',
          'Aadhaar Card copy.',
          'Bank Account details linked with Aadhaar for DBT transfer.'
        ],
        documentsHi: [
          'सक्षम प्राधिकारी द्वारा जारी वैध एसटी जाति प्रमाण पत्र।',
          'चालू वित्तीय वर्ष का आय प्रमाण पत्र (₹6.00 लाख से कम)।',
          '10वीं, 12वीं, स्नातक और स्नातकोत्तर डिग्री की अंकपत्रों की स्व-सत्यापित प्रतियां।',
          'विश्वविद्यालय से M.Phil / Ph.D प्रवेश पुष्टि / पंजीकरण पत्र।',
          'आधार कार्ड की प्रति।',
          'DBT हस्तांतरण के लिए आधार से जुड़ा बैंक खाता विवरण।'
        ],

        faqsEn: [
          {
            q: 'How many fellowships are awarded under NFST every year?',
            a: 'A total of 750 fresh fellowships are awarded every year for ST scholars pursuing M.Phil and Ph.D.'
          },
          {
            q: 'Can I apply if my family income is ₹6.5 Lakhs?',
            a: 'No. The ceiling limit for total family income from all sources is strictly ₹6.00 Lakh per annum.'
          },
          {
            q: 'Is DigiLocker verification mandatory?',
            a: 'Yes, the portal integrates with DigiLocker to auto-verify documents for fast and transparent processing.'
          }
        ],
        faqsHi: [
          {
            q: 'NFST के तहत हर साल कितनी फेलोशिप प्रदान की जाती हैं?',
            a: 'एम.फिल और पीएच.डी करने वाले एसटी शोधार्थियों के लिए हर साल कुल 750 नई फेलोशिप प्रदान की जाती हैं।'
          },
          {
            q: 'क्या मैं आवेदन कर सकता हूं यदि मेरी पारिवारिक आय ₹6.5 लाख है?',
            a: 'नहीं। सभी स्रोतों से कुल पारिवारिक आय की सीमा कड़ाई से ₹6.00 लाख प्रति वर्ष रखी गई है।'
          },
          {
            q: 'क्या डिजिलॉकर सत्यापन अनिवार्य है?',
            a: 'हां, त्वरित और पारदर्शी प्रसंस्करण के लिए पोर्टल डिजिलॉकर के साथ एकीकृत है।'
          }
        ]
      }
    : {
        id: 'nos',
        titleEn: 'National Overseas Scholarship Scheme for ST Students (NOS)',
        titleHi: 'अनुसूचित जनजाति के छात्रों के लिए राष्ट्रीय विदेशी छात्रवृत्ति योजना (NOS)',
        shortTitleEn: 'NOS Overseas Scheme',
        shortTitleHi: 'NOS विदेशी छात्रवृत्ति योजना',
        ministryEn: 'Ministry of Tribal Affairs, Government of India',
        ministryHi: 'जनजातीय कार्य मंत्रालय, भारत सरकार',
        badgeEn: 'Higher Studies Abroad (Master’s / Ph.D)',
        badgeHi: 'विदेश में उच्च शिक्षा (मास्टर्स / पीएच.डी)',
        icon: Globe,
        seatsEn: '20 Scholarships per Year',
        seatsHi: 'प्रतिवर्ष 20 छात्रवृत्तियां',
        incomeLimitEn: 'Up to ₹8.00 Lakh per annum',
        incomeLimitHi: '₹8.00 लाख प्रति वर्ष तक',
        ageLimitEn: 'Below 35 Years (as on 1st July)',
        ageLimitHi: '35 वर्ष से कम (1 जुलाई तक)',

        historyEn: `The National Overseas Scholarship (NOS) Scheme was established to support low-income Scheduled Tribe (ST) students pursuing higher education abroad in prestigious foreign universities. Recognizing that cost of international tuition and living expenses abroad is prohibitive for meritorious tribal candidates, the Ministry of Tribal Affairs provides full coverage of tuition fees, living allowances, travel costs, and health insurance for selected scholars attending top-ranked global universities.`,
        historyHi: `राष्ट्रीय विदेशी छात्रवृत्ति (NOS) योजना की स्थापना कम आय वाले अनुसूचित जनजाति (ST) के छात्रों को प्रतिष्ठित विदेशी विश्वविद्यालयों में उच्च शिक्षा प्राप्त करने में सहायता के लिए की गई थी। यह मानते हुए कि मेधावी जनजातीय उम्मीदवारों के लिए अंतरराष्ट्रीय ट्यूशन और विदेश में रहने का खर्च बहुत अधिक है, जनजातीय कार्य मंत्रालय शीर्ष वैश्विक विश्वविद्यालयों में पढ़ने वाले चयनित विद्वानों के लिए ट्यूशन फीस, रहने के भत्ते, यात्रा लागत और स्वास्थ्य बीमा का पूरा कवरेज प्रदान करता है।`,

        goalsEn: [
          'Provide financial support to 20 selected ST candidates every year for pursuing Master’s degree and Ph.D. courses abroad.',
          'Facilitate access to top 500 QS World Ranked international universities for tribal scholars.',
          'Cover 100% of foreign university tuition fees, annual maintenance allowance, return airfare, and health insurance.'
        ],
        goalsHi: [
          'प्रत्येक वर्ष 20 चयनित एसटी उम्मीदवारों को विदेश में मास्टर डिग्री और पीएच.डी. पाठ्यक्रम करने के लिए वित्तीय सहायता प्रदान करना।',
          'जनजातीय विद्वानों के लिए शीर्ष 500 क्यूएस वर्ल्ड रैंक वाले अंतरराष्ट्रीय विश्वविद्यालयों तक पहुंच की सुविधा प्रदान करना।',
          'विदेशी विश्वविद्यालय की ट्यूशन फीस, वार्षिक रखरखाव भत्ता, वापसी हवाई किराए और स्वास्थ्य बीमा का 100% कवर प्रदान करना।'
        ],

        eligibilityEn: [
          'Must belong to a Scheduled Tribe (ST) community.',
          'Must have secured minimum 55% marks or equivalent grade in Bachelor’s degree (for Master’s course) or Master’s degree (for Ph.D. course).',
          'Total annual family income must be less than ₹8.00 Lakh per annum.',
          'Candidate age must be below 35 years as on 1st July of the selection year.',
          'Must have secured admission in a foreign university ranked in the top 500 QS World Rankings.',
          'Only up to two children of the same parents/guardians are eligible under the scheme.'
        ],
        eligibilityHi: [
          'उम्मीदवार को अनुसूचित जनजाति (ST) समुदाय से होना चाहिए।',
          'मास्टर पाठ्यक्रम के लिए स्नातक की डिग्री में और पीएच.डी. पाठ्यक्रम के लिए मास्टर डिग्री में न्यूनतम 55% अंक या समकक्ष ग्रेड प्राप्त होना चाहिए।',
          'कुल वार्षिक पारिवारिक आय ₹8.00 लाख प्रति वर्ष से कम होनी चाहिए।',
          'चयन वर्ष की 1 जुलाई तक उम्मीदवार की आयु 35 वर्ष से कम होनी चाहिए।',
          'शीर्ष 500 क्यूएस वर्ल्ड रैंकिंग वाले विदेशी विश्वविद्यालय में प्रवेश सुरक्षित होना चाहिए।',
          'माता-पिता/अभिभावकों के अधिकतम दो बच्चे ही इस योजना के तहत पात्र हैं।'
        ],

        financialEn: [
          { item: 'Annual Maintenance Allowance (USA & Other Countries)', rate: 'USD 15,400 / year' },
          { item: 'Annual Maintenance Allowance (United Kingdom)', rate: 'GBP 9,900 / year' },
          { item: 'Tuition Fees', rate: 'Actual tuition fees paid directly to the foreign university' },
          { item: 'Contingency & Equipment Allowance', rate: 'USD 1,500 / year (USA) or GBP 1,100 / year (UK)' },
          { item: 'Air Passage (Travel Grant)', rate: 'Economy class return flight ticket from India to destination' },
          { item: 'Medical / Health Insurance', rate: 'Actual health insurance premium reimbursed' }
        ],
        financialHi: [
          { item: 'वार्षिक रखरखाव भत्ता (अमेरिका एवं अन्य देश)', rate: 'USD 15,400 / वर्ष' },
          { item: 'वार्षिक रखरखाव भत्ता (यूनाइटेड किंगडम)', rate: 'GBP 9,900 / वर्ष' },
          { item: 'ट्यूशन फीस', rate: 'विदेशी विश्वविद्यालय को सीधे भुगतान की जाने वाली वास्तविक ट्यूशन फीस' },
          { item: 'कंटिजेंसी एवं उपकरण भत्ता', rate: 'USD 1,500 / वर्ष (USA) या GBP 1,100 / वर्ष (UK)' },
          { item: 'हवाई यात्रा भत्ता', rate: 'भारत से गंतव्य तक इकोनॉमी क्लास रिटर्न फ्लाइट टिकट' },
          { item: 'स्वास्थ्य बीमा', rate: 'वास्तविक स्वास्थ्य बीमा प्रीमियम की प्रतिपूर्ति' }
        ],

        documentsEn: [
          'Valid ST Caste Certificate.',
          'Income Certificate for current year (less than ₹8.00 Lakh).',
          'Unconditional Admission / Offer Letter from foreign university (QS Top 500).',
          'Attested copies of Bachelor’s / Master’s Degree Certificates and Marksheets.',
          'Valid Indian Passport copy.',
          'Family Income affidavit and self-declaration regarding number of siblings.'
        ],
        documentsHi: [
          'वैध एसटी जाति प्रमाण पत्र।',
          'चालू वर्ष का आय प्रमाण पत्र (₹8.00 लाख से कम)।',
          'विदेशी विश्वविद्यालय (QS टॉप 500) से बिना शर्त प्रवेश / प्रस्ताव पत्र।',
          'स्नातक / स्नातकोत्तर डिग्री प्रमाण पत्र और अंकपत्रों की सत्यापित प्रतियां।',
          'वैध भारतीय पासपोर्ट की प्रति।',
          'पारिवारिक आय हलफनामा और भाई-बहनों की संख्या के संबंध में स्व-घोषणा।'
        ],

        faqsEn: [
          {
            q: 'What university ranking is required for NOS eligibility?',
            a: 'The foreign university must be ranked within the top 500 in the latest QS World University Rankings.'
          },
          {
            q: 'How many students are selected for NOS each year?',
            a: 'A total of 20 ST scholars are selected annually under the NOS scheme.'
          },
          {
            q: 'Are travel flight tickets provided?',
            a: 'Yes, full economy class return airfare from India to the destination foreign university is covered.'
          }
        ],
        faqsHi: [
          {
            q: 'NOS पात्रता के लिए विश्वविद्यालय की किस रैंकिंग की आवश्यकता है?',
            a: 'विदेशी विश्वविद्यालय को नवीनतम क्यूएस वर्ल्ड यूनिवर्सिटी रैंकिंग में शीर्ष 500 में स्थान मिलना चाहिए।'
          },
          {
            q: 'हर साल कितने छात्रों का चयन किया जाता है?',
            a: 'NOS योजना के तहत हर साल कुल 20 एसटी विद्वानों का चयन किया जाता है।'
          },
          {
            q: 'क्या यात्रा के लिए उड़ान टिकट प्रदान किए जाते हैं?',
            a: 'हां, भारत से गंतव्य विदेशी विश्वविद्यालय तक इकोनॉमी क्लास रिटर्न हवाई किराया पूरी तरह से कवर किया गया है।'
          }
        ]
      };

  const IconComp = schemeData.icon;

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa] font-sans">
      <GovHeader />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Bar */}
        <div className="bg-[#102540] text-gray-200 text-[12px] py-2.5 px-4 sm:px-6 border-b border-gray-700">
          <div className="max-w-6xl mx-auto flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">
              {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <a href="/#available-schemes" className="hover:text-white transition-colors">
              {lang === 'hi' ? 'उपलब्ध योजनाएं' : 'Available Schemes'}
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-white font-medium">
              {lang === 'hi' ? schemeData.shortTitleHi : schemeData.shortTitleEn}
            </span>
          </div>
        </div>

        {/* Hero Scheme Title Banner */}
        <section className="bg-[#1a3557] text-white py-10 px-4 sm:px-6 border-b border-gray-300">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 text-white shrink-0 mt-1">
                <IconComp className="w-9 h-9" />
              </div>
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-green-300 bg-green-900/40 border border-green-500/40 px-3 py-0.5 rounded-full mb-2">
                  {lang === 'hi' ? schemeData.badgeHi : schemeData.badgeEn}
                </span>
                <h1 className="font-serif text-[22px] sm:text-[26px] md:text-[32px] font-bold leading-tight">
                  {lang === 'hi' ? schemeData.titleHi : schemeData.titleEn}
                </h1>
                <p className="text-[13px] text-gray-200 mt-1 font-serif">
                  {lang === 'hi' ? schemeData.ministryHi : schemeData.ministryEn}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold text-[14px] px-6 py-3 rounded-lg shadow-md transition-all"
              >
                {lang === 'hi' ? 'अभी आवेदन करें' : 'Apply Online Now'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Highlights Bar */}
        <section className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="py-2 sm:py-0 px-2">
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                {lang === 'hi' ? 'उपलब्ध सीटें' : 'Seats / Awards'}
              </div>
              <div className="text-[15px] font-bold text-[#1a3557] mt-0.5">
                {lang === 'hi' ? schemeData.seatsHi : schemeData.seatsEn}
              </div>
            </div>
            <div className="py-2 sm:py-0 px-2">
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                {lang === 'hi' ? 'पारिवारिक आय सीमा' : 'Family Income Ceiling'}
              </div>
              <div className="text-[15px] font-bold text-[#1a3557] mt-0.5">
                {lang === 'hi' ? schemeData.incomeLimitHi : schemeData.incomeLimitEn}
              </div>
            </div>
            <div className="py-2 sm:py-0 px-2">
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                {lang === 'hi' ? 'आयु सीमा' : 'Age Ceiling'}
              </div>
              <div className="text-[15px] font-bold text-[#1a3557] mt-0.5">
                {lang === 'hi' ? schemeData.ageLimitHi : schemeData.ageLimitEn}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-[#eef2f7] border-b border-gray-300 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-2">
            {[
              { id: 'overview', labelEn: 'Overview & History', labelHi: 'अवलोकन एवं इतिहास', icon: BookOpen },
              { id: 'goals', labelEn: 'Goals & Objectives', labelHi: 'लक्ष्य एवं उद्देश्य', icon: Award },
              { id: 'eligibility', labelEn: 'Eligibility Criteria', labelHi: 'पात्रता मानदंड', icon: CheckCircle },
              { id: 'financial', labelEn: 'Financial Assistance', labelHi: 'वित्तीय सहायता', icon: DollarSign },
              { id: 'documents', labelEn: 'Required Documents', labelHi: 'आवश्यक दस्तावेज', icon: FileText },
              { id: 'faqs', labelEn: 'FAQs', labelHi: 'सामान्य प्रश्न (FAQs)', icon: HelpCircle }
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2.5 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#1a3557] text-white shadow-sm'
                      : 'text-[#1a3557] hover:bg-white hover:text-[#1a3557]'
                  }`}
                  type="button"
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{lang === 'hi' ? tab.labelHi : tab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Detailed Content Container */}
        <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6">
          {/* OVERVIEW & HISTORY TAB */}
          {(activeTab === 'overview' || activeTab === 'all') && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-4 py-2 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
                <h2 className="font-serif text-[20px] font-bold text-[#1a3557]">
                  {lang === 'hi' ? 'योजना का इतिहास एवं पृष्ठभूमि' : 'Scheme Background & History'}
                </h2>
              </div>
              <p className="text-justify text-[14px] text-[#374151] leading-relaxed font-sans">
                {lang === 'hi' ? schemeData.historyHi : schemeData.historyEn}
              </p>
            </div>
          )}

          {/* GOALS & OBJECTIVES TAB */}
          {(activeTab === 'goals' || activeTab === 'all') && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-4 py-2 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
                <h2 className="font-serif text-[20px] font-bold text-[#1a3557]">
                  {lang === 'hi' ? 'वर्तमान लक्ष्य एवं उद्देश्य' : 'Present Goals & Objectives'}
                </h2>
              </div>
              <ul className="space-y-3.5 text-[14px] text-[#374151]">
                {(lang === 'hi' ? schemeData.goalsHi : schemeData.goalsEn).map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ELIGIBILITY CRITERIA TAB */}
          {(activeTab === 'eligibility' || activeTab === 'all') && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-4 py-2 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
                <h2 className="font-serif text-[20px] font-bold text-[#1a3557]">
                  {lang === 'hi' ? 'पात्रता मानदंड' : 'Eligibility Criteria'}
                </h2>
              </div>
              <div className="space-y-3">
                {(lang === 'hi' ? schemeData.eligibilityHi : schemeData.eligibilityEn).map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-[#f8fafc] border border-gray-200 rounded-lg flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1a3557] text-white text-[12px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-[14px] text-[#374151] leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FINANCIAL ASSISTANCE TAB */}
          {(activeTab === 'financial' || activeTab === 'all') && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-4 py-2 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
                <h2 className="font-serif text-[20px] font-bold text-[#1a3557]">
                  {lang === 'hi' ? 'वित्तीय सहायता विवरण' : 'Financial Assistance Breakdown'}
                </h2>
              </div>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-left text-[13px] text-[#374151]">
                  <thead className="bg-[#1a3557] text-white uppercase text-[12px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4 font-semibold">{lang === 'hi' ? 'घटक / विवरण' : 'Component / Item'}</th>
                      <th className="py-3 px-4 font-semibold">{lang === 'hi' ? 'स्वीकृत दर / राशि' : 'Approved Rate / Allowance'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {(lang === 'hi' ? schemeData.financialHi : schemeData.financialEn).map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="py-3 px-4 font-semibold text-[#1a3557]">{row.item}</td>
                        <td className="py-3 px-4 font-medium text-emerald-700">{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* REQUIRED DOCUMENTS TAB */}
          {(activeTab === 'documents' || activeTab === 'all') && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-4 py-2 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
                <h2 className="font-serif text-[20px] font-bold text-[#1a3557]">
                  {lang === 'hi' ? 'आवश्यक दस्तावेजों की सूची' : 'Required Documents Checklist'}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(lang === 'hi' ? schemeData.documentsHi : schemeData.documentsEn).map((doc, idx) => (
                  <div key={idx} className="p-4 bg-[#f8fafc] border border-gray-200 rounded-lg flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#1a3557] shrink-0 mt-0.5" />
                    <span className="text-[13px] text-[#374151] font-medium leading-relaxed">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQS TAB */}
          {(activeTab === 'faqs' || activeTab === 'all') && (
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm mb-8">
              <div className="inline-block bg-gradient-to-r from-[#dbeafe] to-white px-4 py-2 rounded border-l-4 border-[#1a3557] shadow-sm mb-4">
                <h2 className="font-serif text-[20px] font-bold text-[#1a3557]">
                  {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions (FAQs)'}
                </h2>
              </div>
              <div className="space-y-4">
                {(lang === 'hi' ? schemeData.faqsHi : schemeData.faqsEn).map((faq, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-gray-200 rounded-lg">
                    <h3 className="text-[14px] font-bold text-[#1a3557] mb-1.5 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#2563eb] shrink-0" />
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-[13px] text-[#4b5563] pl-6 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA Band */}
          <div className="bg-[#1a3557] text-white rounded-xl p-8 text-center shadow-lg mt-10">
            <h2 className="font-serif text-[22px] md:text-[26px] font-bold mb-2">
              {lang === 'hi' ? 'क्या आप इस योजना के लिए पात्र हैं?' : 'Are you eligible for this scheme?'}
            </h2>
            <p className="text-[14px] text-gray-200 max-w-xl mx-auto mb-6 leading-relaxed">
              {lang === 'hi'
                ? 'अभी अपना खाता बनाएं, डिजिलॉकर के माध्यम से दस्तावेज सत्यापित करें और अपना आवेदन जमा करें।'
                : 'Create your account today, verify documents securely via DigiLocker, and submit your application.'}
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-white text-[#1a3557] hover:bg-gray-100 font-semibold text-[15px] px-8 py-3.5 rounded-lg transition-colors shadow-md"
            >
              {lang === 'hi' ? 'अभी साइन अप करें और आवेदन करें' : 'Sign Up & Apply Now'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <GovFooter />
    </div>
  );
};

const SchemeDetail = () => (
  <LanguageProvider>
    <SchemeDetailContent />
  </LanguageProvider>
);

export default SchemeDetail;
