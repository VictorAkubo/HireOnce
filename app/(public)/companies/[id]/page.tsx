import React,{useState,useEffect} from 'react';
import {useParams} from "next/navigation"
import Link from 'next/link';
import axios from "axios"

const CompanyDetails = () => {
  const param = useParams()
  const {id} = param;
  const [FEATURED_JOB,setFEATURED_JOB]= useState(null)
  const brandTeal = "#13adc2";
  const brandNavy = "#0d2b45";
  
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
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-[#0d2b45]">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight italic uppercase">
            Hire<span className="text-[#13adc2]">Once</span>
          </a>
          <div className="flex gap-4">
             <button className="text-sm font-bold text-gray-500 hover:text-[#13adc2]">Back to Directory</button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* --- HEADER CARD --- */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8">
          {/* Cover Image / Pattern */}
          <div className="h-32 bg-[#0d2b45] relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          
          {/* Profile Info */}
          <div className="px-8 pb-8 flex flex-col md:flex-row items-end gap-6 -mt-12 relative z-10">
            <div className="w-32 h-32 bg-white rounded-2xl border-4 border-white shadow-lg flex items-center justify-center text-4xl font-black text-gray-200 italic">
              TF
            </div>
            <div className="flex-grow pb-2">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold">TechFlow Systems</h1>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase">Verified Partner</span>
              </div>
              <p className="text-gray-500 font-medium">Software Development • Lagos, Nigeria • 50-200 Employees</p>
            </div>
            <div className="flex gap-3 pb-2">
              <button className="px-6 py-2.5 bg-[#13adc2] text-white font-bold rounded-full hover:bg-[#0f8e9f] transition-all">
                Follow
              </button>
              <button className="px-6 py-2.5 border border-gray-200 font-bold rounded-full hover:bg-gray-50 transition-all">
                Visit Website
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* --- LEFT COLUMN: ABOUT & INFO --- */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-4">About TechFlow Systems</h2>
              <p className="text-gray-600 leading-relaxed">
                TechFlow Systems is a leading talent partner specializing in high-performance React and Node.js solutions. 
                We focus on building scalable architecture for global startups while maintaining a culture of 
                reliability and technical excellence. 
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                As a verified partner of HireOnce, we have successfully placed over 45 remote professionals 
                into long-term, high-impact roles across Europe and North America.
              </p>
            </div>

            {/* Open Positions Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Open Positions</h2>
                <span className="text-sm font-bold text-[#13adc2]">3 Jobs Available</span>
              </div>
              
              <div className="divide-y divide-gray-100">
                {[
                  { title: "Senior Frontend Engineer", type: "Full-time", salary: "$70k - $100k" },
                  { title: "Technical Project Manager", type: "Contract", salary: "$50/hr - $80/hr" },
                  { title: "DevOps Specialist", type: "Full-time", salary: "$90k - $130k" }
                ].map((job, i) => (
                  <div key={i} className="py-6 flex justify-between items-center group cursor-pointer">
                    <div>
                      <h4 className="font-bold group-hover:text-[#13adc2] transition-colors">{job.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{job.type} • Remote</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-700">{job.salary}</p>
                      <button className="text-xs font-bold text-[#13adc2] mt-1 hover:underline">Apply Now →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: SIDEBAR DETAILS --- */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-400 border-b border-gray-50 pb-2">Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Founded</p>
                  <p className="text-sm font-semibold">2018</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Headquarters</p>
                  <p className="text-sm font-semibold">Lagos, Nigeria</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Industry</p>
                  <p className="text-sm font-semibold">Information Technology</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Hiring Speed</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-grow h-1.5 bg-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-[#13adc2] w-[85%]"></div>
                    </div>
                    <span className="text-[10px] font-bold text-[#13adc2]">Fast</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Snippet */}
            <div className="bg-[#13adc2]/5 border border-[#13adc2]/20 rounded-2xl p-6">
              <div className="text-[#13adc2] text-2xl mb-2">“</div>
              <p className="text-sm italic text-gray-600 mb-4">
                "TechFlow provided us with a lead developer who felt like a founder. The quality is unmatched."
              </p>
              <p className="text-xs font-bold">— Director of Engineering, Global SaaS</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} HireOnce · Verified Partner Profile
      </footer>
    </div>
  );
};

export default CompanyDetails;