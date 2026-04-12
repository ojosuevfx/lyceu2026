import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import PainPoints from "@/components/PainPoints";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Formation from "@/components/Formation";
import Curriculum from "@/components/Curriculum";
import Founder from "@/components/Founder";
import Cases from "@/components/Cases";
import CTAIngresso from "@/components/CTAIngresso";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0C0A06", minHeight: "100vh", overflowX: "hidden" }}>
      <SmoothScroll />
<Navbar />
      <Hero />
      <LogosMarquee />
      <PainPoints />
      <About />
      <Solutions />
      <HowItWorks />
      <Formation />
      <Curriculum />
      <Founder />
      <Cases />
      <CTAIngresso />
      <FAQ />
      <Footer />
    </main>
  );
}
