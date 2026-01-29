import Image from "next/image";
import HeroSec from "./components/HeroSec";
import IntroSec from "./components/IntroSec";
import NavBar from "./components/NavBar";
import StackSec from "./components/StackSec";

export default function Home() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <HeroSec />
      <div className="bg-bg">
        <IntroSec />
        <StackSec />

      </div>
    </div>
  );
}
