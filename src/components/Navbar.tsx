import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <nav className="relative w-full z-50 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/fd28ef13-13e9-4576-83d2-4feaf8c7f871.png" alt="NORDIC Software Developers" className="h-12 w-12 invert brightness-0 filter" />
          <span className="font-mono text-xl font-bold">NORDIC Software Developers</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-primary">
            Capabilities
          </button>
          <button onClick={() => scrollToSection('team')} className="text-sm font-medium hover:text-primary">
            Team
          </button>
        </div>
      </div>
    </nav>;
};
export default Navbar;