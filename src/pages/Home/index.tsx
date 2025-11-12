
import Categories from "./Categories";
import DiscoverMore from "./DiscoverMore";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Newsletter from "./Newsletter";
import TopCreators from "./TopCreators";
import Trending from "./Trending";

export default function Home() {
  return (
    <div className="container  mx-auto px-[20px] sm:px-[40px] md:px-[50px] py-[60px] flex flex-col gap-20 sm:gap-24 md:gap-28">
      <Hero />
      <Trending />
      <TopCreators />
      <Categories />
      <DiscoverMore/>
      <HowItWorks/>
      <Newsletter/>
    </div>
  );
};