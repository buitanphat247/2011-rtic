const Header = () => {
  return (
    <header className="fixed right-0 left-0 bg-white/95 backdrop-blur-md shadow-lg z-40 py-4">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-pink-500 drop-shadow-sm">20/10</h1>
          <span className="text-sm text-gray-600 italic mt-2">Ngày Phụ nữ Việt Nam</span>
        </div>
        <div className="hidden md:flex items-center">
          <p 
            className="text-lg font-medium text-gray-700 px-6 py-3 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Chúc mừng ngày Phụ nữ Việt Nam! 💖
          </p>
        </div>
        <div className="hidden lg:flex gap-4 opacity-70">
          <div className="text-2xl animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}>
            🌸
          </div>
          <div className="text-2xl animate-bounce" style={{ animationDelay: "1s", animationDuration: "3s" }}>
            🌺
          </div>
          <div className="text-2xl animate-bounce" style={{ animationDelay: "2s", animationDuration: "3s" }}>
            🌹
          </div>
        </div>
      </div>
      {/* Mobile Message */}
      <div className="md:hidden flex justify-center mt-4">
        <p 
          className="text-base font-medium text-gray-700 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Chúc mừng ngày Phụ nữ Việt Nam! 💖
        </p>
      </div>
      {/* Mobile Flowers */}
      <div className="md:hidden flex justify-center gap-4 mt-4 opacity-70">
        <div className="text-xl animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}>
          🌸
        </div>
        <div className="text-xl animate-bounce" style={{ animationDelay: "1s", animationDuration: "3s" }}>
          🌺
        </div>
        <div className="text-xl animate-bounce" style={{ animationDelay: "2s", animationDuration: "3s" }}>
          🌹
        </div>
      </div>
    </header>
  );
};

export default Header;
