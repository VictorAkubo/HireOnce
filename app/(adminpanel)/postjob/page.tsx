"use client"
import { Search, ChevronDown, PlusCircle } from "lucide-react";

const AddJobToCompany = () => {
  // Logic: You would fetch companies from database here
  const availableCompanies = ["MetaEdge", "BuyME Luxury", "FeetFitness"];

  return (
    <div className="min-h-screen w-full px-4 py-10 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-[#0d2b45]">
            Add New <span className="text-[#13adc2]">Opening</span>
          </h1>
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl space-y-8">
          {/* DATABASE MAPPING SECTION */}
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Select Company from Database</label>
            <div className="relative">
              <select className="w-full p-5 bg-[#0d2b45] text-white rounded-2xl outline-none appearance-none font-bold cursor-pointer transition-all hover:bg-[#13adc2]">
                <option disabled selected>Choose a company...</option>
                {availableCompanies.map(c => <option key={c}>{c}</option>)}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
            </div>
          </div>

          <div className="h-[1px] bg-slate-100 w-full" />

          {/* NEW JOB DATA */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold italic text-[#0d2b45]">Job Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <input type="text" placeholder="Position Name" className="p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2]" />
               <input type="text" placeholder="Location Type (Remote/etc)" className="p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2]" />
               <input type="number" placeholder="Salary Amount" className="p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2]" />
               <select className="p-4 bg-slate-50 rounded-2xl outline-none font-bold">
                 <option>USD</option><option>NGN</option>
               </select>
            </div>
            <textarea placeholder="Job Description & Requirements..." rows="5" className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] resize-none" />
          </div>

          <button className="w-full py-5 bg-[#13adc2] text-[#0d2b45] font-black uppercase italic tracking-widest rounded-2xl flex justify-center items-center gap-2 hover:scale-[1.02] transition-transform">
            <PlusCircle size={20} /> Update Company Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJobToCompany