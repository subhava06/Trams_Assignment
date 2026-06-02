import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-6">
          <h1 className="font-heading text-3xl font-bold">
            Elementum
          </h1>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((item) => (
              <li
                key={item}
                className="nav-link cursor-pointer text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl md:hidden"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <ul className="flex flex-col gap-4">
              {links.map((item) => (
                <li
                  key={item}
                  className="border-b pb-2 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;