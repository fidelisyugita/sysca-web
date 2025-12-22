import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import ImageCarousel from '../components/ImageCarousel';

// Video Assets
import heroVideo from '../assets/hero.webp';
import corporateVideo from '../assets/corporate.webp';
import creativeVideo from '../assets/creative.webp';

// Reuse videos from Home for now
const VIDEOS = {
  hero: heroVideo,
  admin: corporateVideo,
  marketing: creativeVideo,
  hr: heroVideo
};

// Standalone Images
import aboutMeImg from '../assets/portfolio/about-me.png';
import reviewImg from '../assets/portfolio/review.png';
import usedToolsImg from '../assets/portfolio/used-tools.png';
import whatIDoImg from '../assets/portfolio/what-i-do.png';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Portfolio: React.FC = () => {
    // Dynamic imports for carousels
    // Note: In Vite, import.meta.glob returns an object { path: importFn }. 
    // We use eager: true to get the modules directly.
    const adminImages = useMemo(() => {
        const modules = import.meta.glob('../assets/portfolio/Admin Tasks/*.{png,jpg,jpeg}', { eager: true, as: 'url' });
        return Object.values(modules);
    }, []);

    const marketingImages = useMemo(() => {
        const modules = import.meta.glob('../assets/portfolio/Digital Marketing/*.{png,jpg,jpeg}', { eager: true, as: 'url' });
        return Object.values(modules);
    }, []);

    const hrImages = useMemo(() => {
        const modules = import.meta.glob('../assets/portfolio/People & Growth/*.{png,jpg,jpeg}', { eager: true, as: 'url' });
        return Object.values(modules);
    }, []);

  return (
    <main className="min-h-screen w-full bg-black text-white selection:bg-purple-500/30">
      <Navigation />
      
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
         <VideoBackground src={VIDEOS.hero} />
         <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-32">
        
        {/* 1. Intro / Header */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="flex flex-col md:flex-row items-center gap-12"
            >
               <div className="flex-1 text-left p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
                  <h1 className="text-5xl md:text-7xl font-thin tracking-tighter mb-4">
                    The Portfolio
                  </h1>
                  <p className="text-xl md:text-2xl font-light opacity-90 tracking-widest uppercase mb-8 text-purple-200">
                    Admin Support • Digital Marketing • People & Growth
                  </p>
                  <p className="text-lg opacity-80 font-light italic leading-relaxed">
                     "Your growth partner for seamless operations & impactful results. I specialize in taking the chaos out of your daily business grind so you can focus on what you do best."
                  </p>
               </div>
               
               <div className="w-full md:w-1/3">
                  <img 
                    src={aboutMeImg} 
                    alt="About Sysca" 
                    className="w-full h-auto rounded-3xl opacity-90 border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
                  />
               </div>
            </motion.div>
        </section>

        {/* 2. What I Do (New Section) */}
        <section className="font-sans">
             <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeInUp}
                 className="flex flex-col items-center"
             >
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-medium mb-4">What I Do</h2>
                    <div className="w-24 h-1 bg-purple-400 mx-auto opacity-50"></div>
                </div>
                <div className="w-full max-w-5xl p-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                    <img 
                        src={whatIDoImg} 
                        alt="Services Summary" 
                        className="w-full h-auto rounded-2xl opacity-95"
                    />
                </div>
             </motion.div>
        </section>

        {/* 3. Admin & Support */}
        <section id="admin" className="font-sans scroll-mt-24">
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 variants={fadeInUp}
                 className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg w-full md:w-2/5 flex flex-col justify-center"
              >
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <h2 className="text-3xl md:text-5xl font-medium">Administrative &<br/>Personal Support</h2>
                </div>
                
                <ul className="space-y-4 opacity-90 text-lg font-light mb-10 list-disc list-inside marker:text-purple-300">
                  <li>Calendar & Email Management</li>
                  <li>Travel Arrangements & Itineraries</li>
                  <li>Research & Data Entry</li>
                  <li>Personal Assisting & Lifestyle Management</li>
                  <li>1-on-1 Goal Setting Sessions</li>
                </ul>
              </motion.div>
              
              <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeInUp}
                 className="flex-1"
              >
                  <div className="sticky top-24">
                     <ImageCarousel images={adminImages} aspectRatio="aspect-video" />
                     <p className="mt-4 text-center text-sm opacity-60 italic">Sample works from Administrative Tasks</p>
                  </div>
              </motion.div>
            </div>
        </section>

        {/* 4. Digital Marketing */}
        <section id="marketing" className="font-sans scroll-mt-24">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-stretch">
                 <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg w-full md:w-2/5 flex flex-col justify-center text-right"
                 >
                     <div className="mb-8 border-b border-white/10 pb-4 flex justify-end">
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-500">
                            Digital Marketing
                        </h2>
                     </div>

                    <ul className="space-y-4 opacity-90 text-lg font-light mb-10 inline-block text-right">
                        <li>Social Media Setup & Strategy •</li>
                        <li>Content Creation & Copywriting •</li>
                        <li>Community Management •</li>
                        <li>Landing Page Optimization •</li>
                        <li>Ad Performance Tracking •</li>
                    </ul>
                 </motion.div>

                 <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex-1"
                 >
                     <div className="sticky top-24">
                        <ImageCarousel images={marketingImages} aspectRatio="aspect-video" />
                        <p className="mt-4 text-center text-sm opacity-60 italic">Success stories & creatives</p>
                     </div>
                 </motion.div>
            </div>
        </section>

        {/* 5. People & Growth (HR) */}
        <section id="hr" className="font-sans scroll-mt-24">
             <div className="flex flex-col md:flex-row gap-8 items-stretch">
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 variants={fadeInUp}
                 className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg flex-1"
               >
                 <div className="mb-8 border-b border-white/10 pb-4">
                     <h2 className="text-3xl md:text-5xl font-medium">People & Growth</h2>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-8 mb-10">
                     <div>
                         <h3 className="text-xl font-semibold mb-3 text-purple-200 border-b border-purple-200/20 pb-2">Human Resources</h3>
                         <ul className="space-y-3 opacity-80 text-sm font-light list-disc list-inside">
                             <li>Recruitment & Screening</li>
                             <li>Interview Coordination</li>
                             <li>SOP Development</li>
                             <li>Onboarding Processes</li>
                         </ul>
                     </div>
                     <div>
                         <h3 className="text-xl font-semibold mb-3 text-purple-200 border-b border-purple-200/20 pb-2">Education & Training</h3>
                         <ul className="space-y-3 opacity-80 text-sm font-light list-disc list-inside">
                             <li>Private Tutoring</li>
                             <li>Lesson Planning</li>
                             <li>Training Materials</li>
                             <li>Workshop Facilitation</li>
                         </ul>
                     </div>
                 </div>
               </motion.div>
               
               <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="w-full md:w-1/2"
               >
                  <div className="sticky top-24">
                     <ImageCarousel images={hrImages} aspectRatio="aspect-video" />
                     <p className="mt-4 text-center text-sm opacity-60 italic">Training materials & SOPs</p>
                  </div>
               </motion.div>
             </div>
        </section>

        {/* 6. Tools (New Section) */}
        <section className="font-sans py-12">
             <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeInUp}
                 className="flex flex-col items-center"
             >
                <div className="mb-12 text-center">
                    <h2 className="text-2xl md:text-4xl font-light mb-2 tracking-widest uppercase opacity-80">Tools I Use</h2>
                </div>
                <div className="w-full max-w-4xl p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <img 
                        src={usedToolsImg} 
                        alt="Tools Stack" 
                        className="w-full h-auto rounded-xl opacity-90 invert-0"
                    />
                </div>
             </motion.div>
        </section>

        {/* 7. Reviews (New Section) */}
        <section className="font-sans py-12 bg-white/5 mx-auto w-full max-w-6xl rounded-[3rem]">
             <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeInUp}
                 className="flex flex-col items-center p-8"
             >
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif italic mb-4">Client Love</h2>
                </div>
                <div className="w-full max-w-4xl">
                    <img 
                        src={reviewImg} 
                        alt="Client Reviews" 
                        className="w-full h-auto rounded-xl shadow-2xl"
                    />
                </div>
             </motion.div>
        </section>

        {/* 8. Footer / Connect */}
        <section className="min-h-[50vh] flex flex-col items-center justify-center text-center pb-24 font-sans pt-24">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="text-4xl md:text-6xl font-thin mb-12">Ready to Start?</h2>
                <div className="flex gap-6 flex-wrap justify-center">
                    <Link to="/?book=true" className="px-10 py-5 bg-white text-black font-semibold tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        BOOK A SESSION
                    </Link>
                    <a href="mailto:sysca.works@gmail.com" className="px-10 py-5 bg-white/5 text-white border border-white/20 font-semibold tracking-widest rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                        EMAIL ME
                    </a>
                </div>
                 <div className="mt-16 opacity-60 text-sm">
                    <Link to="/" className="hover:text-purple-300 transition-colors uppercase tracking-widest">← Back to Home</Link>
                </div>
            </motion.div>
        </section>

      </div>
    </main>
  );
};

export default Portfolio;
