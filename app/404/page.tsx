"use client"
import React from 'react';

const NotFound = () => {
  const brandTeal = "#13adc2"; // Extracted from your logo
  const brandNavy = "#0d2b45"; // Extracted from your logo

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col font-sans">
      {/* Simple Header */}
      <nav className="bg-white border-b border-gray-200 py-3 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xl font-bold tracking-tight text-[#0d2b45]">
            Hire<span className="text-[#13adc2]">Once</span>
          </span>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm max-w-[550px] w-full p-12 text-center">
          <div className="mb-6">
             {/* Icon placeholder for your logo mark */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#13adc2]/10 mb-4">
              <svg className="w-8 h-8 text-[#13adc2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">This page doesn't exist</h1>
            <p className="text-gray-600 mt-3">
              Please check your URL or return to the home page to find your next great hire.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/"
              className="px-5 py-2.5 bg-[#13adc2] text-white font-semibold rounded-full hover:bg-[#0f8e9f] transition-colors"
            >
              Go to Home
            </a>
            <button 
              onClick={() => window.history.back()}
              className="px-5 py-2.5 border border-[#13adc2] text-[#13adc2] font-semibold rounded-full hover:bg-[#13adc2]/5 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} HireOnce · Find the Right Fit. Once.
      </footer>
    </div>
  );
};

export default NotFound;