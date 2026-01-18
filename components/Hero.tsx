
import React from 'react';
import { ArrowRight } from 'lucide-react';
import {Link} from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#031441]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('https://www.avsheatingandair.com/wp-content/uploads/2019/04/heat-pump-repair.jpg')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#031441] via-[#031441]/70 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Best air condition repair company</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            Comfort You Can Trust Service You Deserve
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-[#031441] px-8 py-4 rounded font-bold hover:bg-accent hover:text-black transition-all flex items-center justify-center space-x-2">
              <Link to="/services" >Discover More</Link>
              <ArrowRight size={20} className="bg-accent text-white rounded-full p-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stat Box */}
      <div className="absolute right-0 bottom-0 bg-accent text-white p-10 hidden xl:flex flex-col items-center justify-center min-w-[300px] rounded-tl-[80px]">
        <span className="text-7xl font-bold mb-2">800+</span>
        <p className="text-center text-sm font-medium leading-tight">
          There are many variations of passages<br />customer trust us for their<br />air condition
        </p>
        <div className="absolute -top-12 -left-12 bg-white/10 w-24 h-24 rounded-full" />
      </div>
      
      {/* Decorative Arrow Button */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex">
         <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:border-accent transition-all">
            <ArrowRight size={24} className="-rotate-45" />
         </div>
      </div>
    </section>
  );
};

export default Hero;
