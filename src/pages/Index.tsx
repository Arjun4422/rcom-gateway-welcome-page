import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import AdvancedFeatures from "@/components/AdvancedFeatures";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <Benefits />
      <AdvancedFeatures />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
