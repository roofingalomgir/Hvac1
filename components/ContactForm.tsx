
import React from 'react';
import { Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8faff] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
           <div className="p-10 lg:p-20 lg:w-1/2">
              <h2 className="text-5xl font-bold text-[#031441] mb-8">Let's Discuss</h2>
              <p className="text-gray-500 mb-10">Need help with a project or have a question about our work? We're here for you.</p>
              
              <form className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-lg focus:outline-none focus:border-accent" />
                    <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-lg focus:outline-none focus:border-accent" />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Enter Subject" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-lg focus:outline-none focus:border-accent" />
                    <input type="text" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-lg focus:outline-none focus:border-accent" />
                 </div>
                 <textarea rows={4} placeholder="Write a Message" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-lg focus:outline-none focus:border-accent"></textarea>
                 <button className="bg-[#031441] text-white px-10 py-4 rounded font-bold hover:bg-accent transition-all">SEND A MESSAGE</button>
              </form>
           </div>
           
           <div className="lg:w-1/2 relative min-h-[400px]">
              <img src="https://picsum.photos/seed/contact-img/800/1000" alt="Multimeter measurement" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#031441]/20" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
