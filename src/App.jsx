import React from 'react';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/40 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            ASAS <span className="text-blue-500">Business Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 leading-relaxed text-balance">
            Elevating brands through cutting-edge digital marketing and compelling visual storytelling.
          </p>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/50">
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Core Services</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Digital Strategy</h3>
              <p className="text-slate-600 leading-relaxed">Data-driven roadmaps to maximize your online footprint and accelerate business growth.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Content Creation</h3>
              <p className="text-slate-600 leading-relaxed">Engaging visual and written content that captures your brand's unique voice and essence.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Social Media Management</h3>
              <p className="text-slate-600 leading-relaxed">Building active communities and fostering meaningful engagement across all social platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Creative Portfolio</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Explore our diverse work ranging from striking visuals to dynamic video content.</p>
          </div>

          <div className="space-y-24">
            {/* Posters Gallery */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </span>
                High-Impact Design Posters
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={`poster-${item}`} className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-400 opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 bg-slate-900/40 transition-opacity duration-300">
                      <div className="self-end bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">Branding</div>
                      <div>
                        <h4 className="text-white text-xl font-bold mb-1">Campaign Poster 0{item}</h4>
                        <p className="text-slate-200 text-sm">Visual Identity</p>
                      </div>
                    </div>
                    {/* Mock Content */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-900 font-bold text-4xl opacity-20 pointer-events-none">
                      POSTER 0{item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Reels Gallery */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </span>
                Engaging Video Reels
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={`reel-${item}`} className="group relative overflow-hidden rounded-2xl aspect-[9/16] bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-slate-900/90 group-hover:via-slate-800/40 transition-colors duration-300"></div>
                    
                    {/* Play Button Mock */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                      </div>
                    </div>

                    {/* Reel Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm mb-1 truncate">Product Launch {item}</p>
                      <div className="flex items-center text-slate-300 text-xs gap-3">
                        <span className="flex items-center"><svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>12.4K</span>
                        <span className="flex items-center"><svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>842</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-slate-400 text-lg">Ready to elevate your brand? Drop us a message and we'll get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <input type="text" id="name" required className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input type="email" id="email" required className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
              <textarea id="message" rows="5" required className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5">
              Send Message to Vajid & Team
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} ASAS Business Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
