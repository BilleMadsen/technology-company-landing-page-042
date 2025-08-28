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
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            NORDIC
            <br />
            SOFTWARE
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50">
            Expert software development solutions with Nordic quality and precision.
            Building scalable applications across web, mobile, and cloud platforms.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/10">
              Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center text-primary">
            /CAPABILITIES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Bridge Technologies Reseller"
              description="We are the official Bridgetech partner in Denmark, Iceland, and Greenland — delivering high-performance IPTV, OTT, and network monitoring systems."
              icon={Antenna}
            />
            <FeatureCard
              title="Infrastructure & Technical Consulting"
              description="Hands-on leadership and vendor coordination for telecom, video delivery, and digital infrastructure projects across the Nordics."
              icon={Building2}
            />
            <FeatureCard
              title="AI Vision & Industrial Monitoring"
              description="We design and prototype computer vision solutions for production lines and smart industrial environments using lightweight hardware and AI models."
              icon={Eye}
            />
            <FeatureCard
              title="Quantum-Ready Infrastructure"
              description="We closely follow initiatives like EuroQCI and help companies prepare for the post-quantum era — focusing on secure infrastructure and future-proof design."
              icon={Zap}
            />
            <FeatureCard
              title="Startup Collaboration via DSD"
              description="Through Danish Software Developers, we support pre-seed startups with funding, technical execution, and strategic guidance."
              icon={Handshake}
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold text-white mb-12">
            /COMMUNITY
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">50K+</h3>
              <p className="text-blue-100">Active Developers</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <Code className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">1M+</h3>
              <p className="text-blue-100">Lines of Code</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <Globe className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">100+</h3>
              <p className="text-blue-100">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integrate" className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-mono font-bold mb-6 text-primary">/INTEGRATE</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Seamlessly integrate with your existing tech stack using our comprehensive API and extensive documentation. Support for multiple programming languages and frameworks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-foreground">RESTful API endpoints</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-foreground">WebSocket support</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <p className="text-foreground">GraphQL integration</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="Code on screen"
                className="rounded-lg shadow-2xl"
              />
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
