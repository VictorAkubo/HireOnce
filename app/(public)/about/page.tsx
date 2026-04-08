import React from 'react';

const AboutPage = () => {
  const highlights = [
    "Remote talent sourcing",
    "Candidate screening and vetting",
    "Administrative and operational roles",
    "Global talent connections"
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-[#0d2b45]">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Hire<span className="text-[#13adc2]">Once</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#13adc2]">Solutions</a>
            <a href="#" className="text-[#13adc2] border-b-2 border-[#13adc2] pb-5 mt-5">About Us</a>
            <a href="#" className="hover:text-[#13adc2]">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Main Content Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {/* Header/Hero Area */}
          <div className="p-8 md:p-16 border-b border-gray-100">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Hire <span className="text-[#13adc2]">reliable</span> remote professionals efficiently.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              HireOnce is a talent sourcing and recruitment partner. We connect global businesses 
              with skilled talent, focusing on quality, reliability, and long-term fit.
            </p>
          </div>

          {/* Details Section */}
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 bg-gray-50/50">
            <div>
              <h2 className="text-xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Our goal is simple: help companies find the right candidate the first time. 
                We eliminate the friction of global hiring, allowing you to scale with 
                confidence and speed.
              </p>
              <p className="mt-6 font-bold text-[#13adc2] tracking-wide uppercase text-sm">
                Find the Right Fit. Once.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-widest text-gray-400 font-bold">What we focus on</h2>
              <ul className="grid gap-3">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                    <span className="text-[#13adc2]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-4">Ready to start sourcing?</h3>
          <button className="bg-[#13adc2] hover:bg-[#0f8e9f] text-white px-8 py-3 rounded-full font-bold transition-all">
            Contact a Partner
          </button>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;