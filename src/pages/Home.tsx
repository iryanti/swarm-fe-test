import Categories from "../components/home/Categories";
import DiscoverMore from "../components/home/DiscoverMore";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Newsletter from "../components/home/Newsletter";
import TopCreator from "../components/home/TopCreators";
import Trending from "../components/home/Trending";

const Home: React.FC = () => {
  return (
    <div className="container  mx-auto px-[20px] sm:px-[40px] md:px-[50px] py-[60px] flex flex-col gap-20 sm:gap-24 md:gap-28">
      <Hero />
      <Trending />
      <TopCreator />
      <Categories />
      <DiscoverMore/>
      <HowItWorks/>
      <Newsletter/>
    </div>
  );
};

export default Home;
