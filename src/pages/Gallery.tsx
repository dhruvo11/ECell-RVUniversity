import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import WordRotator from '../components/WordRotator';

const galleryImages = [
  { id: 1, src: "/gallery/startup-weekend.jpg", title: "Startup Weekend 2025", category: "Events" },
  { id: 2, src: "/gallery/pitching-session.jpg", title: "Pitching Session", category: "Competitions" },
  { id: 3, src: "/gallery/ai-workshop.jpg", title: "Workshop on AI", category: "Workshops" },
  { id: 4, src: "/gallery/networking-night.jpg", title: "Networking Night", category: "Networking" },
  { id: 5, src: "/gallery/founders-meet.jpg", title: "Founder’s Meet", category: "Events" },
  { id: 6, src: "/gallery/incubation-center.jpg", title: "Incubation Center", category: "Campus" },
  { id: 7, src: "/gallery/demo-day.jpg", title: "Demo Day", category: "Competitions" },
  { id: 8, src: "/gallery/team-building.jpg", title: "Team Building", category: "Team" },
  { id: 9, src: "/gallery/guest-lecture.jpg", title: "Guest Lecture", category: "Workshops" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(galleryImages.map((image) => image.category))],
    []
  );

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
            Our{" "}
            <WordRotator
              words={['Gallery', 'Moments', 'Memories']}
              className="text-indigo-600 dark:text-indigo-400"
            />
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-medium">
            Capturing moments of innovation, collaboration, and entrepreneurship at E-Cell RV University.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                  : 'border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative group break-inside-avoid border border-black dark:border-white overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2">
                  {image.category}
                </span>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}