import { Activity } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">Qirin Health</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Modern healthcare technology solutions for secure health data tracking and management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <a href="mailto:contact@qirinhealth.com" className="hover:text-white transition-colors">
                  contact@qirinhealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#94A3B8]">
            © {new Date().getFullYear()} Qirin Health. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#94A3B8]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
