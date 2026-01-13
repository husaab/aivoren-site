
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/images/aivoren-logo.png"
                alt="Aivoren"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-extrabold tracking-tight text-white">AIVOREN</span>
            </div>
            <p className="max-w-md mb-8 text-lg">
              Empowering small businesses with premium, subscription-based web solutions. One simple price for unlimited possibilities.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#features" onClick={(e) => scrollTo(e, 'features')} className="hover:text-indigo-400 transition-colors cursor-pointer">Web Design</a></li>
              <li><a href="#features" onClick={(e) => scrollTo(e, 'features')} className="hover:text-indigo-400 transition-colors cursor-pointer">Managed Hosting</a></li>
              <li><a href="#features" onClick={(e) => scrollTo(e, 'features')} className="hover:text-indigo-400 transition-colors cursor-pointer">SEO Optimization</a></li>
              <li><a href="#pricing" onClick={(e) => scrollTo(e, 'pricing')} className="hover:text-indigo-400 transition-colors cursor-pointer">Google Business</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#features" onClick={(e) => scrollTo(e, 'features')} className="hover:text-indigo-400 transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-indigo-400 transition-colors cursor-pointer">Contact</a></li>
              <li><span className="hover:text-indigo-400 transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-indigo-400 transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Aivoren. All rights reserved.</p>
          <p className="flex items-center space-x-2">
            <span>Built for better businesses.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
