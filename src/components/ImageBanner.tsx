import { useState } from 'react';

// Import images
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';

const ImageBanner = () => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  const images = [
    {
      id: 1,
      src: image1,
      alt: "Phụ nữ Việt Nam trong công nghệ",
    },
    {
      id: 2,
      src: image2,
      alt: "Phụ nữ Việt Nam thành công",
    }
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: "Roboto, sans-serif",
              background: "linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Hình ảnh đẹp
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Những khoảnh khắc đẹp nhất của phụ nữ Việt Nam trong thời đại công nghệ
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Loading Placeholder */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-pink-600 font-medium">Đang tải hình ảnh...</p>
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-80 object-contain transition-transform duration-300 group-hover:scale-105 ${
                    loadedImages[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
                
                {/* Simple overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Simple heart icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                  <span className="text-xl">♥</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex gap-4">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
