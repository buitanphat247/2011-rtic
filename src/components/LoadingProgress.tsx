import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    // Initial calculation
    updateScrollProgress();

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      {/* Main progress bar */}
      <div 
        className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out"
        style={{ width: `${Math.min(scrollProgress, 100)}%` }}
      >
        <div className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"></div>
      </div>
      
      {/* Glow effect */}
      <div 
        className="h-1 bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-pink-500/40 blur-sm -mt-1"
        style={{ width: `${Math.min(scrollProgress, 100)}%` }}
      ></div>
      
      {/* Shimmer effect */}
      <div 
        className="h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"
        style={{ width: `${Math.min(scrollProgress, 100)}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
