
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "What types of air conditioning systems do you install?",
    a: "We install a wide range of systems including central air, split systems, window units, and commercial HVAC infrastructure tailored to your needs."
  },
  {
    q: "How do I know which AC system is best for my home or office?",
    a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more it is a long established fact that a reader"
  },
  {
    q: "How often should my AC be serviced or cleaned?",
    a: "We recommend a professional cleaning and performance check at least once a year, preferably before the summer season begins."
  },
  {
    q: "What brands of air conditioners do you work with?",
    a: "We work with all major premium brands including Carrier, Trane, Lennox, Daikin, and many others."
  },
  {
    q: "Are your technicians certified and insured?",
    a: "Yes, all our technicians are fully licensed, certified, and our company is fully insured for your peace of mind."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-accent font-bold uppercase tracking-widest text-sm">FAQS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#031441]">Answers to Your Most<br />Common Queries!</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={`w-full flex items-center justify-between p-6 text-left font-bold text-lg transition-colors ${openIndex === idx ? 'bg-[#eef4ff] text-[#031441]' : 'text-gray-800'}`}
              >
                <span>{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${openIndex === idx ? 'bg-[#031441] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              {openIndex === idx && (
                <div className="p-6 text-gray-600 leading-relaxed animate-in slide-in-from-top-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
