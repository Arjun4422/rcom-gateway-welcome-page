import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tech-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-tech-dark via-tech-dark/95 to-tech-blue/20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Connected IoT network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-tech-dark/90 via-tech-dark/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary-foreground text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-tech-cyan rounded-full mr-2 animate-pulse"></span>
            Enterprise Auto-ID Integration Platform
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Unify Your{" "}
            <span className="bg-gradient-to-r from-tech-cyan to-primary bg-clip-text text-transparent">
              Auto-ID Devices
            </span>
            <br />
            Into Real-Time Action
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            RCOM Gateway bridges RFID, barcode scanners, BLE beacons, and enterprise systems 
            with intelligent, event-driven workflows. No heavy coding required.
          </p>

          {/* Problem Statement */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-8 max-w-3xl">
            <p className="text-gray-200 text-lg">
              <span className="text-tech-cyan font-semibold">The Challenge:</span> Auto-ID data trapped in silos, 
              disconnected from real-time decision-making. Building unified integration from scratch 
              is complex, costly, and time-consuming.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 text-lg group">
              Request Live Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg group"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo Video
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
              <span>Healthcare</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
              <span>Logistics</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
              <span>Warehousing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
              <span>Manufacturing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-cyan rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;