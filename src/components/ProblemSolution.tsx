import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Zap, Shield, Settings } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Current Challenge
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Auto-ID Data Trapped in Silos
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Across industries like healthcare, warehousing, and logistics, Auto-ID technologies are everywhere. 
            RFID tags, barcode scanners, BLE beacons... each capturing vital data. But too often, 
            that data remains trapped in silos, disconnected from real-time decision-making.
          </p>
        </div>

        {/* Problem Points */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Disconnected Systems</h3>
              <p className="text-muted-foreground">No unified platform to handle wide range and volume of real-time data across devices</p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Complex Development</h3>
              <p className="text-muted-foreground">Building integration from scratch is complex, costly, and time-consuming</p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Delayed Decision Making</h3>
              <p className="text-muted-foreground">Manual processes and data silos prevent real-time automated responses</p>
            </CardContent>
          </Card>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            The RCOM Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What if all your devices could{" "}
            <span className="bg-gradient-to-r from-primary to-tech-cyan bg-clip-text text-transparent">
              speak the same language?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Meet RCOM Gateway. A powerful, event-driven integration platform that bridges your Auto-ID devices 
            and enterprise systems. RCOM listens to your real-world devices and turns their data into 
            real-time actions, workflows, and insights.
          </p>
        </div>

        {/* Core Value Props */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Event-Driven</h3>
              <p className="text-muted-foreground text-sm">Every device read becomes an intelligent workflow trigger</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No-Code Workflows</h3>
              <p className="text-muted-foreground text-sm">Simple, rule-based automation without heavy coding</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Universal Compatibility</h3>
              <p className="text-muted-foreground text-sm">Native support for all major Auto-ID technologies</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Seamless Integration</h3>
              <p className="text-muted-foreground text-sm">Connect with existing systems via APIs, MQTT, databases</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;