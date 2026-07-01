import { motion } from "framer-motion";

// Components
import AnimatedText from "../../../../atoms/animatedText";

// Images
import heroBg from "../../../../assets/images/background.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-12 w-full"
    >
      {/* Bg Img */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-0 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="w-fit px-4 py-2 z-5 rounded-full bg-primaryColor/10 text-primaryColor text-sm font-medium mb-4">
            Premium Software Development Company
          </div>

          <AnimatedText
            sentence="Custom Software Solutions Built Around Your Requirement"
            className="text-4xl lg:text-5xl font-heading font-medium leading-tight text-primaryColor"
            wrapperClassName="mr-3"
          />

          <AnimatedText
            sentence="We help businesses accelerate growth through modern websites, web applications, mobile application and custom software tailored to their unique operational needs. From concept to deployment, we transform ideas into reliable digital solutions."
            className="font-inter mt-1 -text-lg text-ternaryColor max-w-xl"
            wordByWordAnimation
          />
        </motion.div>

        {/* Right */}
        {/* <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.15,
          }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-primaryColor/10">
            <div className="space-y-5">
              <div className="h-4 rounded-full bg-primaryColor/20 w-3/4"></div>
              <div className="h-4 rounded-full bg-primaryColor/15"></div>
              <div className="h-4 rounded-full bg-primaryColor/10 w-5/6"></div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="h-32 rounded-2xl bg-primaryColor/10"></div>
                <div className="h-32 rounded-2xl bg-[#B89A79]/20"></div>
                <div className="h-32 rounded-2xl bg-[#B89A79]/15"></div>
                <div className="h-32 rounded-2xl bg-primaryColor/20"></div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5"
          >
            <h3 className="font-bold text-activeColor">50+</h3>
            <p className="text-sm text-ternaryColor">Projects Delivered</p>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
