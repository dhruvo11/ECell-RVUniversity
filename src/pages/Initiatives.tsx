import React from 'react';
import { motion } from 'motion/react';
import WordRotator from '../components/WordRotator';
import { 
  Zap, 
  Globe, 
  Shield, 
  Cpu, 
  BarChart3, 
  MessageSquare,
  ArrowUpRight,
  Rocket,
  Target,
  Award
} from 'lucide-react';

const detailedInitiatives = [
  {
    title: 'Incubation Program',
    description: 'A 6-month intensive program to take your MVP to market with dedicated mentorship, office space, and technical support.',
    icon: Zap,
    tag: 'Flagship',
    details: ['Dedicated Workspace', 'Cloud Credits', 'Technical Mentorship', 'Legal Support']
  },
  {
    title: 'Investor Connect',
    description: 'Direct access to top VCs and Angel Investors for seed and Series A funding through our periodic demo days.',
    icon: Globe,
    tag: 'Networking',
    details: ['Pitch Deck Review', 'VC Coffee Chats', 'Demo Day Access', 'Term Sheet Support']
  },
  {
    title: 'Skill Workshops',
    description: 'Hands-on sessions on product design, growth hacking, and legal compliance led by industry veterans.',
    icon: Cpu,
    tag: 'Education',
    details: ['UI/UX Design', 'Growth Marketing', 'Financial Modeling', 'Tech Stack Selection']
  },
  {
    title: 'Startup Expo',
    description: 'Showcase your startup to thousands of students, faculty, and industry leaders at our annual flagship exhibition.',
    icon: BarChart3,
    tag: 'Visibility',
    details: ['Exhibition Booth', 'Media Coverage', 'Product Launchpad', 'B2B Networking']
  },
  {
    title: 'Mentorship Circle',
    description: 'One-on-one sessions with successful alumni founders and industry experts to solve your specific business challenges.',
    icon: MessageSquare,
    tag: 'Support',
    details: ['Founder Matching', 'Weekly Check-ins', 'Domain Expertise', 'Crisis Management']
  },
  {
    title: 'Legal & IP Support',
    description: 'Assistance with company registration, IP filing, and legal documentation to ensure your startup is compliant.',
    icon: Shield,
    tag: 'Compliance',
    details: ['Company Incorporation', 'Trademark Filing', 'Patent Support', 'Contract Drafting']
  },
  {
    title: 'Global Immersion',
    description: 'Opportunities to visit international startup hubs and learn from global ecosystems through our partner network.',
    icon: Rocket,
    tag: 'Global',
    details: ['International Tours', 'Cross-border Mentorship', 'Global Market Entry', 'Foreign Exchange']
  },
  {
    title: 'Social Impact Lab',
    description: 'Supporting startups that aim to solve pressing social and environmental challenges through sustainable business models.',
    icon: Target,
    tag: 'Impact',
    details: ['ESG Compliance', 'Impact Assessment', 'Social VC Connect', 'Community Pilot']
  },
  {
    title: 'Innovation Awards',
    description: 'Recognizing and rewarding the most innovative ideas and startups within the RV University community.',
    icon: Award,
    tag: 'Recognition',
    details: ['Cash Prizes', 'Trophy & Citation', 'Hall of Fame', 'Press Release']
  }
];

export default function InitiativesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
            Our <WordRotator words={['Initiatives', 'Programs', 'Ecosystem']} className="text-indigo-600 dark:text-indigo-400" />
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-3xl font-medium leading-relaxed">
            ECell RV University provides a comprehensive ecosystem designed to support entrepreneurs 
            at every stage of their journey—from ideation to scaling and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {detailedInitiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 border border-black dark:border-white overflow-hidden hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
            >
              <div className="lg:col-span-4 p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black dark:border-white bg-slate-50 dark:bg-white/5 group-hover:bg-transparent transition-colors">
                <div>
                  <item.icon className="w-12 h-12 stroke-1 mb-8" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 mb-4 block">
                    {item.tag}
                  </span>
                  <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">{item.title}</h2>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              
              <div className="lg:col-span-8 p-12 lg:p-16 flex flex-col justify-center">
                <p className="text-xl opacity-70 mb-12 font-medium leading-relaxed">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                      <span className="text-sm font-bold uppercase tracking-wider opacity-60">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 bg-indigo-600 text-white text-center border border-black dark:border-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
            Have a project in mind?
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Whether you're just starting out or looking to scale, our initiatives are here to help you succeed.
          </p>
          <button className="bg-white text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95">
            Apply for Incubation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
