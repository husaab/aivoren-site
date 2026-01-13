
import React from 'react';
import { Globe, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">AIVOREN</span>
            </div>
            <p className="max-w-md mb-8 text-lg">
              Empowering small businesses with premium, subscription-based web solutions. One simple price for unlimited possibilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Managed Hosting</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Google Business</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Aivoren. All rights reserved.</p>
          <p className="flex items-center space-x-2">
            <span>Built with ❤️ for better businesses.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
