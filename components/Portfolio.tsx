
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Schoolmule',
    url: 'https://schoolmule.ca',
    description: 'A comprehensive school management and learning platform designed for seamless educational workflows.',
    tags: ['EdTech', 'SaaS', 'Management'],
    image: '/images/schoolmulelogo.jpg',
    accent: 'from-white-500 to-amber-500'
  },
  {
    title: 'The Smart Host',
    url: 'https://reports.thesmarthost.com',
    description: 'Advanced reporting and data visualization tools for hospitality and short-term rental management.',
    tags: ['Hospitality', 'Analytics', 'Dashboards'],
    image: '/images/smarthostlogo.png',
    accent: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'CRO Journal',
    url: 'https://dev2.cro.aws.vuepoint.ca/',
    description: 'Professional publishing platform for clinical research organizations and scientific insights.',
    tags: ['Publishing', 'Medical', 'Research'],
    image: '/images/cro-official-logo.png',
    accent: 'from-emerald-500 to-teal-500'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-4">Our Portfolio</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Proven results for global brands.</p>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            We don't just build websites; we build business tools that perform. Take a look at some of the platforms we've brought to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 relative"
            >
              {/* Image Container */}
              <div className={`relative h-48 bg-gradient-to-br ${project.accent} flex items-center justify-center p-6`}>
                <img
                  src={project.image}
                  alt={`${project.title} logo`}
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors group-hover:underline"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-[2rem] bg-indigo-600 text-white">
            <p className="text-lg font-medium">Ready to see your business on this list?</p>
            <a href="#contact" className="text-white font-bold underline decoration-white/40 hover:decoration-white transition-all ml-2">
              Let's build your site today.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
