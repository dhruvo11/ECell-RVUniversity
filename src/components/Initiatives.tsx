import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Globe, 
  Shield, 
  Cpu, 
  BarChart3, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

const initiatives = [
  {
    title: 'Incubation Program',
    description: 'A 6-month intensive program to take your MVP to market with dedicated mentorship.',
    icon: Zap,
    tag: 'Flagship'
  },
  {
    title: 'Investor Connect',
    description: 'Direct access to top VCs and Angel Investors for seed and Series A funding.',
    icon: Globe,
    tag: 'Networking'
  },
  {
    title: 'Skill Workshops',
    description: 'Hands-on sessions on product design, growth hacking, and legal compliance.',
    icon: Cpu,
    tag: 'Education'
  },
  {
    title: 'Startup Expo',
    description: 'Showcase your startup to thousands of students, faculty, and industry leaders.',
    icon: BarChart3,
    tag: 'Visibility'
  },
  {
    title: 'Mentorship Circle',
    description: 'One-on-one sessions with successful alumni founders and industry experts.',
    icon: MessageSquare,
    tag: 'Support'
  },
  {
    title: 'Legal & IP Support',
    description: 'Assistance with company registration, IP filing, and legal documentation.',
    icon: Shield,
    tag: 'Compliance'
  }
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-black dark:text-white font-bold tracking-[0.3em] uppercase text-[10px] mb-6 opacity-50"
            >
              Our Initiatives
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-black dark:text-white leading-[0.9] uppercase tracking-tighter"
            >
              Fueling Innovation <br /> <span className="opacity-30">Strategic Programs</span>
            </motion.h3>
          </div>
          <p className="text-black/60 dark:text-white/60 max-w-sm font-medium leading-relaxed">
            We offer a comprehensive ecosystem designed to support entrepreneurs at every stage of their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-black dark:border-white">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group p-12 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 relative ${
                idx % 3 !== 2 ? 'lg:border-r border-black dark:border-white' : ''
              } ${
                idx < 3 ? 'lg:border-b border-black dark:border-white' : ''
              } ${
                idx % 2 === 0 ? 'md:border-r lg:border-r-0 border-black dark:border-white' : ''
              } border-b md:border-b-0 border-black dark:border-white`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              
              <div className="mb-10">
                <item.icon className="w-10 h-10 stroke-1" />
              </div>
              
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-4 block">
                {item.tag}
              </span>
              
              <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">
                {item.title}
              </h4>
              
              <p className="opacity-60 leading-relaxed text-sm font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
