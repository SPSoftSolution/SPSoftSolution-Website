import { motion } from "framer-motion";

// Components
import AnimatedText from "../../atoms/animatedText";

// Constants
import { OUR_VALUES } from "../../constants/ourValues";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 text-lg">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 justify-center ">
        <div className="flex flex-col items-center text-center py-16 gap-4 py-8">
          <AnimatedText
            className="text-4xl font-bold text-primaryColor font-heading"
            wrapperClassName="mr-2"
            sentence="Who We Are?"
          />

          <AnimatedText
            className="mx-auto text-lg"
            sentence="SP Soft Solution is a software development company dedicated to delivering high-quality digital solutions for businesses of all sizes. We specialize in creating websites, web applications, mobile apps and custom software that solve real business challenges. Our goal is to combine innovation, modern technologies and strategic thinking to help businesses grow in the digital world."
            wordByWordAnimation
          />
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col gap-4">
            <motion.p
              className="text-4xl font-bold text-primaryColor font-heading italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Mission
            </motion.p>
            <p>
              To empower businesses through reliable, scalable and innovative
              software solutions that create long-term value
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <motion.p
              className="text-4xl font-bold text-primaryColor font-heading italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {" "}
              Our Vision
            </motion.p>
            <p>
              To become a trusted technology partner for businesses worldwide by
              delivering exceptional software experiences
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-4xl font-bold text-primaryColor font-heading italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Values
          </motion.p>
          <ul className="flex flex-col list-disc pl-6 gap-4">
            {OUR_VALUES.map((value) => (
              <li key={value.label}>
                <span className="font-bold">{value.label} : </span>
                <span>{value.description}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
