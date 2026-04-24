"use client"
import axios from "axios"
import {useState,useEffect} from "react"
import {useParams} from "next/navigation"
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Clock, 
  Filter, 
  ChevronRight,
  Briefcase,
  Globe
} from 'lucide-react';


const JobsPage = () => {
  const param = useParams()
  const {id} = param;
  const [CompanyJobs,setCompanyJobs] = useState([]);
  useEffect(()=>{
    
    const fetchData = async ()=>{
      try{
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/fetchcompany`)
     setCompanyJobs(res.data.data.flatMap((company)=>company.jobs))
      }catch(error){
      alert("refresh page")
    }
    }
    fetchData()

  },[])
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-[#0d2b45]">
      
      {/* --- PAGE HEADER --- */}
      <header className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-black italic uppercase tracking-tight">
            Current <span className="text-[#13adc2]">Opportunities</span>
          </h1>
          <p className="text-gray-400 mt-2 font-medium">Explore hand-picked roles from our verified global partners.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-4 gap-8">
        
        {/* --- SIDEBAR FILTERS --- */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6 font-bold text-sm uppercase tracking-widest text-gray-400">
              <Filter size={16} /> Filters
            </div>
            
            <div className="space-y-8">
              {/* Search */}
              <div className="space-y-3">
                <label className="text-xs font-bold">Search Keywords</label>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input 
                    type="text" 
                    placeholder="e.g. React" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-[#13adc2] transition-all"
                  />
                </div>
              </div>

              {/* Location Type */}
              <div className="space-y-3">
                <label className="text-xs font-bold">Location Type</label>
                <div className="flex flex-col gap-2">
                  {['Remote', 'Hybrid', 'On-site'].map((type) => (
                    <label key={type} className="flex items-center gap-2 text-sm font-medium text-gray-500 cursor-pointer hover:text-[#13adc2]">
                      <input type="checkbox" className="accent-[#13adc2] rounded" /> {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div className="space-y-3">
                <label className="text-xs font-bold">Minimum Salary</label>
                <input type="range" className="w-full accent-[#13adc2]" min="0" max="200000" />
                <div className="flex justify-between text-[10px] font-bold text-gray-400">
                  <span>$0</span>
                  <span>$200k+</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* JOB LISTINGS */}
        <div className="lg:col-span-3 space-y-4">
          {CompanyJobs.map((job) => (
            <div 
              key={job._id} 
              className={`bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group ${!job.hiringStatus ? 'opacity-60 grayscale-[0.5]' : 'border-gray-200'}`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex gap-5">
                  {/* Company Mini Logo */}
                  <div className="w-14 h-14 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center font-black text-gray-200 italic group-hover:text-[#13adc2] transition-colors">
                    {job.company?.substring(0, 2).toUpperCase()}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-xl font-bold group-hover:text-[#13adc2] transition-colors">{job.name}</h2>
                      {job.hiringStatus ? (
                        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">Active</span>
                      ) : (
                        <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">Paused</span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-500 mb-4">{job.company}</p>
                    
                    <div className="flex flex-wrap gap-5 text-xs font-bold text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#13adc2]" /> {job.locationType}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign size={14} className="text-[#13adc2]" /> 
                        {new Intl.NumberFormat().format(job.salary)} {job.salaryCurrency}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-[#13adc2]" /> 
                        {new Date(job.postedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between gap-3">
                   <button 
                    disabled={!job.hiringStatus}
                    className="px-6 py-3 bg-[#0d2b45] text-white text-sm font-bold rounded-xl hover:bg-black transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
                   >
                     Apply Now
                   </button>
                   <Link href={`/jobs/${job._id}`} className="text-xs font-bold text-[#13adc2] flex items-center gap-1 hover:underline">
                     Details <ChevronRight size={14} />
                   </Link>
                </div>
              </div>
              
              {/* Short Description */}
              <p className="mt-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobsPage;