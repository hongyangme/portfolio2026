import Image from "next/image";
import HeroSec from "./components/HeroSec";
import IntroSec from "./components/IntroSec";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <HeroSec />
      <IntroSec />
    </div>
  );
}
