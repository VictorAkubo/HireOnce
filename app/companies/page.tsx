"use client"
import React, { useState } from 'react';

const CompaniesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const industries = ["All Industries", "Technology", "Healthcare", "Finance", "Logistics", "Marketing"];
  const locations = ["Remote", "Lagos, NG", "London, UK", "New York, US", "Nairobi, KE"];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-[#0d2b45]">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight italic uppercase">
            Hire<span className="text-[#13adc2]">Once</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
            <a href="/jobs" className="hover:text-[#13adc2]">Jobs</a>
            <a href="/companies" className="text-[#13adc2] border-b-2 border-[#13adc2] pb-5 mt-5">Companies</a>
            <a href="/about" className="hover:text-[#13adc2]">About</a>
          </div>
          <button className="text-sm font-bold text-gray-600 hover:text-[#13adc2]">Sign In</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Browse Companies</h1>
          <p className="text-gray-500">Discover and connect with 500+ verified remote talent partners.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDEBAR: FILTERS */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Filter By</h2>
              
              <div className="space-y-6">
                {/* Search Input */}
                <div>
                  <label className="block text-xs font-bold mb-2 text-gray-600">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Search e.g. TechCorp"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#13adc2] transition-all"
                  />
                </div>

                {/* Industry Filter */}
                <div>
                  <label className="block text-xs font-bold mb-2 text-gray-600">Industry</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#13adc2]">
                    {industries.map(ind => <option key={ind}>{ind}</option>)}
                  </select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-xs font-bold mb-2 text-gray-600">Location</label>
                  <div className="space-y-2 mt-2">
                    {locations.map(loc => (
                      <label key={loc} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" className="rounded text-[#13adc2] focus:ring-[#13adc2]" />
                        {loc}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-2 bg-[#13adc2]/10 text-[#13adc2] font-bold rounded-lg text-sm hover:bg-[#13adc2] hover:text-white transition-all">
                Clear All Filters
              </button>
            </div>

            {/* Promo Card */}
            <div className="bg-[#0d2b45] p-6 rounded-xl text-white">
              <h3 className="font-bold mb-2">Want to be featured?</h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">Boost your company's visibility to over 10k monthly job seekers.</p>
              <button className="text-xs font-bold text-[#13adc2] hover:underline">Get started →</button>
            </div>
          </aside>

          {/* RIGHT CONTENT: COMPANY GRID */}
          <div className="lg:w-3/4">
            {/* Sorting Header */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <span className="text-sm font-medium text-gray-500">Showing <span className="text-[#0d2b45] font-bold">124</span> companies</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase">Sort by:</span>
                <select className="text-sm font-semibold bg-transparent outline-none cursor-pointer">
                  <option>Most Recent</option>
                  <option>Most Jobs</option>
                  <option>A-Z</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "TechFlow Systems", ind: "Technology", loc: "Remote", jobs: 12 },
                { name: "BluePeak Logistics", ind: "Logistics", loc: "Lagos, NG", jobs: 4 },
                { name: "GreenPoint Health", ind: "Healthcare", loc: "London, UK", jobs: 8 },
                { name: "FinEdge Partners", ind: "Finance", loc: "New York, US", jobs: 21 },
                { name: "SwiftSourcing", ind: "HR & Recruitment", loc: "Remote", jobs: 6 },
                { name: "MetaEdge Media", ind: "Marketing", loc: "Remote", jobs: 15 },
              ].map((company, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#13adc2]/30 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-xl font-black text-gray-300 italic group-hover:text-[#13adc2] transition-colors">
                      {company.name.charAt(0)}
                    </div>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tighter">
                      Verified
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold group-hover:text-[#13adc2] transition-colors mb-1">
                    {company.name}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">📍 {company.loc}</span>
                    <span className="flex items-center gap-1">🏢 {company.ind}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xs font-bold text-[#13adc2]">{company.jobs} Open Jobs</span>
                    <a 
                      href={`/companies/${index}`}
                      className="px-4 py-2 bg-gray-50 text-[#0d2b45] text-xs font-bold rounded-lg hover:bg-[#0d2b45] hover:text-white transition-all"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-bold text-gray-400 cursor-not-allowed">Prev</button>
              <button className="px-4 py-2 rounded-lg border border-[#13adc2] bg-[#13adc2] text-white text-sm font-bold">1</button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-bold hover:border-[#13adc2] transition-all">2</button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-bold hover:border-[#13adc2] transition-all">Next</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-10 border-t border-gray-200 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} HireOnce · Discover the Right Fit. Once.
      </footer>
    </div>
  );
};

export default CompaniesPage;