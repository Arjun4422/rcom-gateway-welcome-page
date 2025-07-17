import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-tech-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold">RCOM Gateway</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The intelligent Auto-ID integration platform that bridges devices and enterprise systems 
              with event-driven workflows and real-time automation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button variant="outline" size="sm" className="border-tech-cyan/30 text-tech-cyan hover:bg-tech-cyan/10">
                <Mail className="mr-2 h-4 w-4" />
                Contact Sales
              </Button>
              <Button variant="outline" size="sm" className="border-tech-cyan/30 text-tech-cyan hover:bg-tech-cyan/10">
                <Phone className="mr-2 h-4 w-4" />
                Support Center
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-tech-cyan transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-tech-cyan transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-tech-cyan transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-tech-cyan transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-tech-cyan transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-tech-cyan transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-tech-cyan transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-tech-cyan transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-tech-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-tech-cyan transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Industries Served */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-center">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-gray-800 rounded-full">Healthcare</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">Logistics & Supply Chain</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">Warehouse Management</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">Manufacturing</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">Retail</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">Aviation</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">Automotive</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 RCOM Gateway. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-tech-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-tech-cyan transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-tech-cyan transition-colors flex items-center">
              Legal
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;