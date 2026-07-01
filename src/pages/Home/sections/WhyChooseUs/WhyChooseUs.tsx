// Constants
import { WHY_CHOOSE_US_FEATURES } from "../../../../constants/whyChooseUs";

// Components
import FeatureCard from "./organisms/FeatureCard";

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 w-full min-h-screen flex">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-8">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center text-primaryColor">
          Why Choose Us?
        </h2>

        <h4 className="max-w-2xl text-xl text-center">
          We combine creativity, technology and business understanding to build
          software solutions that are{" "}
          <span className="font-bold italic">
            fast, secure, scalable and tailored
          </span>{" "}
          to your unique requirements.
        </h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {WHY_CHOOSE_US_FEATURES.map((feature) => (
            <FeatureCard heading={feature.heading} detail={feature.detail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
