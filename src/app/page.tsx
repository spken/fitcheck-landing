import Hero from "./components/Hero";
import Narrative from "./components/Narrative";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#FAFAFA] font-sans">
      <Hero />
      <Narrative />
      <FinalCTA />
      <Footer />
    </main>
  );
}
