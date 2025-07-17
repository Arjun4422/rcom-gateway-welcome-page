import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-tech-dark via-primary/10 to-tech-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tech-cyan/20 to-transparent transform rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-tech-cyan/20 border border-tech-cyan/30 rounded-full text-tech-cyan text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-tech-cyan rounded-full mr-2 animate-pulse"></span>
              Ready to Transform Your Operations?
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              RCOM Gateway connects
              <span className="block bg-gradient-to-r from-tech-cyan to-primary bg-clip-text text-transparent">
                every device to your success
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time, rule-based automation made simple. Start your journey 
              towards unified Auto-ID integration today.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="bg-tech-cyan hover:bg-tech-cyan/90 text-white font-semibold px-8 py-4 text-lg group w-full sm:w-auto"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Request Live Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg group w-full sm:w-auto"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit Documentation
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-tech-cyan mb-2">No Risk</div>
              <p className="text-gray-300 text-sm">30-day free trial with full platform access</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-tech-cyan mb-2">Fast Setup</div>
              <p className="text-gray-300 text-sm">Deploy in days, not months with expert support</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl font-bold text-tech-cyan mb-2">Proven ROI</div>
              <p className="text-gray-300 text-sm">85% reduction in manual processes on average</p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg text-gray-300 italic">
              "RCOM Gateway – designed for automation. Built for your industry."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;