import React from 'react';
import { Rocket, Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-32 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-white p-1 rounded-sm">
                <img 
                  src="input_file_0.png" 
                  alt="ECell Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <img 
                src="input_file_1.png" 
                alt="RV University Logo" 
                className="h-10 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/60 leading-relaxed font-medium">
              The official Entrepreneurship Cell of RV University. Empowering students to innovate, lead, and build the future.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 border border-white/10 hover:bg-white hover:text-black transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="opacity-60 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/initiatives" className="opacity-60 hover:opacity-100 transition-opacity">Initiatives</Link></li>
              <li><Link to="/events" className="opacity-60 hover:opacity-100 transition-opacity">Events</Link></li>
              <li><Link to="/gallery" className="opacity-60 hover:opacity-100 transition-opacity">Gallery</Link></li>
              <li><a href="/#team" className="opacity-60 hover:opacity-100 transition-opacity">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Startup Guide', 'Investor Deck', 'Mentorship Form', 'Legal Help', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 opacity-40 shrink-0" />
                <span className="opacity-60">RV Vidyanikethan Post, Mysuru Road, Bengaluru, Karnataka 560059</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 opacity-40 shrink-0" />
                <span className="opacity-60">+91 80 6717 8021</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 opacity-40 shrink-0" />
                <span className="opacity-60">ecell@rvu.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
          <p>© {new Date().getFullYear()} ECell RV University. All rights reserved. Designed for the founders of tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
