"use client";

import React from 'react';
import Link from 'next/link';
import { User, Mail, Lock, ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-6 font-sans text-[#0d2b45]">
      <div className="w-full max-w-[480px]">
        {/* Brand Header */}
        <div className="text-center mb-8">
           <Link href="/" className="inline-flex items-center gap-2 mb-6">
   <div className="w-10 h-10 rounded-full bg-[#13adc2] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <img src="/logo.jpg" className="rounded-full h-full w-full"  />
            </div>
              <span className="text-2xl font-bold tracking-tight italic uppercase">Hire<span className="text-[#13adc2]">Once</span></span>
           </Link>
           <h1 className="text-3xl font-black">Join as Talent</h1>
           <p className="text-sm text-gray-400 font-medium italic mt-1 text-balance">One application to access hundreds of verified remote roles.</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100">
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input type="text" placeholder="Akubo Victor" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#13adc2] focus:ring-4 focus:ring-[#13adc2]/5 transition-all text-sm font-medium" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input type="email" placeholder="name@example.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#13adc2] focus:ring-4 focus:ring-[#13adc2]/5 transition-all text-sm font-medium" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input type="password" placeholder="Min. 8 characters" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#13adc2] focus:ring-4 focus:ring-[#13adc2]/5 transition-all text-sm font-medium" />
              </div>
            </div>

            <div className="py-4 space-y-3">
               <div className="flex items-start gap-2 text-[11px] font-semibold text-gray-400">
                  <CheckCircle2 size={14} className="text-[#13adc2] mt-0.5" />
                  <span>I agree to the Terms of Service & Privacy Policy.</span>
               </div>
            </div>

            <button className="w-full bg-[#13adc2] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#0f8e9f] transition-all shadow-lg shadow-[#13adc2]/10">
              Create My Account <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-8 text-center text-sm font-semibold text-gray-400">
            Already have an account? <Link href="/auth/login" className="text-[#0d2b45] font-bold underline underline-offset-4">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;