import { Activity } from 'lucide-react';

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0] z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-[#0F172A]">Qirin Health</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#0F172A] hover:text-[#2563EB] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#0F172A] hover:text-[#2563EB] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-[#0F172A] hover:text-[#2563EB] transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#0F172A] hover:text-[#2563EB] transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <button className="bg-[#2563EB] text-white px-6 py-2 rounded-[10px] hover:bg-[#1d4ed8] transition-colors font-medium">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
