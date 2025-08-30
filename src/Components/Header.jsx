import React, { useState, useEffect } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";

const Header = () => {
  const [navState, setNavState] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebar, setSidebar] = useState(false);

  const navLinks = [
    { label: "BESPOKE ↓", href: "#" },
    { label: "BESPOKE LADIES", href: "#" },
    { label: "ONLINE SHOP ↓", href: "#" },
    { label: "WORLD OF MADESUITS ↓", href: "#" },
  ];

  const toggleSidebar = () => setSidebar((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 200) {
        setNavState(currentScroll > lastScrollY ? "hide" : "show");
      } else {
        setNavState("top");
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`z-20 fixed top-0 w-full bg-[#F5F2EC] transition-transform duration-300 shadow-sm
        ${navState === "hide" ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Brand */}
      <div className="text-xl tracking-[0.3em] pt-2 font-semibold text-black text-center">
        MADE SUITS<sup>®</sup>
      </div>

      {/* Top Section */}
      <div className="flex justify-between items-center px-6 md:px-8 max-md:px-4 border-gray-200">
        {/* Left - Menu (always visible now) */}
        <button
          onClick={toggleSidebar}
          className="flex items-center gap-6"
        >
          <Menu className="w-6 h-6 text-[#7B3F00]" />
        </button>

        {/* Right - Actions */}
        <div className="flex items-center gap-6 pb-2">
          {/* Desktop Only */}
          <a className="hidden md:block text-sm tracking-widest text-black cursor-pointer hover:text-gray-700">
            MAKE APPOINTMENT
          </a>
          <a className="hidden md:block text-sm font-semibold text-yellow-700 cursor-pointer hover:text-yellow-900">
            SIGN IN
          </a>

          {/* Cart Always Visible */}
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-5 h-5 text-yellow-700" />
            <span className="absolute -top-2 -right-2 bg-yellow-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Nav Links (desktop only) */}
      <nav className="hidden md:flex justify-center space-x-6 pb-2 border-gray-200 pt-2">
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="text-sm text-gray-800 hover:text-black cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </nav>



    </header>
  );
};

export default Header;
