import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Twitter, Mail, X } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Arjun Sharma',
    role: 'Overall Coordinator',
    department: 'Leadership',
    year: 'Final Year',
    image: 'https://picsum.photos/seed/arjun/500/500',
    bio: 'Leads the overall vision, strategy, and execution of E-Cell initiatives across campus.',
    skills: ['Leadership', 'Strategy', 'Public Speaking'],
    socials: {
      linkedin: '#',
      twitter: '#',
      mail: 'mailto:arjun@example.com',
    },
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Head of PR',
    department: 'Public Relations',
    year: 'Third Year',
    image: 'https://picsum.photos/seed/priya/500/500',
    bio: 'Handles outreach, partnerships, and communication for E-Cell initiatives and events.',
    skills: ['Communication', 'Outreach', 'Coordination'],
    socials: {
      linkedin: '#',
      twitter: '#',
      mail: 'mailto:priya@example.com',
    },
  },
  {
    id: 3,
    name: 'Rohan Gupta',
    role: 'Tech Lead',
    department: 'Technical Team',
    year: 'Final Year',
    image: 'https://picsum.photos/seed/rohan/500/500',
    bio: 'Builds and manages the technical backbone for E-Cell platforms, events, and digital systems.',
    skills: ['React', 'UI Development', 'Product Thinking'],
    socials: {
      linkedin: '#',
      twitter: '#',
      mail: 'mailto:rohan@example.com',
    },
  },
  {
    id: 4,
    name: 'Ananya Iyer',
    role: 'Documentation Lead',
    department: 'Documentation Team',
    year: 'Third Year',
    image: 'https://picsum.photos/seed/ananya/500/500',
    bio: 'Manages reports, records, event documentation, and written communication for the team.',
    skills: ['Writing', 'Reporting', 'Content'],
    socials: {
      linkedin: '#',
      twitter: '#',
      mail: 'mailto:ananya@example.com',
    },
  },
  {
    id: 5,
    name: 'Karan Mehta',
    role: 'PR Coordinator',
    department: 'Public Relations',
    year: 'Second Year',
    image: 'https://picsum.photos/seed/karan/500/500',
    bio: 'Supports outreach, collaborations, registrations, and external communication activities.',
    skills: ['Event Ops', 'Networking', 'Teamwork'],
    socials: {
      linkedin: '#',
      twitter: '#',
      mail: 'mailto:karan@example.com',
    },
  },
  {
    id: 6,
    name: 'Sneha Reddy',
    role: 'Social Media Lead',
    department: 'Social Media Team',
    year: 'Third Year',
    image: 'https://picsum.photos/seed/sneha/500/500',
    bio: 'Creates campaigns, manages audience engagement, and runs social media presence for E-Cell.',
    skills: ['Content', 'Branding', 'Campaigns'],
    socials: {
      linkedin: '#',
      twitter: '#',
      mail: 'mailto:sneha@example.com',
    },
  },
  {
    id: 7,
    name: 'Aarav Nair',
    role: 'Design Lead',
    department: 'Design Team',
    year: 'Second Year',
    image: 'https://picsum.photos/seed/aarav/500/500',
    bio: 'Designs posters, promotional materials, and brand assets for events and campaigns.',
    skills: ['UI Design', 'Posters', 'Brand Identity'],
    socials: {
      linkedin: '#',
      twitter: '#',
      mail: 'mailto:aarav@example.com',
    },
  },
];

export default function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedMember, setSelectedMember] = useState<(typeof team)[number] | null>(null);

  const departments = useMemo(
    () => ['All', ...new Set(team.map((member) => member.department))],
    []
  );

  const filteredTeam =
    selectedDepartment === 'All'
      ? team
      : team.filter((member) => member.department === selectedDepartment);

  return (
    <section id="team" className="py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black dark:text-white font-bold tracking-[0.3em] uppercase text-[10px] mb-6 opacity-50"
          >
            The Visionaries
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-8 uppercase tracking-tighter leading-[0.9]"
          >
            Meet Our <br /> <span className="opacity-30">Leadership</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black/60 dark:text-white/60 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            A passionate team of students building a strong culture of innovation, entrepreneurship, and collaboration at E-Cell RV University.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border transition-all duration-300 ${
                selectedDepartment === department
                  ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                  : 'border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              }`}
            >
              {department}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group border border-black dark:border-white overflow-hidden bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] bg-white text-black dark:bg-black dark:text-white border border-black dark:border-white">
                  {member.department}
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">
                  {member.name}
                </h4>
                <p className="text-[11px] uppercase tracking-[0.25em] opacity-60 font-bold mb-2">
                  {member.role}
                </p>
                <p className="text-sm opacity-60 font-medium mb-6">{member.year}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] uppercase tracking-[0.18em] px-3 py-2 border border-black/20 dark:border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-sm font-bold uppercase tracking-[0.2em]"
                  >
                    View Profile
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={member.socials.linkedin}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.socials.mail}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 bg-black/70 p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover min-h-[320px]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold mb-3">
                        {selectedMember.department}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">
                        {selectedMember.name}
                      </h3>
                      <p className="text-sm uppercase tracking-[0.22em] opacity-60 font-bold">
                        {selectedMember.role}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedMember(null)}
                      className="border border-black dark:border-white p-2"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-base opacity-70 leading-relaxed mb-6">
                    {selectedMember.bio}
                  </p>

                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold mb-3">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] uppercase tracking-[0.18em] px-3 py-2 border border-black/20 dark:border-white/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold mb-2">
                      Academic Year
                    </p>
                    <p className="font-medium">{selectedMember.year}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={selectedMember.socials.linkedin}
                      className="border border-black dark:border-white p-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={selectedMember.socials.twitter}
                      className="border border-black dark:border-white p-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={selectedMember.socials.mail}
                      className="border border-black dark:border-white p-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}