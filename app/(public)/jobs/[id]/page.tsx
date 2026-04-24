"use client"
import axios from "axios"
import React,{useState,useEffect} from "react"
import {useParams} from "next/navigation"
import Link from 'next/link';
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  Share2, 
  ShieldCheck,
  Globe,
  Briefcase
} from 'lucide-react';

const JobDetailsPage = () => {
  const param = useParams()
  const {id} = param;
  const [FEATURED_JOB,setFEATURED_JOB]= useState(null)
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/fetchcompany`)
      const fetchedData = res.data.data;
      const JobData = fetchedData.flatMap(company=>company.jobs).find(job=>job._id == id)
      setFEATURED_JOB(JobData)
      }catch(error){
      alert("refresh page")
    }
    }
    fetchData()
  },[])

  const formattedSalary = new Intl.NumberFormat().format(FEATURED_JOB?.salary);

  return (
    <div key={id} className="min-h-screen bg-[#f3f4f6] font-sans text-[#0d2b45] pb-20">
      
      {/* --- TOP BAR / BACK BUTTON --- */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/jobs" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#13adc2] transition-colors">
            <ArrowLeft size={16} /> Back to Jobs
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-[#13adc2] transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- LEFT: MAIN CONTENT --- */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center text-2xl font-black text-[#13adc2] italic">
                  {FEATURED_JOB?.company?.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h1 className="text-3xl font-black leading-tight mb-2">{FEATURED_JOB?.name}</h1>
                  <div className="flex items-center gap-2 text-gray-500 font-bold">
                    <Building2 size={16} className="text-[#13adc2]" />
                    {FEATURED_JOB?.company}
                  </div>
                </div>
              </div>

              <hr className="border-gray-50 mb-8" />

              {/* Description */}
              <div className="prose prose-slate max-w-none">
                <h3 className="text-lg font-bold mb-4 italic">About the Role</h3>
                <p className="text-gray-500 leading-relaxed whitespace-pre-line mb-8">
                  {FEATURED_JOB?.description}
                </p>

                <h3 className="text-lg font-bold mb-4 italic">Core Requirements</h3>
             {/* <ul className="space-y-4">
                  {FEATURED_JOB[0].requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                      <CheckCircle2 size={18} className="text-[#13adc2] mt-0.5 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>*/}
              </div>
            </div>

            {/* Verification Badge Section */}
            <div className="bg-[#0d2b45] rounded-3xl p-8 flex items-center gap-6 text-white overflow-hidden relative">
              <ShieldCheck size={40} className="text-[#13adc2] shrink-0" />
              <div>
                <h4 className="font-bold">Verified Listing</h4>
                <p className="text-xs text-gray-400 mt-1">This job has been manually vetted by the HireOnce team to ensure safety and authenticity.</p>
              </div>
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#13adc2] opacity-10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            </div>
          </div>

          {/* --- RIGHT: ACTIONS & SUMMARY --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl sticky top-24">
              <div className="space-y-6 mb-8">
                {/* Status Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</span>
                  {FEATURED_JOB?.hiringStatus ? (
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded-full uppercase tracking-wider">Accepting Applications</span>
                  ) : (
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-black rounded-full uppercase tracking-wider">Hiring Paused</span>
                  )}
                </div>

                {/* Info List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                      <DollarSign size={18} className="text-[#13adc2]" /> Salary
                    </div>
                    <span className="text-sm font-black">{FEATURED_JOB?.salaryCurrency} {formattedSalary}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                      <Globe size={18} className="text-[#13adc2]" /> Location
                    </div>
                    <span className="text-sm font-black">{FEATURED_JOB?.locationType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                      <Clock size={18} className="text-[#13adc2]" /> Posted
                    </div>
                    <span className="text-sm font-black">4 days ago</span>
                  </div>
                </div>
              </div>

              <button 
                disabled={!FEATURED_JOB?.hiringStatus}
                className="w-full bg-[#13adc2] text-white py-4 rounded-2xl font-black text-sm hover:bg-[#0f8e9f] transition-all shadow-lg shadow-[#13adc2]/20 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Apply for this Position
              </button>
              
              <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">
                Job ID: {id || "001"}
              </p>
            </div>

            {/* Quick Tips */}
            <div className="px-4 text-center">
              <p className="text-xs text-gray-400 leading-relaxed font-medium">
                Make sure your portfolio links are updated before submitting your application.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default JobDetailsPage;