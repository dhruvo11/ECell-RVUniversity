import React from 'react';
import Hero from '../components/Hero';
import Initiatives from '../components/Initiatives';
import Team from '../components/Team';
import WordRotator from '../components/WordRotator';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Trust Bar */}
      <div className="bg-slate-50/50 dark:bg-white/5 py-16 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold text-black dark:text-white uppercase tracking-[0.4em] mb-10 opacity-40">An Initiative of RV Educational Institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-60 hover:opacity-100 transition-all duration-700">
            <span className="text-2xl font-display font-bold text-black dark:text-white">RV UNIVERSITY</span>
            {['Google', 'Microsoft', 'Amazon', 'Stripe'].map((brand) => (
              <span key={brand} className="text-2xl font-display font-bold text-black dark:text-white">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Our Identity Section */}
      <section className="py-24 bg-white dark:bg-black border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
                Two Identities, <br />
                <WordRotator words={['One Mission', 'One Vision', 'One Goal']} className="text-indigo-600 dark:text-indigo-400" />
              </h2>
              <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed font-medium mb-8">
                ECell RV University represents the synergy between student-led entrepreneurship and 
                academic excellence. We are proud to be the official entrepreneurship wing of 
                RV University, working together to create a world-class startup ecosystem.
              </p>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 bg-slate-50 dark:bg-white/5 p-4 flex items-center justify-center border border-black/5 dark:border-white/5">
                    <img src="input_file_0.png" alt="ECell Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">ECell Logo</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 bg-slate-50 dark:bg-white/5 p-4 flex items-center justify-center border border-black/5 dark:border-white/5">
                    <img src="input_file_1.png" alt="RVU Logo" className="w-full h-full object-contain dark:brightness-0 dark:invert" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">RVU Logo</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-slate-100 dark:bg-white/5 border border-black dark:border-white overflow-hidden">
              <img 
                src="https://picsum.photos/seed/campus/1200/800" 
                alt="RV University Campus" 
                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-sm font-bold uppercase tracking-widest">RV University Campus, Bengaluru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Initiatives />

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-black dark:bg-indigo-950 text-white p-16 md:p-24 overflow-hidden border border-black dark:border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1 border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-10 bg-white/5 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Join the Movement
                </div>
                <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9] uppercase tracking-tighter">
                  Ready to build <br /> <span className="text-indigo-400">the next big thing?</span>
                </h2>
                <p className="text-white/60 text-lg mb-12 leading-relaxed font-medium">
                  Join Ignite ECell today and get access to a world-class network of mentors, investors, and fellow founders.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  <button className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-indigo-400 transition-all active:scale-95 w-full sm:w-auto">
                    Apply Now
                  </button>
                  <button className="bg-transparent text-white border border-white/20 px-10 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 w-full sm:w-auto">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="hidden lg:block w-full max-w-md">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12">
                  <div className="space-y-10">
                    {[
                      { label: 'Applications Received', value: '1,240+' },
                      { label: 'Active Projects', value: '42' },
                      { label: 'Mentors Onboard', value: '85' }
                    ].map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-end border-b border-white/10 pb-6">
                        <span className="text-white/40 font-bold uppercase text-[10px] tracking-[0.2em]">{stat.label}</span>
                        <span className="text-4xl font-bold tracking-tighter">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
    </>
  );
}
