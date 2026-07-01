import { motion } from "framer-motion";

// Constants
import { EXPERTISES } from "../../../../constants/expertises";

const OurExpertise = () => {
  return (
    <section className="py-24 px-6 w-full min-h-screen bg-primaryColor text-secondaryColor flex">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold font-heading text-center">
          Our Expertise
        </h2>

        <h4 className="max-w-2xl text-xl text-center">
          Building Digital Solutions That Scale
        </h4>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-16">
          {EXPERTISES.map((expertiseDetail, index) => {
            const Icon = expertiseDetail.icon;
            return (
              <div
                className={
                  index % 2
                    ? "skew-y-[0deg] md:-skew-y-[6deg] lg:skew-y-[6deg]"
                    : "skew-y-[0deg] md:skew-y-[6deg] lg:skew-y-[6deg]"
                }
              >
                <motion.div
                  key={index}
                  className="flex flex-row items-center gap-3 bg-gradient-to-br from-transparent to-white/10 rounded-md p-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 * index }}
                >
                  <Icon className="w-12 h-12" />
                  <span className="text-lg">{expertiseDetail.label}</span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default OurExpertise;
