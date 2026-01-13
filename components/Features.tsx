
import React from 'react';
import { RefreshCw, ShieldCheck, Clock, Layers, Headphones, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Unlimited Edits',
    description: 'Need a text change? A new section? A fresh image? Just ask. We handle unlimited edits every month at no extra cost.',
    icon: RefreshCw,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Premium Hosting',
    description: 'Your site is hosted on lighting-fast servers optimized for performance, security, and global reach.',
    icon: Rocket,
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    title: 'Lifetime Updates',
    description: "Technology moves fast. We keep your site's core updated for life, ensuring it always works on the latest browsers.",
    icon: Layers,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: '24/7 Priority Support',
    description: "Got a question at 2 AM? We're here. Our support team is always available to help you keep your business running.",
    icon: Headphones,
    color: 'bg-pink-50 text-pink-600'
  },
  {
    title: 'Cancel Anytime',
    description: 'No long-term contracts. No hostage situations. If you are not happy, you can cancel your subscription at any time.',
    icon: Clock,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    title: 'Built-in Security',
    description: 'SSL certificates, regular backups, and security monitoring come standard with every Aivoren website.',
    icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-600'
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4">Why Aivoren?</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Everything you need, nothing you don't.</p>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">We provide a comprehensive digital presence that lets you focus on what you do best: running your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
