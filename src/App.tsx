import React from 'react';
import ParallaxSection from './components/ParallaxSection';
import VideoBackground from './components/VideoBackground';

// Placeholder video URLs - Replace with actual assets later
const VIDEOS = {
  hero: "https://assets.mixkit.co/videos/preview/mixkit-white-abstract-waves-flowing-smoothly-28068-large.mp4", // Abstract clean
  corporate: "https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-modern-office-4277-large.mp4", // Office/Working
  creative: "https://assets.mixkit.co/videos/preview/mixkit-ink-falling-into-water-macro-shot-1681-large.mp4", // Artistic/Ink
  connect: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" // Space/Connect
};

const App: React.FC = () => {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar text-white bg-black">
      
      {/* 1. Hero Section */}
      <ParallaxSection id="hero" className="font-sans">
        <VideoBackground src={VIDEOS.hero} />
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-thin tracking-tighter mb-4">
            The Multi-Persona
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 tracking-widest uppercase">
            VA • HR • Teacher • Artist
          </p>
        </div>
      </ParallaxSection>

      {/* 2. Corporate Section (HR/VA/Teacher) - Clean, Serif */}
      <ParallaxSection id="corporate" className="font-serif">
        <VideoBackground src={VIDEOS.corporate} />
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/15 transition duration-500 max-w-xl">
                 <h2 className="text-5xl md:text-7xl mb-6 font-medium">The Professional</h2>
                 <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-4">
                    Virtual Assistance. Human Resources. Education.
                 </p>
                 <p className="text-base md:text-lg font-light opacity-80">
                    Delivering structured excellence and strategic support across corporate landscapes.
                    Precision, empathy, and efficiency are the pillars of my work.
                 </p>
            </div>
        </div>
      </ParallaxSection>

      {/* 3. Creative Section (Tattoo/Nails) - Bold, Expressive */}
      <ParallaxSection id="creative" className="font-display">
        <VideoBackground src={VIDEOS.creative} />
        <div className="p-10 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl max-w-2xl text-right ml-auto mr-4 md:mr-20">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tight mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Ink & Art
            </h2>
            <p className="text-2xl md:text-3xl font-bold tracking-wide mb-2 text-white">
                Tattoo Artist & Nail Technician
            </p>
            <p className="text-lg md:text-xl font-medium opacity-80 text-gray-200">
                Where expression meets permanence. Creating unique visuals that tell your story on your skin.
            </p>
        </div>
      </ParallaxSection>

      {/* 4. Connect Section */}
      <ParallaxSection id="connect" className="font-sans">
        <VideoBackground src={VIDEOS.connect} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-center h-full">
                <h2 className="text-5xl font-thin mb-4">Connect</h2>
                <p className="text-xl opacity-80 mb-8">Ready to collaborate across any dimension?</p>
                <button className="px-8 py-4 bg-white text-black font-semibold tracking-widest rounded-full hover:scale-105 transition-transform duration-300">
                    BOOK A SESSION
                </button>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-center gap-4">
                <div className="text-2xl font-light">email@example.com</div>
                <div className="text-2xl font-light">+1 (555) 123-4567</div>
                <div className="flex gap-4 mt-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
                    <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
                    <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
                </div>
            </div>
        </div>
      </ParallaxSection>

    </main>
  );
};

export default App;
