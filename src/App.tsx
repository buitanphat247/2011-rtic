import InspirationalSlide from "./components/InspirationalSlide";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ScrollProgress from "./components/LoadingProgress";
import "./App.css";
import Header from "./layout/Header";
import { useEffect, useState } from "react";

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
    const timer = setTimeout(() => {
      setShowScrollProgress(true);
    }, 5500); // 5 seconds splash + 500ms fade out

    return () => clearTimeout(timer);
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

      {/* Main Content */}
      <main style={{ paddingTop: `${headerHeight + 20}px` }}>
        <div className="max-w-4xl mx-auto pb-10">
          {/* Flex Container for all content */}
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            {/* Date Banner */}
            <div className="flex items-center justify-center gap-4 animate-fade-in-up">
              <div className="bg-white flex items-center justify-center gap-2 rounded-full p-3 border-2 border-pink-300">
                <div className="w-6 h-6 rounded flex items-center justify-center animate-pulse" style={{ backgroundColor: "rgb(233, 30, 99)" }}>
                  <span className="text-white text-sm">🎁</span>
                </div>
                <span className="font-medium text-xl " style={{ color: "rgb(60, 60, 60)", fontFamily: "Roboto, sans-serif" }}>
                  20/10/2025
                </span>
                <div className="w-6 h-6 rounded flex items-center justify-center animate-pulse" style={{ backgroundColor: "rgb(233, 30, 99)" }}>
                  <span className="text-white text-sm">🎁</span>
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              {/* Join Community Button */}
              <button
                className="group text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 hover:scale-105 cursor-pointer"
                style={{ background: "linear-gradient(135deg, #E53E3E, #805AD5)" }}
                onClick={() => window.open("https://www.facebook.com/hcmute.rtic", "_blank")}
              >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-sm">👥</span>
                </div>
                Tham gia cộng đồng
              </button>

              {/* Explore Project Button */}
              <button
                className="group bg-white border-2 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 hover:scale-105 cursor-pointer"
                style={{ borderColor: "#D53F8C", color: "#D53F8C", backgroundColor: "rgba(213, 63, 140, 0.05)" }}
                onClick={() => window.open("https://hcmutertic.com/#project", "_blank")}
              >
                <div
                  className="w-6 h-6 rounded flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"
                  style={{ backgroundColor: "rgba(213, 63, 140, 0.1)" }}
                >
                  <span className="text-sm font-mono" style={{ color: "#D53F8C" }}>{`</>`}</span>
                </div>
                Khám phá dự án
              </button>
            </div>
          </div>
        </div>

        {/* Women in Tech Section */}
        <section className="py-10 px-4 bg-gradient-to-br from-white via-pink-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            {/* Flex Container for all content */}
            <div className="flex flex-col items-center justify-center space-y-12 text-center">
              {/* Achievement Badge */}
              <div className="animate-fade-in-up">
                <div className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 animate-gentle-pulse">
                  <span className="animate-gentle-rotate">✨</span>
                  <span>Những thành tựu đáng tự hào</span>
                </div>
              </div>

              {/* Main Title */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 flex flex-col gap-5" style={{ fontFamily: "Roboto, sans-serif" }}>
                  <span className="block text-gray-800 animate-gentle-float">Phụ nữ trong</span>
                  <span
                    className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent pb-5 animate-gentle-pulse"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    Công nghệ
                  </span>
                </h2>
                <p
                  className="text-xl text-gray-600 max-w-3xl mx-auto animate-gentle-float"
                  style={{ fontFamily: "Roboto, sans-serif", animationDelay: "0.5s" }}
                >
                  Từ những nhà phát triển tài năng đến những lãnh đạo đầy cảm hứng
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                {/* Tech Innovators Card */}
                <div
                  className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-pink-300 hover:border-pink-400 cursor-pointer animate-gentle-float"
                  onClick={() => window.open("https://github.com", "_blank")}
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg animate-gentle-pulse">
                      <span className="text-white text-3xl font-mono">{`</>`}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4 animate-gentle-pulse" style={{ fontFamily: "Roboto, sans-serif" }}>
                      Tech Innovators
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "Roboto, sans-serif" }}>
                      Phụ nữ trong công nghệ đang tạo ra những đột phá vượt bậc
                    </p>
                  </div>
                </div>

                {/* Community Leaders Card */}
                <div
                  className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-purple-300 hover:border-purple-400 cursor-pointer animate-gentle-float"
                  onClick={() => window.open("https://www.facebook.com/hcmute.rtic", "_blank")}
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-gentle-pulse">
                      <span className="text-white text-3xl">👥</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4 animate-gentle-pulse" style={{ fontFamily: "Roboto, sans-serif" }}>
                      Community Leaders
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "Roboto, sans-serif" }}>
                      Dẫn dắt và truyền cảm hứng cho thế hệ trẻ
                    </p>
                  </div>
                </div>

                {/* Future Builders Card */}
                <div
                  className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300 hover:border-blue-400 cursor-pointer animate-gentle-float"
                  onClick={() => window.open("https://www.linkedin.com", "_blank")}
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg animate-gentle-pulse">
                      <span className="text-white text-3xl">🚀</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4 animate-gentle-pulse" style={{ fontFamily: "Roboto, sans-serif" }}>
                      Future Builders
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "Roboto, sans-serif" }}>
                      Xây dựng tương lai với sự sáng tạo và đam mê
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
