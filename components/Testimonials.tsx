
import React, { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    author: "Alex Poky",
    role: "Operations Lead At Agency",
    rating: 5,
    quote: "I'm beyond impressed with their HVAC service! The team arrived right on time, worked efficiently, and left my apartment perfectly cool. I've tried other companies before, but none matched their professionalism.",
    images: [
      'https://picsum.photos/seed/user1/200/250',
      'https://picsum.photos/seed/user2/200/250',
      'https://picsum.photos/seed/user3/200/250'
    ]
  },
  {
    id: 2,
    author: "Sarah Jenkins",
    role: "Homeowner",
    rating: 5,
    quote: "Exceptional emergency repair service! Our AC went out in the middle of a heatwave, and Coolex had a technician at our door within the hour. Honest pricing and fantastic results.",
    images: [
      'https://picsum.photos/seed/user4/200/250',
      'https://picsum.photos/seed/user5/200/250',
      'https://picsum.photos/seed/user6/200/250'
    ]
  },
  {
    id: 3,
    author: "Michael Chen",
    role: "Property Manager",
    rating: 4,
    quote: "We use Coolex for all our commercial properties. Their maintenance plans have saved us thousands in potential repairs. They are reliable, knowledgeable, and always professional.",
    images: [
      'https://picsum.photos/seed/user7/200/250',
      'https://picsum.photos/seed/user8/200/250',
      'https://picsum.photos/seed/user9/200/250'
    ]
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const handleNext = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsExiting(false);
    }, 300);
  }, []);

  const handlePrev = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsExiting(false);
    }, 300);
  }, []);

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;
    setIsExiting(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsExiting(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 bg-[#031441] text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
           <div>
             <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Testimonials</span>
            </div>
            <h2 className="text-5xl font-bold">The Best Customers</h2>
           </div>
           
           <div className="flex items-center space-x-6 bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-center">
                 <span className="text-4xl font-bold block">4.8</span>
                 <div className="flex text-accent mt-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                 </div>
              </div>
              <p className="text-gray-400 text-sm">From 1k Members,<br />Reviewed by Google</p>
           </div>
        </div>

        <div className="bg-[#0a1e53] rounded-[40px] p-8 lg:p-16 flex flex-col lg:flex-row gap-16 items-center relative group/card">
           {/* Navigation Arrows */}
           <button 
             onClick={handlePrev}
             className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all opacity-0 group-hover/card:opacity-100 z-20"
           >
             <ChevronLeft size={24} />
           </button>
           <button 
             onClick={handleNext}
             className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all opacity-0 group-hover/card:opacity-100 z-20"
           >
             <ChevronRight size={24} />
           </button>

           {/* Reviewers grid */}
           <div className={`grid grid-cols-3 gap-4 lg:w-1/3 transition-all duration-500 ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {current.images.map((img, i) => (
                <div key={i} className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/5]">
                   <img src={img} alt="User" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                   {i === 0 && (
                     <div className="absolute inset-0 bg-[#031441]/40 flex items-center justify-center">
                        <Quote size={40} className="text-white opacity-50" />
                     </div>
                   )}
                </div>
              ))}
           </div>

           {/* Main Review Content */}
           <div className={`lg:w-2/3 transition-all duration-500 ${isExiting ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
              <div className="flex text-green-400 mb-4">
                 {Array.from({ length: 5 }).map((_, i) => (
                   <Star key={i} size={20} fill={i < current.rating ? "currentColor" : "none"} className={i < current.rating ? "" : "text-gray-600"} />
                 ))}
              </div>
              <h4 className="text-2xl font-bold mb-6">Rated {current.rating}.0/ by 1300+ Happy Customer</h4>
              <p className="text-2xl italic text-gray-300 leading-relaxed mb-10 min-h-[140px]">
                "{current.quote}"
              </p>
              <div>
                 <h5 className="text-xl font-bold text-white">{current.author}</h5>
                 <p className="text-accent">{current.role}</p>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex space-x-3 mt-8">
                 {TESTIMONIALS.map((_, idx) => (
                   <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-accent' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                   />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
