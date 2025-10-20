const Footer = () => {
  return (
    <footer className="pt-10 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Message */}
        <div className="mb-8 animate-fade-in-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "#ec4899",
              textShadow: "0 2px 4px rgba(236, 72, 153, 0.2)",
            }}
          >
            Chúc mừng ngày Phụ nữ Việt Nam 20/10!
          </h2>
          <p className="text-lg md:text-xl text-purple-600" style={{ fontFamily: "Roboto, sans-serif" }}>
            Từ cộng đồng HCM UTE Research on Technology and Innovation Club 
          </p>
        </div>

        {/* Heart Icons */}
        <div className="flex justify-center items-center gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-12 h-12 border-2 rounded-full flex items-center justify-center animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                borderColor: "#f8b4cb",
                color: "#f8b4cb",
              }}
            >
              <span className="text-2xl">♥</span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-gray-600 mb-4" style={{ fontFamily: "Roboto, sans-serif" }}>
            Tôn vinh sức mạnh, trí tuệ và sự sáng tạo của phụ nữ Việt Nam
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 py-5 border-t border-gray-200 bg-[#fcd0e9]">
        <p
          className="text-sm font-medium"
          style={{
            fontFamily: "Roboto, sans-serif",
            color: "#8b5cf6",
          }}
        >
          © 2025 HCM UTE Research on Technology and Innovation Club . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
