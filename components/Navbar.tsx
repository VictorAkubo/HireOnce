"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { Briefcase, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const authRoutes = ['/auth/login', '/auth/signup', '/auth/register'];
  
  if (authRoutes.includes(pathname)) {
    return null;
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-[100] h-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#13adc2] flex items-center justify-center shadow-sm group-hover:rotate-3 transition-transform">
  <img src="/logo.jpg" className="rounded-full h-full w-full"  />
          </div>
          <span className="text-xl font-bold tracking-tighter italic uppercase text-[#0d2b45]">
            Hire<span className="text-[#13adc2]">Once</span>
          </span>
        </Link>

        {/* --- DESKTOP NAV --- */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-400">
          <Link href="/jobs" className={pathname === '/jobs' ? 'text-[#13adc2]' : 'hover:text-[#0d2b45]'}>Find Jobs</Link>
          <Link href="/companies" className={pathname === '/companies' ? 'text-[#13adc2]' : 'hover:text-[#0d2b45]'}>Partners</Link>
          <Link href="/about" className={pathname === '/about' ? 'text-[#13adc2]' : 'hover:text-[#0d2b45]'}>About</Link>
        </div>

        {/* --- DESKTOP AUTH --- */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/auth/login" className="text-sm font-bold text-gray-500 hover:text-[#0d2b45]">Sign In</Link>
          <Link 
            href="/auth/signup" 
            className="bg-[#0d2b45] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#13adc2] transition-all flex items-center gap-2"
          >
            Get Started <ArrowRight size={14} />
          </Link>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button className="md:hidden text-gray-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 md:hidden shadow-xl">
          <Link onClick={()=>setIsOpen(false)}  href="/jobs" className="text-lg font-bold text-[#0d2b45]">Find Jobs</Link>
          <Link onClick={()=>setIsOpen(false)}  href="/companies" className="text-lg font-bold text-[#0d2b45]">Partners</Link>
          <Link href="/auth/login" className="text-center font-bold text-gray-500">Sign In</Link>
          <Link href="/auth/register" className="bg-[#13adc2] text-white py-4 rounded-2xl text-center font-bold">Sign Up Free</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;