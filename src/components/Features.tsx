import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, Cpu, Database, Zap, ArrowRight } from "lucide-react";
import warehouseImage from "@/assets/warehouse-automation.jpg";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Cpu className="w-4 h-4 mr-2" />
            Core Platform Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Intelligent Workflow Engine
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At its core, RCOM Gateway is an intelligent workflow engine. Every device read, scan, 
            or trigger becomes an event that launches a custom-defined workflow.
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              See RCOM in Action
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Warehouse pallet passes through cold storage entry</h4>
                  <p className="text-muted-foreground">Physical event triggers the automation sequence</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">RCOM detects RFID scan via MQTT</h4>
                  <p className="text-muted-foreground">Instant recognition and workflow activation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Inventory updates instantly, alert sent to manager</h4>
                  <p className="text-muted-foreground">No delays. No manual entry. Just automated precision.</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-primary hover:bg-primary-hover group">
              View More Use Cases
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <img 
              src={warehouseImage} 
              alt="Warehouse automation" 
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/50 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visual Workflow Builder</h3>
              <p className="text-muted-foreground">
                Create complex automation workflows with simple drag-and-drop interface. 
                No coding required - just define your business rules.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Native Device Support</h3>
              <p className="text-muted-foreground">
                Built-in support for RFID, barcode scanners, BLE beacons, and all major 
                Auto-ID vendor protocols. Seamless device onboarding.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Processing</h3>
              <p className="text-muted-foreground">
                Process thousands of events per second with sub-millisecond response times. 
                Scale from pilot to enterprise deployment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Integration</h3>
              <p className="text-muted-foreground">
                Connect with SAP, Oracle, Microsoft, and hundreds of other systems 
                via REST APIs, MQTT, SQL, and custom connectors.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Event-Driven Architecture</h3>
              <p className="text-muted-foreground">
                Every scan, read, or sensor trigger becomes an actionable event. 
                Build reactive systems that respond in real-time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rule-Based Automation</h3>
              <p className="text-muted-foreground">
                Define complex business logic with simple if-then rules. 
                Customize every workflow without writing a line of code.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;