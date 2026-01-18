
import React from 'react';
import { ArrowRight, User, Calendar } from 'lucide-react';

const POSTS = [
  {
    title: 'How to Keep Your AC Running Efficiently All Year Long',
    date: 'December 1, 2025',
    category: 'AC Running',
    img: 'https://picsum.photos/seed/b1/600/400'
  },
  {
    title: 'Why Regular AC Maintenance Saves You Money Long Run',
    date: 'December 1, 2025',
    category: 'Installation',
    img: 'https://picsum.photos/seed/b2/600/400'
  },
  {
    title: 'The Ultimate Guide to Choosing the Right Air Conditioner',
    date: 'December 1, 2025',
    category: 'Thermostat',
    img: 'https://picsum.photos/seed/b3/600/400'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
             <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Blog</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#031441]">Stay Informed Latest News</h2>
          </div>
          <button className="bg-[#031441] text-white px-8 py-4 rounded font-bold hover:bg-accent transition-all flex items-center space-x-2">
            <span>View All Blog</span>
            <ArrowRight size={20} className="bg-accent text-white rounded-full p-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, idx) => (
            <div key={idx} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                   <div className="flex items-center space-x-1">
                      <Calendar size={14} className="text-accent" />
                      <span>{post.date}</span>
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-[#031441] leading-tight group-hover:text-accent transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <a href="#" className="inline-flex items-center space-x-2 text-accent font-bold group/link">
                  <span>Read More</span>
                  <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
