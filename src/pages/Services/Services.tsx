// Components
import AnimatedText from "../../atoms/animatedText";
import ServiceCard from "./organisms/ServiceCard/ServiceCard";

// Consatnts
import { SERVICES } from "../../constants/services";

const Services = () => {
  return (
    <section className="py-24 px-6 w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <AnimatedText
          className="text-4xl font-bold text-primaryColor font-heading"
          wrapperClassName="mr-2"
          sentence="Our Services"
        />

        <p className="mt-4 max-w-2xl text-lg text-center">
          Provide end-to-end software development services that help businesses
          establish a strong digital presence and streamline daily operations.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
