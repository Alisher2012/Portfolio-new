import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering Framer Motion for Premium UX',
    excerpt: 'Learn how to create high-end animations that feel natural and improve user engagement.',
    date: 'May 10, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800',
    category: 'Animation'
  },
  {
    id: 2,
    title: 'The Future of Frontend: Next.js 14 and Beyond',
    excerpt: 'Exploring the latest trends in React ecosystem and what it means for developers.',
    date: 'May 05, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    category: 'Development'
  },
  {
    id: 3,
    title: 'Design Systems for Scalable Web Apps',
    excerpt: 'How to build a robust design system that keeps your codebase clean and consistent.',
    date: 'Apr 28, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800',
    category: 'Design'
  }
];

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 section-padding"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Latest <span className="text-primary">Insights</span></h1>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-neon mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">Exploring the intersection of design, code, and user experience.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden group"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-primary font-bold">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <button className="flex items-center gap-2 text-primary font-bold text-sm group/btn">
                Read More
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPage;
