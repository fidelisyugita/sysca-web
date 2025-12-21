import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  src: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);
  const isWebP = src.toLowerCase().endsWith('.webp');

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-black">
      {/* Loading State / Blur Effect */}
      <motion.div
        className="absolute inset-0 z-10 bg-black/20 backdrop-blur-2xl transition-opacity duration-1000 ease-in-out"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        pointerEvents="none"
      />
      
      {isWebP ? (
        <img
          src={src}
          alt="background"
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${isLoading ? 'scale-105 blur-lg opacity-0' : 'scale-100 blur-0 opacity-100'}`}
          onLoad={handleLoad}
        />
      ) : (
        <video
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${isLoading ? 'scale-105 blur-lg opacity-0' : 'scale-100 blur-0 opacity-100'}`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleLoad}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/20" /> 
    </div>
  );
};

export default VideoBackground;
