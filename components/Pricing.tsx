
import React from 'react';
import { Check, Star, Search, Code2 } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="pricing" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Simple, Honest Pricing.</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">No complex quotes. Just a premium service at a predictable price.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Plan */}
          <div className="relative bg-white p-10 rounded-[2.5rem] shadow-xl border-2 border-indigo-600 ring-4 ring-indigo-50">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center space-x-2">
              <Star size={14} className="fill-white" />
              <span>MOST POPULAR</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Core Website Package</h3>
            <p className="text-slate-500 mb-8">Professional design, high-speed hosting, and total peace of mind.</p>

            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-extrabold text-slate-900">$35</span>
              <span className="text-slate-500 font-medium ml-2">/ month</span>
            </div>
            <p className="text-indigo-600 font-bold text-sm mb-10 flex items-center">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded mr-2">$100</span>
              initial setup fee
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Professional Website Design',
                '10 Design Edits Monthly',
                'Managed Premium Hosting',
                '24/7 Technical Support',
                'Lifetime Updates & Security',
                'Cancel Anytime - No Lock-in'
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-slate-700">
                  <div className="mt-1 bg-emerald-100 rounded-full p-0.5">
                    <Check size={16} className="text-emerald-600" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 transition-all"
            >
              Start Your Subscription
            </a>
          </div>

          {/* Google Business Add-on */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Search size={24} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Google Business Add-on</h3>
            <p className="text-slate-500 mb-8">Dominate local search results with an optimized Google profile.</p>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-extrabold text-slate-900">+$15</span>
              <span className="text-slate-500 font-medium ml-2">/ month</span>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                'Profile Setup & Optimization',
                'Monthly Post & Photo Updates',
                'Review Response Management',
                'Keyword Optimization',
                'Local SEO Strategy',
                'Monthly Performance Report'
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-slate-700">
                  <div className="mt-1 bg-blue-100 rounded-full p-0.5">
                    <Check size={16} className="text-blue-600" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold text-lg transition-all"
            >
              Add to My Plan
            </a>
          </div>

          {/* Custom Site */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-200">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Code2 size={24} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">Custom Site</h3>
            <p className="text-slate-500 mb-8">A fully custom-tailored solution built specifically for your business needs.</p>

            <div className="flex items-baseline mb-8">
              <span className="text-3xl font-extrabold text-slate-900">Custom Quote</span>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                'E-commerce & Online Stores',
                'Custom Backend & Database',
                'User Authentication & Dashboards',
                'API Integrations',
                'Advanced Functionality',
                'Ongoing Maintenance Available'
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-slate-700">
                  <div className="mt-1 bg-purple-100 rounded-full p-0.5">
                    <Check size={16} className="text-purple-600" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-bold text-lg transition-all"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
