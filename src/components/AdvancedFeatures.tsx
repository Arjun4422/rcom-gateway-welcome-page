import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Map, 
  Shield, 
  Globe, 
  Cloud, 
  Plug, 
  ArrowRight,
  Settings 
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

const AdvancedFeatures = () => {
  return (
    <section id="advanced" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-tech-cyan/10 border border-tech-cyan/20 rounded-full text-tech-cyan text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Advanced Platform Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Beyond Integration -
            <span className="block bg-gradient-to-r from-primary to-tech-cyan bg-clip-text text-transparent">
              Build Your Environment
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            RCOM Gateway goes far beyond device integration and workflows. 
            It gives you powerful tools to build and customize your own environment.
          </p>
        </div>

        {/* Dashboard Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img 
              src={dashboardImage} 
              alt="Custom dashboard interface" 
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/30 to-transparent rounded-xl"></div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Design Interactive Dashboards
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Use the Custom UI feature to build exactly what you need. Whether it's operator panels, 
              live status views, or management summaries - design it your way.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tech-cyan rounded-full"></div>
                <span>Drag-and-drop dashboard builder</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tech-cyan rounded-full"></div>
                <span>Real-time data visualization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tech-cyan rounded-full"></div>
                <span>Custom widgets and components</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tech-cyan rounded-full"></div>
                <span>Role-based dashboard access</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary-hover group">
              Explore Dashboard Builder
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Advanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-tech-cyan/20 hover:border-tech-cyan/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-tech-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <LayoutDashboard className="w-6 h-6 text-tech-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom UI Builder</h3>
              <p className="text-muted-foreground">
                Design interactive dashboards, operator panels, and status views. 
                Build exactly what your team needs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-tech-cyan/20 hover:border-tech-cyan/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-tech-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-tech-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Maps</h3>
              <p className="text-muted-foreground">
                Visualize zones, track assets in real-time, and design your own 
                layouts with precision mapping tools.
              </p>
            </CardContent>
          </Card>

          <Card className="border-tech-cyan/20 hover:border-tech-cyan/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-tech-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-tech-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fine-Grain Access Control</h3>
              <p className="text-muted-foreground">
                Control who sees what. Limit user access to specific devices, 
                workflows, or dashboards with precision.
              </p>
            </CardContent>
          </Card>

          <Card className="border-tech-cyan/20 hover:border-tech-cyan/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-tech-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-tech-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Language Support</h3>
              <p className="text-muted-foreground">
                Full UI translation support so every user can work in their 
                preferred language. Global teams, local experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-tech-cyan/20 hover:border-tech-cyan/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-tech-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-tech-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Tenant Management</h3>
              <p className="text-muted-foreground">
                Manage multiple organizations, sites, or departments with 
                isolated environments and centralized control.
              </p>
            </CardContent>
          </Card>

          <Card className="border-tech-cyan/20 hover:border-tech-cyan/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-tech-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Plug className="w-6 h-6 text-tech-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Plug-and-Play Configuration</h3>
              <p className="text-muted-foreground">
                Built for scale, security, and speed. Remote deployments, 
                external API integration, and instant channel setup.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise Features Callout */}
        <div className="bg-gradient-to-r from-tech-dark to-primary/20 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Enterprise-Ready Architecture
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              RCOM Gateway is built for enterprise scale with features like multi-tenant management, 
              remote deployments, external API integration, and plug-and-play channel configuration. 
              Scale from pilot to global deployment with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">High Availability</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Load Balancing</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Disaster Recovery</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;