"use client"
import { useState } from "react";
import { ChevronDown, PlusCircle, Search, Check } from "lucide-react";

const AddJobToCompany = () => {
  // Mock data - in reality, you'd fetch this from your "company" collection
  const availableCompanies = [
    "MetaEdge", "BuyME Luxury", "FeetFitness", "JopaFoundation", 
    "TechCorp", "Innovate NI", "GreenGrid", "Skyline Solutions"
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredCompanies = availableCompanies.filter(company =>
    company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full px-4 py-10 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center text-[#0d2b45]">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter">
            Add New <span className="text-[#13adc2]">Opening</span>
          </h1>
          <p className="text-slate-500 italic mt-2">Find a company to update their job listings.</p>
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl space-y-8 border border-slate-100">
          
          {/* SEARCHABLE DROPDOWN SECTION */}
          <div className="space-y-3 relative">
            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-2">
              Search Company Database
            </label>
            
            {/* Custom Select Trigger */}
            <div 
              onClick={() => setIsOpen(!isOpen)}
              className="w-full p-5 bg-[#0d2b45] text-white rounded-2xl flex items-center justify-between cursor-pointer hover:bg-[#13adc2] transition-all shadow-lg"
            >
              <span className="font-bold">
                {selectedCompany || "Select a company..."}
              </span>
              <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute z-50 w-full mt-2 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-4 border-b border-slate-100 bg-slate-50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      autoFocus
                      type="text" 
                      placeholder="Type to filter..." 
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-[#13adc2] text-slate-800"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="max-h-60 overflow-y-auto">
                  {filteredCompanies.length > 0 ? (
                    filteredCompanies.map((company) => (
                      <div 
                        key={company}
                        onClick={() => {
                          setSelectedCompany(company);
                          setIsOpen(false);
                          setSearchTerm("");
                        }}
                        className="px-6 py-4 hover:bg-slate-50 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <span className={`font-medium ${selectedCompany === company ? "text-[#13adc2] font-bold" : "text-slate-700"}`}>
                          {company}
                        </span>
                        {selectedCompany === company && <Check size={18} className="text-[#13adc2]" />}
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-slate-400 italic">No companies found</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="h-[1px] bg-slate-200 w-full" />

          {/* NEW JOB DATA FORM */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold italic text-[#0d2b45]">Job Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <input type="text" placeholder="Position Name" className="p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
               <input type="text" placeholder="Location Type (Remote/Hybrid)" className="p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
               <input type="number" placeholder="Salary Amount" className="p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
               <select className="p-4 bg-slate-100 rounded-2xl outline-none font-black text-slate-800 appearance-none">
                 <option>USD</option>
                 <option>NGN</option>
               </select>
            </div>
            <textarea placeholder="Job Description & Requirements..." rows="5" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium resize-none" />
          </div>

          <button className="w-full py-5 bg-[#13adc2] text-[#0d2b45] font-black uppercase italic tracking-widest rounded-2xl flex justify-center items-center gap-2 hover:scale-[1.02] transition-transform shadow-lg active:scale-95">
            <PlusCircle size={20} /> Update Company Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJobToCompany;