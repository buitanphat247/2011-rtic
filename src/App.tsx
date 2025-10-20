import InspirationalSlide from "./components/InspirationalSlide";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ScrollProgress from "./components/LoadingProgress";
import "./App.css";
import Header from "./layout/Header";
import { useEffect, useState } from "react";
import LoveLetter from "./components/LoveLetter";

// Heart component for decorative hearts
const HeartIcon = ({ color, delay, index }: { color: string; delay: number; index: number }) => (
  <div
    key={index}
    className="w-12 h-12 border-2 rounded-full flex items-center justify-center animate-float"
    style={{
      animationDelay: `${delay}s`,
      borderColor: color,
    }}
  >
    <span className="text-2xl" style={{ color }}>
      ♥
    </span>
  </div>
);

const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [showScrollProgress, setShowScrollProgress] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  // Function to calculate header height dynamically
  const calculateHeaderHeight = () => {
    const header = document.querySelector("header");
    if (header) {
      const height = header.offsetHeight;
      setHeaderHeight(height);
    }
  };

  // Update header height on mount and resize
  useEffect(() => {
    calculateHeaderHeight();
    window.addEventListener("resize", calculateHeaderHeight);
    return () => window.removeEventListener("resize", calculateHeaderHeight);
  }, []);

  // Show scroll progress after splash screen
  useEffect(() => {
    const handler = () => {
      setShowScrollProgress(true);
      setShowLetter(true);
    };
    window.addEventListener("splash:done", handler);
    return () => window.removeEventListener("splash:done", handler);
  }, []);

  // Heart data for decorative hearts
  const hearts = [
    { color: "#E53E3E", delay: 0 },
    { color: "#805AD5", delay: 0.5 },
    { color: "#D53F8C", delay: 1 },
    { color: "#E53E3E", delay: 1.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100">
      <SplashScreen />
      {showScrollProgress && <ScrollProgress />}
      <Header />
      {showLetter && (
        <LoveLetter
          title="Gửi em"
          message={`Gửi đến tất cả những người phụ nữ tuyệt vời ✨
Chúc các chị, các mẹ, và các bạn gái một ngày 20/10 thật nhiều niềm vui, hạnh phúc và yêu thương.
Cảm ơn vì sự dịu dàng, mạnh mẽ và những hy sinh thầm lặng mà mọi người đã mang đến cho cuộc sống này.
Chúc mọi người luôn xinh đẹp, tự tin và thành công trong hành trình của chính mình — không chỉ hôm nay, mà là mỗi ngày trong năm. 💐`}
          fromText="From HCM UTE Research on Technology and Innovation Club"
          appearDelayMs={0}
          appearDurationMs={2000}
          onClose={() => setShowLetter(false)}
        />
      )}

      {/* Main Content */}
      <main style={{ paddingTop: `${headerHeight + 20}px` }}>
        <div className="max-w-4xl mx-auto pb-10">
          {/* Flex Container for all content */}
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            {/* Date Banner */}
            <div className="flex items-center justify-center gap-4 animate-fade-in-up">
              <div className="bg-white flex items-center justify-center gap-2 rounded-full p-3 border-2 border-pink-300">
                <div className="w-6 h-6 flex items-center justify-center animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-pink-600"
                  >
                    <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                    <path d="M12 8l0 13" />
                    <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                    <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                  </svg>
                </div>

                <span className="font-medium text-xl " style={{ color: "rgb(60, 60, 60)", fontFamily: "Roboto, sans-serif" }}>
                  20/10/2025
                </span>
                <div className="w-6 h-6 flex items-center justify-center animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-pink-600"
                  >
                    <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                    <path d="M12 8l0 13" />
                    <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                    <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <div className="flex flex-col items-center space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1
                className="text-7xl md:text-8xl font-bold animate-gentle-float"
                style={{ fontFamily: "Roboto, sans-serif", color: "#2D3748", textShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              >
                Chúc mừng
              </h1>
              <div className="flex flex-col items-center space-y-4 text-6xl md:text-7xl font-bold" style={{ fontFamily: "Roboto, sans-serif" }}>
                <span className="animate-gentle-pulse" style={{ color: "#E53E3E", textShadow: "0 4px 12px rgba(229, 62, 62, 0.3)" }}>
                  Ngày Phụ nữ
                </span>
                <span className="animate-gentle-rotate" style={{ color: "#805AD5", textShadow: "0 4px 12px rgba(128, 90, 213, 0.3)" }}>
                  Việt Nam
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <div className="flex flex-col items-center max-w-4xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-2xl md:text-3xl leading-relaxed animate-gentle-float" style={{ fontFamily: "Roboto, sans-serif", color: "#4A5568" }}>
                <span className="animate-gentle-pulse" style={{ color: "#2D3748", fontWeight: "600" }}>
                  Tôn vinh
                </span>{" "}
                <span className="font-bold animate-gentle-pulse" style={{ color: "#E53E3E" }}>
                  sức mạnh
                </span>
                ,{" "}
                <span className="font-bold animate-gentle-rotate" style={{ color: "#805AD5" }}>
                  trí tuệ
                </span>{" "}
                và{" "}
                <span className="font-bold animate-gentle-pulse" style={{ color: "#D53F8C" }}>
                  sự sáng tạo
                </span>{" "}
                <span className="animate-gentle-float" style={{ color: "#2D3748", fontWeight: "600" }}>
                  của phụ nữ trong thời đại công nghệ
                </span>
              </p>
            </div>

            {/* Decorative Hearts */}
            <div className="flex justify-center items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              {hearts.map((heart, index) => (
                <HeartIcon key={index} color={heart.color} delay={heart.delay} index={index} />
              ))}
            </div>

            {/* Call-to-Action Buttons */}
          </div>
        </div>

        {/* Women in Tech Section */}
      
        {/* Inspirational Slide Section */}
        <InspirationalSlide />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom Right Decoration */}
      <div className="fixed bottom-8 right-8 opacity-30 animate-fade-in-up" style={{ animationDelay: "1s" }}>
        <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center animate-pulse-glow" style={{ borderColor: "#805AD5" }}>
          <span className="text-2xl animate-float" style={{ color: "#805AD5" }}>
            ⭐
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
