
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#031441] text-white py-24 text-center">
        <h1 className="text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400">Home / Contact</p>
      </div>
      
      <div className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           {[
             { icon: <MapPin />, title: "Address", val: CONTACT_INFO.address },
             { icon: <Phone />, title: "Phone", val: CONTACT_INFO.phone },
             { icon: <Mail />, title: "Email", val: CONTACT_INFO.email },
             { icon: <Clock />, title: "Working Hours", val: "Mon - Sat: 9:00 - 18:00" },
           ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-2xl shadow-md text-center border-b-4 border-accent">
                <div className="w-16 h-16 bg-[#f8faff] text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                   {React.cloneElement(item.icon as React.ReactElement, { size: 30 })}
                </div>
                <h3 className="text-xl font-bold text-[#031441] mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.val}</p>
             </div>
           ))}
        </div>
        
        <ContactForm />
        
        {/* Mock Map */}
        <div className="mt-24 h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl relative">
           <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 text-2xl font-bold">
              Google Maps Loading...
           </div>
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.24168147!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
             className="w-full h-full border-0 relative z-10"
             allowFullScreen 
             loading="lazy"
           />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
