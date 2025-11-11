import Button from "../elements/Button";
import Card from "../elements/Card";
import card1 from "../../assets/card1.png";
import avatar1 from "../../assets/avatar1.png";


const Hero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="hero-desc">
        <h1>Discover Digital Art & Collect Nfts</h1>
        <p>
          Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell
          Art From More Than 20k Nft Artists.
        </p>
        <Button
          text="Get Started"
          iconSrc="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch-2@2x.svg"
          width="220px"
          height="60px"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div>
            <p>240k+</p>
            <p>Total Sale</p>
          </div>
          <div>
            <p>100k+</p>
            <p>Auctions</p>
          </div>
          <div>
            <p>240k+</p>
            <p>Artists</p>
          </div>
        </div>
      </div>
        <Card
          imageSrc={card1}
          title="Space Walking"
          creatorName="Animakid"
          creatorAvatar={avatar1}
        />
    </div>
  );
};

export default Hero;
