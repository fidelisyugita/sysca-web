import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ParallaxSection from '../components/ParallaxSection';
import VideoBackground from '../components/VideoBackground';
import BookingModal from '../components/BookingModal';

// Local WebP Assets
const VIDEOS = {
  hero: "/hero.webp",
  corporate: "/corporate.webp",
  creative: "/creative.webp",
  connect: "/hero.webp" 
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

const Home: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const [initialServiceId, setInitialServiceId] = useState<string | null>(null);

  // Check for auto-booking params (e.g. from Quiz result)
  useEffect(() => {
      const shouldBook = searchParams.get('book') === 'true';
      const serviceId = searchParams.get('serviceId');
      
      if (shouldBook) {
          if (serviceId) setInitialServiceId(serviceId);
          setIsBookingOpen(true);
      }
  }, [searchParams]);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar text-white bg-black">
      
      <Navigation />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => {
            setIsBookingOpen(false);
            setInitialServiceId(null);
        }} 
        initialServiceId={initialServiceId}
      />

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
            <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/15 transition duration-500 max-w-xl flex flex-col items-start">
                 <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl mb-6 font-medium">The Professional</motion.h2>
                 <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed opacity-90 mb-4">
                    Virtual Assistance. Human Resources. Education.
                 </motion.p>
                 <motion.p variants={fadeInUp} className="text-base md:text-lg font-light opacity-80 mb-8">
                    Delivering structured excellence and strategic support across corporate landscapes.
                    Precision, empathy, and efficiency are the pillars of my work.
                 </motion.p>
                 
                 {/* Gamification Hook */}
                 <motion.div variants={fadeInUp}>
                     <Link to="/quiz" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all backdrop-blur-sm border border-white/20">
                        <span>Not sure of your level? Play the Game to find out.</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                     </Link>
                 </motion.div>
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
                <a href="mailto:sysca.works@gmail.com" className="text-2xl font-light hover:text-purple-300 transition-colors">sysca.works@gmail.com</a>
                {/* <a href="https://t.me/+6283175009000" target="_blank" rel="noopener noreferrer" className="text-2xl font-light hover:text-purple-300 transition-colors">+62 831 7500 9000</a> */}
                <div className="flex gap-4 mt-4">
                    {/* Telegram */}
                    <a href="https://t.me/+6283175009000" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors flex items-center justify-center group" aria-label="Telegram">
                         <svg className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                         </svg>
                    </a>
                    {/* Instagram */}
                    <a href="https://instagram.com/hi.ssysc" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors flex items-center justify-center group" aria-label="Instagram">
                        <svg className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    {/* Email */}
                    <a href="mailto:sysca.works@gmail.com" className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors flex items-center justify-center group" aria-label="Email">
                        <svg className="w-6 h-6 stroke-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </a>
                </div>
            </motion.div>
        </div>
      </ParallaxSection>

    </main>
  );
};

export default Home;
