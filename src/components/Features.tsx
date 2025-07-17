import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, Cpu, Database, Zap, ArrowRight, Radio, Bell, CheckCircle, Truck, Scan, Activity } from "lucide-react";
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

        {/* Main Feature Showcase with Infographics */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              See RCOM in Action
            </h3>
            
            {/* Infographic Flow */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center shadow-lg">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-primary/20 mt-4"></div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-primary text-white text-sm font-bold px-2 py-1 rounded">1</span>
                    <h4 className="font-bold text-lg">Physical Event Trigger</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">Warehouse pallet passes through cold storage entry</p>
                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <Activity className="w-4 h-4" />
                    <span>Physical movement detected</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-tech-cyan to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <Radio className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-0.5 h-12 bg-gradient-to-b from-tech-cyan/50 to-tech-cyan/20 mt-4"></div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-tech-cyan text-white text-sm font-bold px-2 py-1 rounded">2</span>
                    <h4 className="font-bold text-lg">RCOM Detection</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">RCOM detects RFID scan via MQTT protocol</p>
                  <div className="flex items-center space-x-2 text-sm text-tech-cyan">
                    <Scan className="w-4 h-4" />
                    <span>Instant recognition & workflow activation</span>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded">3</span>
                    <h4 className="font-bold text-lg">Automated Response</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">Inventory updates instantly, alert sent to manager</p>
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <Bell className="w-4 h-4" />
                    <span>No delays. No manual entry. Just automated precision.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Flow Visualization */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-tech-cyan/5 rounded-xl border border-primary/10">
              <div className="flex items-center justify-between text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Trigger</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
                  <span>Process</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Action</span>
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
            
            {/* Overlay infographic elements */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2 text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Tracking</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="text-xs text-muted-foreground mb-1">Real-time Processing</div>
              <div className="text-lg font-bold text-primary">99.9% Uptime</div>
            </div>
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
