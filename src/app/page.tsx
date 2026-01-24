import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <section className="w-[100vw] h-full">
        <Hero />
        <h1>홍찬희의 포트폴리오</h1>
        <p>This is the homepage of my portfolio website.</p>
      </section>
    </div>
  );
}
