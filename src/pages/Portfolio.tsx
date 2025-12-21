import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ParallaxSection from '../components/ParallaxSection';
import VideoBackground from '../components/VideoBackground';

// Reuse videos from Home for now, can be swapped later
const VIDEOS = {
  hero: "/hero.webp", // Intro
  admin: "/corporate.webp", // Support
  marketing: "/creative.webp", // Marketing
  hr: "/hero.webp" // HR
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Portfolio: React.FC = () => {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar text-white bg-black">
      <Navigation />

      {/* 1. Intro / Header */}
      <ParallaxSection id="portfolio-hero" className="font-sans">
        <VideoBackground src={VIDEOS.hero} />
        <div className="flex flex-col h-[calc(50vh)] items-center justify-center text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl max-w-4xl">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-thin tracking-tighter mb-4">
            The Portfolio
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light opacity-90 tracking-widest uppercase mb-8">
            Admin Support • Digital Marketing • People & Growth
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg opacity-80 max-w-2xl font-light">
             "Your growth partner for seamless operations & impactful results."
          </motion.p>
        </div>
      </ParallaxSection>

      {/* 2. Admin & Support */}
      <ParallaxSection id="admin" className="font-serif">
        <VideoBackground src={VIDEOS.admin} />
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl px-4">
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg flex-1">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl mb-6 font-medium">Administrative & Personal Support</motion.h2>
            <motion.ul variants={fadeInUp} className="space-y-3 opacity-90 text-lg font-light mb-8">
              <li>• Calendar & Email Management</li>
              <li>• Travel Arrangements & Itineraries</li>
              <li>• Research & Data Entry</li>
              <li>• Personal Assisting & Lifestyle Management</li>
              <li>• 1-on-1 Goal Setting Sessions</li>
            </motion.ul>
             <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-2">Work Sample</h3>
                <p className="text-sm opacity-80 italic">"Managed complex international travel logistics and daily scheduling for C-suite executives, ensuring zero conflicts and optimized productivity."</p>
             </div>
          </div>
        </div>
      </ParallaxSection>

      {/* 3. Digital Marketing */}
      <ParallaxSection id="marketing" className="font-sans">
        <VideoBackground src={VIDEOS.marketing} />
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl px-4">
            {/* Note: In a real scenario, we might want this to be visually distinct, maybe swapped layout */}
             <div className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg flex-1 text-right">
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Digital Marketing
                </motion.h2>
                <motion.ul variants={fadeInUp} className="space-y-3 opacity-90 text-lg font-light mb-8">
                    <li>Social Media Setup & Strategy •</li>
                    <li>Content Creation & Copywriting •</li>
                    <li>Community Management •</li>
                    <li>Landing Page Optimization •</li>
                    <li>Ad Performance Tracking •</li>
                </motion.ul>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5 inline-block text-left">
                    <h3 className="text-sm uppercase tracking-wider text-pink-300 mb-2">Work Sample</h3>
                    <p className="text-sm opacity-80 italic">"Developed comprehensive content calendars and high-converting copy that increased engagement by 40% within 3 months."</p>
                </div>
             </div>
        </div>
      </ParallaxSection>

      {/* 4. People & Growth (HR) */}
      <ParallaxSection id="hr" className="font-serif">
        <VideoBackground src={VIDEOS.hr} />
         <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl px-4">
           <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg flex-1">
             <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl mb-6 font-medium">People & Growth</motion.h2>
             <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
                 <div>
                     <h3 className="text-xl font-semibold mb-2 text-purple-200">Human Resources</h3>
                     <ul className="space-y-2 opacity-80 text-sm font-light">
                         <li>• Recruitment & Candidate Screening</li>
                         <li>• Interview Coordination</li>
                         <li>• SOP Development & Implementation</li>
                         <li>• Onboarding Processes</li>
                     </ul>
                 </div>
                 <div>
                     <h3 className="text-xl font-semibold mb-2 text-purple-200">Education & Training</h3>
                     <ul className="space-y-2 opacity-80 text-sm font-light">
                         <li>• Private Tutoring (English/Bahasa)</li>
                         <li>• Lesson Planning & Curriculum Design</li>
                         <li>• Training Material Development</li>
                         <li>• Workshop Facilitation</li>
                     </ul>
                 </div>
             </motion.div>
             <div className="bg-white/5 p-4 rounded-xl border border-white/5 mt-6">
                 <h3 className="text-sm uppercase tracking-wider text-purple-300 mb-2">Work Sample</h3>
                 <p className="text-sm opacity-80 italic">"Designed and implemented new SOPs that streamlined team communication and reduced onboarding time by 2 weeks."</p>
             </div>
           </div>
         </div>
      </ParallaxSection>

      {/* 5. Footer / Connect */}
      <ParallaxSection id="connect" className="font-sans">
        <VideoBackground src={VIDEOS.hero} />
        <div className="flex flex-col items-center justify-center p-8 text-center max-w-3xl">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-thin mb-8">Ready to Start?</motion.h2>
            <motion.div variants={fadeInUp} className="flex gap-4 flex-wrap justify-center">
                <Link to="/?book=true" className="px-8 py-4 bg-white text-black font-semibold tracking-widest rounded-full hover:scale-105 transition-transform duration-300">
                    BOOK A SESSION
                </Link>
                <a href="mailto:sysca.works@gmail.com" className="px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold tracking-widest rounded-full hover:bg-white/20 transition-all duration-300">
                    EMAIL ME
                </a>
            </motion.div>
             <motion.div variants={fadeInUp} className="mt-12 opacity-60 text-sm">
                <Link to="/" className="hover:text-purple-300 transition-colors">← Back to Home</Link>
            </motion.div>
        </div>
      </ParallaxSection>

    </main>
  );
};

export default Portfolio;
