import CategoriesCard from "../elements/CategoriesCard";
import PaintBrush from "../../assets/PaintBrush.svg";
import Swatches from "../../assets/Swatches.svg";
import MusicNotes from "../../assets/MusicNotes.svg";
import Camera from "../../assets/Camera.svg";
import VideoCamera from "../../assets/VideoCamera.svg";
import MagicWand from "../../assets/MagicWand.svg";
import Basketball from "../../assets/Basketball.svg";
import Planet from "../../assets/Planet.svg";



export default function Categories() {
  const categories = [
  {
    name: "Art",
    image: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-54@2x.png",
    icon: PaintBrush,
  },
  {
    name: "Collectibles",
    image: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-55@2x.png",
    icon: Swatches,
  },
  {
    name: "Music",
    image: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-56@2x.png",
    icon: MusicNotes,
  },
  {
    name: "Photography",
    image: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-57@2x.png",
    icon: Camera
   },
  {
    name: "Video",
    image: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-58@2x.png",
    icon: VideoCamera,
  },
  {
    name: "Utility",
    image: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-59@2x.png",
    icon: MagicWand,
  },
  {
    name: "Sport",
    image: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-60@2x.png",
    icon: Basketball,
  },
  {
    name: "Virtual Worlds",
    image: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-61@2x.png",
    icon: Planet,
  },
];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
        {categories.map((item, index) => (
          <CategoriesCard key={index} {...item}/>
        ))}
      </div>
    </section>
  );
}
