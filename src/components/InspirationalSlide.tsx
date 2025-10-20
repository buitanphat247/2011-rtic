import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const InspirationalSlide = () => {
  const slides = [
    {
      id: 1,
      title: "Phụ nữ",
      subtitle: "Kiên cường & Xinh đẹp",
      quote:
        "Cho dù mình ở tuổi nào, mình vẫn cứ lao động. Mỗi ngày mình như con rùa, bò một chút sẽ đến đích.\nCác chị đừng bao giờ nghĩ mình già cả. Người phụ nữ ở độ tuổi nào cũng đẹp, rất là đẹp.",
      author: "Diva Mỹ Linh",
    },
    {
      id: 2,
      title: "Dám",
      subtitle: "Mạo hiểm & Dấn thân",
      quote:
        "Tôi luôn muốn sự chọn lựa của mình phải ngày càng thú vị và độc đáo,\nvà để làm được điều đó thì phải có chữ “dám”: dám dấn thân, dám mạo hiểm, không sợ thất bại.",
      author: "NSND Lê Khanh",
    },
    {
      id: 3,
      title: "Tự hào",
      subtitle: "Phụ nữ Việt Nam",
      quote:
        "Non sông gấm vóc Việt Nam do phụ nữ ta, trẻ cũng như già,\nra sức dệt thêu mà thêm tốt đẹp, rực rỡ.",
      author: "Chủ tịch Hồ Chí Minh",
    },
    {
      id: 4,
      title: "Yêu",
      subtitle: "Chính mình",
      quote:
        "Chỉ có yêu bản thân thì mình mới có thể yêu người khác.\nNgười phụ nữ độc lập, yêu bản thân sẽ có thể dành cả trái tim và lý trí để yêu thương,\ntrong khi vẫn để người khác tự do sống là chính họ.",
      author: "Giang Ơi – Nhà sáng tạo nội dung",
    },
    {
      id: 5,
      title: "20/10",
      subtitle: "Rạng rỡ & Hạnh phúc",
      quote:
        "Chúc bạn một ngày 20/10 rạng rỡ!\nHãy luôn là phiên bản tốt nhất, độc lập, xinh đẹp và hạnh phúc nhất của chính mình.\nBạn xứng đáng được yêu thương và trân trọng!",
      author: "💐 Lời chúc 20/10",
    },
  ];
  

  return (
    <section className="py-10 px-4 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 opacity-10">
        <div className="w-32 h-32 rounded-full bg-pink-300 transform rotate-45"></div>
        <div className="w-24 h-24 rounded-full bg-purple-300 transform rotate-12 -mt-8 ml-8"></div>
        <div className="w-16 h-16 rounded-full bg-pink-400 transform -rotate-12 -mt-4 ml-16"></div>
      </div>

      <div className="mx-auto relative z-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active'
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="inspirational-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="text-center">
                {/* Title */}
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Roboto, sans-serif" }}>
                    {slide.title}
                  </h2>
                  <h3 
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent pb-2"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {slide.subtitle}
                  </h3>
                </div>

                {/* Quote Card */}
                <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto relative quote-card">
                  {/* Heart Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center animate-gentle-pulse">
                      <span className="text-white text-2xl">♥</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 animate-fade-in-up" style={{ fontFamily: "Roboto, sans-serif", animationDelay: "0.3s" }}>
                    {slide.quote.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < slide.quote.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </blockquote>

                  {/* Divider */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}></div>

                  {/* Author */}
                  <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent animate-fade-in-up" style={{ fontFamily: "Roboto, sans-serif", animationDelay: "0.7s" }}>
                    {slide.author}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default InspirationalSlide;
