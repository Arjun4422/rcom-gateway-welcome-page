import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Shield, Users, Building, Truck, Heart, Factory } from "lucide-react";

const Benefits = () => {
  const industries = [
    { name: "Healthcare", icon: Heart, description: "Patient tracking, asset management, medication verification" },
    { name: "Logistics", icon: Truck, description: "Shipment tracking, route optimization, delivery automation" },
    { name: "Warehousing", icon: Building, description: "Inventory management, picking optimization, storage control" },
    { name: "Manufacturing", icon: Factory, description: "Production tracking, quality control, asset monitoring" },
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Why Clients Choose RCOM */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent-foreground text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Proven Results
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Clients Across Industries 
            <span className="block">Rely on RCOM Gateway</span>
          </h2>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <Card className="text-center border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Unifies All Devices</h3>
              <p className="text-muted-foreground text-sm">
                Single system for all Auto-ID technologies, improving efficiency and cutting manual work
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Incredibly Flexible</h3>
              <p className="text-muted-foreground text-sm">
                Customize every rule and workflow without writing code. Adapt to your unique processes
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Easy Integration</h3>
              <p className="text-muted-foreground text-sm">
                Seamlessly connects with your IT ecosystem via MQTT, REST, SQL, SAP, and more
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-accent/20 bg-accent/5 hover:bg-accent/10 transition-colors">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Scalable Automation</h3>
              <p className="text-muted-foreground text-sm">
                From pilot projects to enterprise deployment. Proven across multiple industries
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Proven Across Industries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{industry.name}</h4>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Delivering Measurable Results
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Reduction in manual data entry</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">50%</div>
              <p className="text-muted-foreground">Faster deployment vs custom solutions</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">System uptime and reliability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;