// Components
import Hero from "./sections/Hero";
import OurExpertise from "./sections/OurExpertise/OurExpertise";
import WhyChooseUs from "./sections/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <WhyChooseUs />
      <OurExpertise />
    </div>
  );
};

export default Home;
