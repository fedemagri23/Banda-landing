import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Plans from "../components/Plans";
import CustomPlan from "../components/CustomPlan";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhoAreWe from "../components/WhoAreWe";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <Plans />
      <WhoAreWe />
      <Contact />
      <Footer />
    </div>
  );
}
