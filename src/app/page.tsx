import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <h2 className=" text-2xl text-center">Home Page  </h2>
      <HeroSection/>
    </main>
  );
}
