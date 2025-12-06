const Header = () => {
  return (
    <header className="text-center mb-16 relative slide-down">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full glow-line" />
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold gradient-text text-glow mb-5">
        Para Minha Maria Eduarda
      </h1>
      <p className="text-lg md:text-xl text-silver font-light tracking-wide pulse-text">
        Uma declaração de amor criada especialmente para você ❤️
      </p>
    </header>
  );
};

export default Header;
