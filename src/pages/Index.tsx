import { Antenna, Building2, Eye, Zap, Handshake, Users, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-hero-gradient">
        <div className="container mx-auto text-center text-white">
          {/* Official Partner Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-[rgb(46,208,60)] rounded-full">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            <span className="text-sm font-medium text-white">Official Bridge Technologies Partner - Nordics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            NORDIC
            <br />
            SOFTWARE
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50">
            We help companies monitor, build, and future-proof digital infrastructure.
            From IPTV and AI-powered vision to secure, quantum-ready systems.
            Based in the Nordics, working across telecom, tech, and deep industry.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center text-white">
            /CAPABILITIES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <img 
                    src="/lovable-uploads/46d9e68b-21fb-42d6-a7df-8f92c9b31bdb.png" 
                    alt="Bridge Technologies" 
                    className="h-12 w-auto"
                  />
                </div>
                <h3 className="font-semibold">Bridge Technologies Reseller</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">We are the official Bridgetech partner in Denmark, Iceland, and Greenland — delivering high-performance IPTV, OTT, and network monitoring systems.</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <img 
                    src="/lovable-uploads/d73c2bdb-6570-4844-9786-8379209186f6.png" 
                    alt="AI Vision" 
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="font-semibold">AI Vision & Industrial Monitoring</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">We design and prototype computer vision solutions for production lines and smart industrial environments using lightweight hardware and AI models.</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <img 
                    src="/lovable-uploads/73d4d75b-e097-4ea7-87d2-e0677a781f36.png" 
                    alt="Quantum Ready" 
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="font-semibold">Quantum-Ready Infrastructure</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">We closely follow initiatives like EuroQCI and help companies prepare for the post-quantum era — focusing on secure infrastructure and future-proof design.</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-4">
                <h3 className="font-semibold">Infrastructure & Technical Consulting</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Hands-on leadership and vendor coordination for telecom, video delivery, and digital infrastructure projects across the Nordics.</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-4">
                <h3 className="font-semibold">Startup Collaboration via DSD</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Through Danish Software Developers, we support pre-seed startups with funding, technical execution, and strategic guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold mb-12 text-white">/TEAM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Team collaboration"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Enterprise Support</h3>
              <p className="text-blue-100">24/7 dedicated team support</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Robot"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">AI Integration</h3>
              <p className="text-blue-100">Advanced ML capabilities</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="Technology"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Modern Stack</h3>
              <p className="text-blue-100">Latest tech implementation</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="Smart living"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Smart Solutions</h3>
              <p className="text-blue-100">Intelligent automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 NORDIC Software Developers. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-primary hover:text-accent">
                Twitter
              </a>
              <a href="#" className="text-primary hover:text-accent">
                GitHub
              </a>
              <a href="#" className="text-primary hover:text-accent">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
