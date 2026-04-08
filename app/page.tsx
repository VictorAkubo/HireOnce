"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Briefcase, 
  MapPin, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Users, 
  CheckCircle2,
  Building2,
  TrendingUp
} from 'lucide-react';

const FEATURED_COMPANIES = [
  {
    id: "techflow",
    name: "TechFlow Systems",
    industry: "Software Development",
    location: "Remote / Lagos",
    logoInitial: "TF",
    jobs: [
      { id: "j1", title: "Senior Frontend Engineer", type: "Full-time" },
      { id: "j2", title: "Product Designer", type: "Contract" },
      { id: "j3", title: "Node.js Developer", type: "Full-time" },
      { id: "j4", title: "QA Analyst", type: "Full-time" }, // This one will be hidden on home
    ]
  },
  {
    id: "bluepeak",
    name: "BluePeak Logistics",
    industry: "Operations",
    location: "Remote",
    logoInitial: "BP",
    jobs: [
      { id: "j5", title: "Operations Manager", type: "Full-time" },
      { id: "j6", title: "Customer Success", type: "Full-time" },
      { id: "j7", title: "Admin Assistant", type: "Contract" },
    ]
  },
  {
    id: "finedge",
    name: "FinEdge Partners",
    industry: "Fintech",
    location: "Hybrid / UK",
    logoInitial: "FE",
    jobs: [
      { id: "j8", title: "Data Scientist", type: "Full-time" },
      { id: "j9", title: "Compliance Officer", type: "Full-time" },
    ]
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-[#0d2b45] selection:bg-[#13adc2]/20">
      

      <main>
        {/* --- HERO SECTION --- */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Find the Right Company. <span className="text-[#13adc2]">Once.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Skip the endless hunt. We connect verified talent with the world's most 
              reliable remote-first companies.
            </p>
            
            {/* Professional Search Input */}
            <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row gap-2 mb-8">
              <div className="flex-grow flex items-center px-4 gap-3 border-r border-gray-100">
                <Search size={20} className="text-gray-400" strokeWidth={1.5} />
                <input 
                  type="text" 
                  placeholder="Job title or keywords..." 
                  className="w-full py-4 outline-none text-gray-700 bg-transparent text-sm font-medium"
                />
              </div>
              <div className="flex items-center px-4 gap-3 md:w-48">
                <MapPin size={20} className="text-gray-400" strokeWidth={1.5} />
                <span className="text-sm text-gray-500 font-medium">Remote</span>
              </div>
              <button className="bg-[#0d2b45] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg">
                Search
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#13adc2]" /> Verified Partners</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#13adc2]" /> 100% Remote-First</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#13adc2]" /> No Spam</span>
            </div>
          </div>
        </section>

        {/* --- STATS BAR --- */}
        <section className="max-w-6xl mx-auto -mt-10 grid grid-cols-1 md:grid-cols-3 gap-0 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-50">
          {[
            { label: "Jobs Posted", val: "10,000+", icon: <TrendingUp size={20} className="text-[#13adc2]" /> },
            { label: "Active Clients", val: "2,000+", icon: <Users size={20} className="text-[#13adc2]" /> },
            { label: "Verified Partners", val: "500+", icon: <ShieldCheck size={20} className="text-[#13adc2]" /> }
          ].map((stat, i) => (
            <div key={i} className="p-8 text-center flex flex-col items-center gap-1">
              <div className="text-3xl font-black text-[#0d2b45] flex items-center gap-2">
                {stat.icon}
                {stat.val}
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* --- NESTED COMPANY & JOBS SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs font-bold text-[#13adc2] uppercase tracking-[0.2em] mb-2">Partner Directory</h2>
              <h3 className="text-3xl font-bold">Featured Companies & Openings</h3>
            </div>
            <Link href="/companies" className="text-sm font-bold text-[#0d2b45] hover:text-[#13adc2] flex items-center gap-1 transition-all underline underline-offset-4">
              Explore all partners <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_COMPANIES.map((company) => (
              <div key={company.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col">
                {/* Company Branding */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-xl font-black text-gray-200 italic">
                    {company.logoInitial}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{company.name}</h4>
                    <p className="text-xs text-gray-400 font-medium flex items-center gap-1 mt-1">
                      <Building2 size={12} /> {company.industry}
                    </p>
                  </div>
                </div>

                {/* Nested Jobs (The Sneak Peek) */}
                <div className="space-y-2 mb-8 flex-grow">
                  <p className="text-[10px] uppercase font-bold text-gray-300 tracking-[0.15em] mb-3">Latest Roles</p>
                  {company.jobs.slice(0, 3).map((job) => (
                    <Link 
                      href={`/jobs/${job.id}`} 
                      key={job.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 hover:bg-[#13adc2]/5 group transition-all"
                    >
                      <div>
                        <p className="text-sm font-bold text-gray-700 group-hover:text-[#13adc2] transition-colors">{job.title}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{job.type}</p>
                      </div>
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-[#13adc2] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  ))}
                </div>

                {/* Footer Link */}
                <Link 
                  href={`/companies/${company.id}`}
                  className="w-full py-3 bg-gray-50 text-[#0d2b45] text-xs font-bold rounded-xl hover:bg-[#0d2b45] hover:text-white text-center transition-all"
                >
                  View Full Profile
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* --- PARTNER BANNER --- */}
        <section className="max-w-7xl mx-auto px-6 py-20 pb-32">
          <div className="bg-[#0d2b45] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="md:w-3/5 relative z-10 text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">Hire with reliability.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Stop wasting time on unvetted applications. Our partner network 
                connects you with professionals who fit your culture and technical needs.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="bg-[#13adc2] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0d2b45] transition-all">
                  Partner With Us
                </button>
                <Link href="/about" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                  Our Methodology
                </Link>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center relative z-10">
               <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <ShieldCheck size={40} className="text-[#13adc2] mb-4" />
                  <p className="text-white font-medium italic opacity-90">
                    "Find the right fit. Once. That is the core promise we deliver to every hiring manager."
                  </p>
               </div>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#13adc2] opacity-10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-16">
          <div className="space-y-6">
            <div className="text-2xl font-bold italic uppercase">Hire<span className="text-[#13adc2]">Once</span></div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed font-medium">
              Connecting elite remote talent with verified global partners through precision and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">Directory</h6>
              <ul className="text-sm space-y-4 font-bold text-gray-500">
                <li><Link href="/jobs" className="hover:text-[#13adc2]">Remote Jobs</Link></li>
                <li><Link href="/companies" className="hover:text-[#13adc2]">Partner Companies</Link></li>
                <li><Link href="/about" className="hover:text-[#13adc2]">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-6">Support</h6>
              <ul className="text-sm space-y-4 font-bold text-gray-500">
                <li><Link href="/contact" className="hover:text-[#13adc2]">Contact Support</Link></li>
                <li><Link href="/privacy" className="hover:text-[#13adc2]">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} HireOnce. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#13adc2]">LinkedIn</a>
            <a href="#" className="hover:text-[#13adc2]">Twitter</a>
            <a href="#" className="hover:text-[#13adc2]">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;