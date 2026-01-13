
import React from 'react';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 animate-fade-in">
          <Zap size={16} className="fill-indigo-700" />
          <span>Launch Your Business Online Today</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
          The Only Website Subscription <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            You'll Ever Need.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          We design, build, and host your high-converting business website for one simple monthly fee. No hidden costs. No stress. Just growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <a
            href="#pricing"
            onClick={(e) => scrollTo(e, 'pricing')}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-indigo-200 flex items-center justify-center space-x-2"
          >
            <span>See Pricing</span>
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-lg px-8 py-4 rounded-2xl font-bold transition-all shadow-sm"
          >
            Get Started
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-slate-500 font-medium">
          <div className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-emerald-500" />
            <span>Unlimited Edits</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-emerald-500" />
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-emerald-500" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
