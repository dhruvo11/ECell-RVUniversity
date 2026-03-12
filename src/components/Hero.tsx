import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-4 px-6 py-2 border border-black dark:border-white text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
              <img 
                src="input_file_1.png" 
                alt="RVU Logo" 
                className="h-5 object-contain dark:brightness-0 dark:invert" 
              />
              <div className="h-4 w-[1px] bg-black/20 dark:bg-white/20" />
              Empowering the next generation of founders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9] uppercase"
          >
            Empowering the Next Gen of <span className="text-outline-impact">Founders</span> at RVU
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-black/60 dark:text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            ECell RV University is the catalyst for innovation on campus. We provide the mentorship, 
            resources, and global network you need to <span className="text-indigo-600 dark:text-indigo-400">Go, change the world</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="bw-button-primary w-full sm:w-auto text-lg px-10">
              Get Started
            </button>
            <button className="bw-button-secondary w-full sm:w-auto text-lg px-10 flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Story
            </button>
          </motion.div>
        </div>

        {/* Floating Cards */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-0 border border-black dark:border-white">
          {[
            { icon: Users, title: '500+ Members', desc: 'A vibrant community of thinkers' },
            { icon: Lightbulb, title: '50+ Startups', desc: 'Incubated and launched' },
            { icon: TrendingUp, title: '₹10Cr+ Funding', desc: 'Raised by our alumni' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 flex flex-col items-center text-center gap-6 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 ${
                idx !== 2 ? 'border-b md:border-b-0 md:border-r border-black dark:border-white' : ''
              }`}
            >
              <item.icon className="w-10 h-10 stroke-1" />
              <div>
                <h3 className="font-bold text-xl uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-xs uppercase tracking-widest opacity-60 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
