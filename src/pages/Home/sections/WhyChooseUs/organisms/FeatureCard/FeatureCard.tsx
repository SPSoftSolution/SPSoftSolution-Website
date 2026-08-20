import { motion } from "framer-motion";

interface FeatureCardProps {
  heading: string;
  detail: string;
}

const FeatureCard = ({ heading, detail }: FeatureCardProps) => {
  return (
    <motion.div
      className="flex flex-col px-4 py-8 gap-6 bg-white rounded-xl shadow-lg"
      initial={{ opacity: 0, rotateY: -90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      style={{
        transformPerspective: 1000,
        transformOrigin: "center",
      }}
    >
      <h3 className="text-2xl text-primaryColor font-medium">{heading}</h3>
      <p>{detail}</p>
    </motion.div>
  );
};

export default FeatureCard;
