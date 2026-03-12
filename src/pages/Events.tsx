import React from 'react';
import { motion } from 'motion/react';
import WordRotator from '../components/WordRotator';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Startup Weekend RVU",
    date: "March 25-27, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Main Auditorium, RVU",
    category: "Workshop",
    image: "https://picsum.photos/seed/startup/800/600",
    description: "A 54-hour event where you can build a startup from scratch with the help of mentors."
  },
  {
    id: 2,
    title: "Founder's Talk: Series A & Beyond",
    date: "April 10, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "Innovation Lab",
    category: "Talk",
    image: "https://picsum.photos/seed/founders/800/600",
    description: "Join us for an insightful session with successful alumni founders who have raised millions."
  },
  {
    id: 3,
    title: "Pitch Perfect 2026",
    date: "May 05, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Conference Hall B",
    category: "Competition",
    image: "https://picsum.photos/seed/pitch/800/600",
    description: "The annual flagship pitching competition of ECell RVU. Win prizes and incubation support."
  }
];

export default function Events() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
            Upcoming <WordRotator words={['Events', 'Workshops', 'Meetups']} className="text-indigo-600 dark:text-indigo-400" />
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl font-medium">
            Join our workshops, talks, and competitions to accelerate your entrepreneurial journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-2 border border-black dark:border-white overflow-hidden hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
            >
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-6 left-6 bg-white dark:bg-black text-black dark:text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest border border-black dark:border-white">
                  {event.category}
                </div>
              </div>
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6">{event.title}</h2>
                <p className="text-lg opacity-60 mb-8 font-medium">{event.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 opacity-40" />
                    <span className="text-sm font-bold uppercase tracking-wider">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 opacity-40" />
                    <span className="text-sm font-bold uppercase tracking-wider">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 sm:col-span-2">
                    <MapPin className="w-5 h-5 opacity-40" />
                    <span className="text-sm font-bold uppercase tracking-wider">{event.location}</span>
                  </div>
                </div>

                <button className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] group/btn">
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
