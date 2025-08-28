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
            NORDIC Software Developers
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
                    src="/lovable-uploads/08854ac2-dd81-4e1a-a07a-3fc290c29dfa.png" 
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div className="p-6">
              <img
                src="/lovable-uploads/e1244fd6-620c-4ad2-9aac-ab3cd8dbe943.png"
                alt="Bille Madsen"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Bille Madsen</h3>
              <p className="text-blue-100 mb-2">CEO</p>
              <div className="space-y-1">
                <p className="text-sm text-blue-200">
                  <a href="mailto:bille@nordicsoftwaredevelopers.com" className="hover:text-white">
                    bille@nordicsoftwaredevelopers.com
                  </a>
                </p>
                <p className="text-sm text-blue-200">
                  <a 
                    href="https://www.linkedin.com/in/bille-madsen-3551823a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              </div>
            </div>
            <div className="p-6">
              <img
                src="/lovable-uploads/e33ed5fc-a513-4f40-857b-b5b70ba45faa.png"
                alt="Thomas Christensen"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Thomas Christensen</h3>
              <p className="text-blue-100 mb-2">CTO</p>
              <div className="space-y-1">
                <p className="text-sm text-blue-200">
                  <a href="mailto:thomas@nordicsoftwaredevelopers.com" className="hover:text-white">
                    thomas@nordicsoftwaredevelopers.com
                  </a>
                </p>
                <p className="text-sm text-blue-200">
                  <a 
                    href="https://www.linkedin.com/in/thomashuusomchristensen/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              </div>
            </div>
            <div className="p-6">
              <img
                src="/lovable-uploads/644d28a6-0e51-46e8-9487-580fa385e54a.png"
                alt="Nicolai Plum"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Nicolai Plum</h3>
              <p className="text-blue-100 mb-2">CFO</p>
              <div className="space-y-1">
                <p className="text-sm text-blue-200">
                  <a href="mailto:nicolai@nordicsoftwaredevelopers.com" className="hover:text-white">
                    nicolai@nordicsoftwaredevelopers.com
                  </a>
                </p>
                <p className="text-sm text-blue-200">
                  <a 
                    href="https://www.linkedin.com/in/nicolai-plum-2583266/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              </div>
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
