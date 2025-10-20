import { useState, useEffect } from 'react';
import reactLogo from '../assets/icon.png';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 5 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Hide splash after completion
          setTimeout(() => {
            setIsVisible(false);
            // thông báo Splash hoàn tất
            window.dispatchEvent(new CustomEvent('splash:done'));
          }, 500);
          return 100;
        }
        return prev + Math.random() * 3; // Slower progress for 5 seconds
      });
    }, 50); // More frequent updates for smoother animation

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-pink-300 via-purple-300 to-pink-400 flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon */}
        <div className="mb-8 animate-bounce">
          <div className="w-32 h-32 mx-auto bg-white/90 rounded-3xl flex items-center justify-center shadow-2xl">
            <img src={reactLogo} alt="logo" className="w-24 h-24" />
          </div>
        </div>

        {/* Title */}
        <h1 
          className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up"
          style={{ 
            fontFamily: "Roboto, sans-serif",
            background: "linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          20/10
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up"
          style={{ 
            fontFamily: "Roboto, sans-serif",
            animationDelay: "0.3s",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}
        >
          Ngày Phụ nữ Việt Nam
        </p>

        {/* Loading Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white/30 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <p 
          className="text-white/80 text-sm animate-pulse"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Đang tải trang web...
        </p>

        {/* Decorative Hearts */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center animate-float"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                color: "white"
              }}
            >
              <span className="text-lg">♥</span>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Percentage */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className="text-white/60 text-sm font-mono"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
