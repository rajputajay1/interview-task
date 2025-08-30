import React, { useState, useEffect } from "react";
import { Menu, ShoppingBag } from "lucide-react";

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
      className={clsx(
        "z-20 fixed top-0 w-full bg-[#F5F2EC] transition-transform duration-300 shadow-sm",
        {
          "translate-y-0": navState === "show" || navState === "top",
          "-translate-y-full": navState === "hide",
        }
      )}
    >
      <div className="text-xl tracking-[0.3em] pt-2 font-semibold text-black text-center">
        MADE SUITS<sup>®</sup>
      </div>

      <div className="flex justify-between items-center px-8 border-gray-200">
        <button onClick={toggleSidebar} className="flex items-center gap-6">
          <Menu className="w-6 h-6 text-[#7B3F00]" />
        </button>

        <div className="flex items-center gap-6 pb-2">
          <a className="text-sm tracking-widest text-black cursor-pointer hover:text-gray-700">
            MAKE APPOINTMENT
          </a>
          <a className="text-sm font-semibold text-yellow-700 cursor-pointer hover:text-yellow-900">
            SIGN IN
          </a>
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-5 h-5 text-yellow-700" />
            <span className="absolute -top-2 -right-2 bg-yellow-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>

      <nav className="flex justify-center space-x-6 pb-2 border-gray-200 pt-2">
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

      {sidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30">
        </div>
      )}
    </header>
  );
};

export default Header;
