import Link from "next/link";
import { drBlakeData } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat px-6 py-24 md:py-32 transition-all duration-500 ease-in-out"
      style={{ backgroundImage: "url('/hero-bg-3.jpeg')" }} // make sure this path is correct in your public folder
    >
      {/* Soft overlay for blending with navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-transparent backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-800 leading-tight drop-shadow-sm mb-4">
          {drBlakeData.name.split(',')[0]}
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-600 font-medium mb-8">
          {drBlakeData.title || "Clinical Psychologist"}
        </h2>

        <button
          className="hover:bg-gradient-to-r bg-transparent border border-black text-black hover:from-blue-100 to-cyan-100 px-8 py-4 text-lg rounded-full hover:shadow-lg transition-all duration-300 ease-in-out transform hover:hover:scale-105"
        >
          <Link href="#contact">Book a Free Consult</Link>
        </button>
      </div>
    </section>
  );
}
