import { useState } from 'react';

// Import all images
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import image7 from '../assets/images/7.jpg';
import image8 from '../assets/images/8.jpg';
import image9 from '../assets/images/9.jpg';
import image10 from '../assets/images/10.jpg';
import image11 from '../assets/images/11.jpg';
import image12 from '../assets/images/12.jpg';
import image13 from '../assets/images/13.jpg';

const ImageGallery = () => {
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, src: image1, alt: "Phụ nữ Việt Nam 1" },
    { id: 2, src: image2, alt: "Phụ nữ Việt Nam 2" },
    { id: 3, src: image3, alt: "Phụ nữ Việt Nam 3" },
    { id: 4, src: image4, alt: "Phụ nữ Việt Nam 4" },
    { id: 5, src: image5, alt: "Phụ nữ Việt Nam 5" },
    { id: 6, src: image6, alt: "Phụ nữ Việt Nam 6" },
    { id: 7, src: image7, alt: "Phụ nữ Việt Nam 7" },
    { id: 8, src: image8, alt: "Phụ nữ Việt Nam 8" },
    { id: 9, src: image9, alt: "Phụ nữ Việt Nam 9" },
    { id: 10, src: image10, alt: "Phụ nữ Việt Nam 10" },
    { id: 11, src: image11, alt: "Phụ nữ Việt Nam 11" },
    { id: 12, src: image12, alt: "Phụ nữ Việt Nam 12" },
    { id: 13, src: image13, alt: "Phụ nữ Việt Nam 13" }
  ];

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: "Roboto, sans-serif",
              background: "linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Thư viện ảnh
          </h2>
          {/* <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Những khoảnh khắc đẹp nhất của phụ nữ Việt Nam
          </p> */}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              {/* Loading Placeholder */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <p className="text-purple-600 text-xs font-medium">Loading...</p>
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    loadedImages[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
                
                {/* Simple overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Simple number badge */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                  {image.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-200"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12 animate-fade-in-up" style={{ animationDelay: "1.3s" }}>
          <div className="flex gap-2">
            {[...Array(13)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
