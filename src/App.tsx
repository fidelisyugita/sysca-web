import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Navigation from './components/Navigation';
import ParallaxSection from './components/ParallaxSection';
import VideoBackground from './components/VideoBackground';
import BookingModal from './components/BookingModal';

// Local WebP Assets
const VIDEOS = {
  hero: "/hero.webp",
  corporate: "/corporate.webp",
  creative: "/creative.webp",
  connect: "/hero.webp" // Reusing hero for connect as no specific asset was found
};

// Reusable animation variants for children
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar text-white bg-black">
      
      <Navigation />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* 1. Hero Section */}
      <ParallaxSection id="hero" className="font-sans">
        <VideoBackground src={VIDEOS.hero} />
        <div className="flex flex-col h-[calc(50vh)] items-center justify-center text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl max-w-3xl">
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-thin tracking-tighter mb-4">
            Sysca Anggelia
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light opacity-90 tracking-widest uppercase">
            VA • HR • Teacher • Artist
          </motion.p>
        </div>
      </ParallaxSection>

      {/* 2. Corporate Section (HR/VA/Teacher) - Clean, Serif */}
      <ParallaxSection id="corporate" className="font-serif">
        <VideoBackground src={VIDEOS.corporate} />
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/15 transition duration-500 max-w-xl">
                 <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl mb-6 font-medium">The Professional</motion.h2>
                 <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed opacity-90 mb-4">
                    Virtual Assistance. Human Resources. Education.
                 </motion.p>
                 <motion.p variants={fadeInUp} className="text-base md:text-lg font-light opacity-80">
                    Delivering structured excellence and strategic support across corporate landscapes.
                    Precision, empathy, and efficiency are the pillars of my work.
                 </motion.p>
            </div>
        </div>
      </ParallaxSection>

      {/* 3. Creative Section (Tattoo/Nails) - Bold, Expressive */}
      <ParallaxSection id="creative" className="font-display">
        <VideoBackground src={VIDEOS.creative} />
        <div className="p-10 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl max-w-2xl text-right ml-auto mr-4 md:mr-20">
            <motion.h2 variants={fadeInUp} className="text-6xl md:text-9xl font-bold tracking-tight mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Ink & Art
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-bold tracking-wide mb-2 text-white">
                Tattoo Artist & Nail Technician
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl font-medium opacity-80 text-gray-200">
                Where expression meets permanence. Creating unique visuals that tell your story on your skin.
            </motion.p>
        </div>
      </ParallaxSection>

      {/* 4. Connect Section */}
      <ParallaxSection id="connect" className="font-sans">
        <VideoBackground src={VIDEOS.connect} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-center h-full">
                <h2 className="text-5xl font-thin mb-4">Connect</h2>
                <p className="text-xl opacity-80 mb-8">Ready to collaborate across any dimension?</p>
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-4 bg-white text-black font-semibold tracking-widest rounded-full hover:scale-105 transition-transform duration-300"
                >
                    BOOK A SESSION
                </button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-center gap-4">
                <div className="text-2xl font-light">email@example.com</div>
                <div className="text-2xl font-light">+1 (555) 123-4567</div>
                <div className="flex gap-4 mt-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
                    <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
                    <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
                </div>
            </motion.div>
        </div>
      </ParallaxSection>

    </main>
  );
};

export default App;
