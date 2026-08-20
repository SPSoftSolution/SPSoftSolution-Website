import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? `bg-secondaryColor backdrop-blur-xl ${!isOpen && "shadow-lg"}`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              type="button"
              aria-label="Go to SP Soft Solution home page"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/", { replace: true });
              }}
              className="cursor-pointer"
            >
              <img
                src={logo}
                alt="SP Soft Solution"
                draggable={false}
                className="h-12 items-center"
              />
            </button>
            {/* </div> */}

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10 text-lg">
              {navLinks.map((item) => (
                <button
                  type="button"
                  key={item.path}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    navigate(item.path, { replace: true });
                  }}
                  className={`relative font-medium group cursor-pointer ${
                    location.pathname === item.path
                      ? "text-primaryColor"
                      : "text-activeColor"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-primaryColor transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </nav>

            {/* CTA */}
            {/* <PrimaryButton
              onClick={() => {
                navigate("/contact", { replace: true });
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Contact Us
            </PrimaryButton> */}

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 p-4 flex flex-col items-center justify-center md:hidden "
            >
              {/* TOP LINE */}
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 0 : -4,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.44, 0, 0.56, 1],
                }}
                className="absolute w-6 h-[4px] bg-primaryColor rounded-full"
              />

              {/* BOTTOM LINE */}
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? 0 : 4,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.44, 0, 0.56, 1],
                }}
                className="absolute w-6 h-[4px] bg-primaryColor rounded-full"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            id="mobile-navigation"
            className={`fixed top-20 left-0 w-full bg-secondaryColor z-40 shadow-xl lg:hidden p-4 pb-8 rounded-b-2xl`}
          >
            <div className="flex flex-col justify-center gap-4 ">
              {navLinks.map((item) => (
                <button
                  type="button"
                  key={item.path}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    setIsOpen(false);
                    navigate(item.path, { replace: true });
                  }}
                  className={`text-lg font-medium cursor-pointer p-4 ${
                    location.pathname === item.path
                      ? "text-primaryColor"
                      : "text-activeColor"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
