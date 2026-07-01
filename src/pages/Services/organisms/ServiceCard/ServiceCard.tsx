import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Service {
  title: string;
  description: string;
  icon: IconType;
  featureList?: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  return (
    <motion.div
      className="relative rounded-3xl p-8 shadow-lg bg-secondaryColor max-w-xl overflow-hidden"
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // premium easing
      }}
      viewport={{ once: true }}
    >
      {/* Background Icon */}
      <Icon className="absolute right-[20px] bottom-[20px] w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:w-40 text-primaryColor opacity-10 pointer-events-none" />

      {/* Foreground Content */}
      <div className="flex flex-row items-center gap-4 text-primaryColor relative z-10">
        {/* <Icon className="w-8 h-8" /> */}
        <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
      </div>

      <p className="mt-4 relative z-10">{service.description}</p>

      {service.featureList && (
        <ul className="flex flex-col list-disc pl-6 gap-4 text-ternaryColor mt-4 relative z-10">
          {service.featureList.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
