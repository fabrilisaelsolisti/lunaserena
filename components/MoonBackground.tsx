import React, { useEffect, useState } from 'react';

const MoonBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{top: string, left: string, delay: string, size: string}>>([]);

  useEffect(() => {
    // Generate random stars for the background
    const newStars = Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      size: `${Math.random() * 2 + 1}px`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Night Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0B0C15] to-[#1A1821]"></div>
      
      {/* Moon Glow (Top Right) */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-luna-base rounded-full opacity-10 blur-3xl"></div>
      
      {/* Bottom Fog/Mist */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/40 to-transparent"></div>

      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay
          }}
        />
      ))}
    </div>
  );
};

export default MoonBackground;