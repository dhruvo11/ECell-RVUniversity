import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Arjun Sharma',
    role: 'Overall Coordinator',
    image: 'https://picsum.photos/seed/arjun/400/400',
    socials: { linkedin: '#', twitter: '#', mail: '#' }
  },
  {
    name: 'Priya Patel',
    role: 'Head of Operations',
    image: 'https://picsum.photos/seed/priya/400/400',
    socials: { linkedin: '#', twitter: '#', mail: '#' }
  },
  {
    name: 'Rohan Gupta',
    role: 'Tech Lead',
    image: 'https://picsum.photos/seed/rohan/400/400',
    socials: { linkedin: '#', twitter: '#', mail: '#' }
  },
  {
    name: 'Ananya Iyer',
    role: 'Marketing Head',
    image: 'https://picsum.photos/seed/ananya/400/400',
    socials: { linkedin: '#', twitter: '#', mail: '#' }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black dark:text-white font-bold tracking-[0.3em] uppercase text-[10px] mb-6 opacity-50"
          >
            The Visionaries
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 uppercase tracking-tighter leading-[0.9]"
          >
            Meet Our <br /> <span className="opacity-30">Leadership</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-black/60 dark:text-white/60 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            A dedicated team of students and mentors working tirelessly to build a thriving startup culture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black dark:border-white">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group p-10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 ${
                idx !== 3 ? 'sm:border-r border-black dark:border-white' : ''
              } border-b sm:border-b-0 border-black dark:border-white`}
            >
              <div className="relative mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-0 left-0 right-0 flex translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href={member.socials.linkedin} className="flex-1 py-4 bg-white text-black dark:bg-black dark:text-white hover:invert transition-all flex justify-center border-r border-black/10 dark:border-white/10">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.socials.twitter} className="flex-1 py-4 bg-white text-black dark:bg-black dark:text-white hover:invert transition-all flex justify-center border-r border-black/10 dark:border-white/10">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.socials.mail} className="flex-1 py-4 bg-white text-black dark:bg-black dark:text-white hover:invert transition-all flex justify-center">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
