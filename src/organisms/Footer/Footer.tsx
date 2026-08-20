import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import heroBg from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="relative text-primaryColor pt-32 pb-4 px-6">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-1 "
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Company */}
          <div>
            <img
              src={logo}
              alt="SP Soft Solution"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/");
              }}
              draggable={false}
              className="h-40 cursor-pointer items-center"
            />
          </div>

          {/* Social */}
          <div>
            <h2
              className="font-semibold text-lg mb-4 font-heading cursor-pointer"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/contact", { replace: true });
              }}
            >
              Contact Us
            </h2>

            <div className="flex flex-row flex-wrap gap-4">
              <a
                href="mailto:spsoftsolution.official@gmail.com"
                aria-label="Email SP Soft Solution"
                className="group flex flex-row items-center gap-2 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primaryColor">
                  <FaEnvelope className="transition-colors duration-300 group-hover:text-secondaryColor" />
                </div>

                {/* <span className="transition-colors duration-300 group-hover:underline">
                  spsoftsolution.official@gmail.com
                </span> */}
              </a>

              <a
                href="tel:+918160143670"
                aria-label="Call SP Soft Solution"
                className="group flex flex-row items-center gap-2 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primaryColor">
                  <FaPhoneAlt className="transition-colors duration-300 group-hover:text-secondaryColor" />
                </div>

                {/* <span className="transition-colors duration-300 group-hover:underline">
                  +91 81601 43670
                </span> */}
              </a>

              <a
                href="https://www.linkedin.com/company/sp-soft-solution"
                aria-label="SP Soft Solution on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center gap-2 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primaryColor">
                  <FaLinkedin className="transition-colors duration-300 group-hover:text-secondaryColor" />
                </div>

                {/* <span className="transition-colors duration-300 group-hover:underline">
                  SP Soft Solution
                </span> */}
              </a>

              <a
                href="https://www.facebook.com/people/SP-Soft-Solution/61592793032944/"
                aria-label="SP Soft Solution on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center gap-2 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primaryColor">
                  <FaFacebook className="transition-colors duration-300 group-hover:text-secondaryColor" />
                </div>

                {/* <span className="transition-colors duration-300 group-hover:underline">
                  @spsoftsolution
                </span> */}
              </a>

              <a
                href="https://www.instagram.com/spsoftsolution"
                aria-label="SP Soft Solution on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center gap-2 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primaryColor">
                  <FaInstagram className="transition-colors duration-300 group-hover:text-secondaryColor" />
                </div>

                {/* <span className="transition-colors duration-300 group-hover:underline">
                  @spsoftsolution
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-primaryColor/30 mt-20 pt-0">
        © {new Date().getFullYear()} SP Soft Solution. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
