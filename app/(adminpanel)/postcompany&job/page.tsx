"use client"
import { Send, Building2, Briefcase } from "lucide-react";

const CreateCompanyWithJob = () => {
  return (
    <div className="min-h-screen w-full px-4 py-10 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-black tracking-tighter uppercase italic text-[#0d2b45]">
            Full <span className="text-[#13adc2]">Onboarding</span>
          </h1>
        </div>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="space-y-6">
            <h2 className="text-lg font-black uppercase tracking-widest text-[#13adc2] flex items-center gap-2">
              <Building2 size={20}/> Company Profile
            </h2>
            <input type="text" placeholder="Company Name" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
            <input type="text" placeholder="Industry (e.g. Fintech)" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
            <input type="text" placeholder="Location (HQ)" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
            <textarea placeholder="About Company..." rows="3" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium resize-none" />
            <textarea placeholder="Admin Comment..." rows="2" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium border-2 border-dashed border-slate-300" />
          </div>

          <div className="space-y-6 bg-slate-50 p-6 rounded-[2rem] border border-slate-200">
            <h2 className="text-lg font-black uppercase tracking-widest text-[#0d2b45] flex items-center gap-2">
              <Briefcase size={20}/> Initial Job
            </h2>
            <input type="text" placeholder="Job Title" className="w-full p-4 bg-white rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
            <div className="grid grid-cols-2 gap-4">
              <input type="number" placeholder="Salary" className="w-full p-4 bg-white rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
              <select className="p-4 bg-white rounded-2xl outline-none shadow-sm font-bold text-slate-800">
                <option>USD</option><option>NGN</option>
              </select>
            </div>
            <select className="w-full p-4 bg-white rounded-2xl outline-none shadow-sm text-slate-800">
              <option>Remote</option><option>Hybrid</option><option>On-site</option>
            </select>
            <textarea placeholder="Job Description..." rows="4" className="w-full p-4 bg-white rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium resize-none" />
          </div>

          <button className="lg:col-span-2 w-full py-5 bg-[#0d2b45] text-white rounded-[2rem] font-black uppercase italic tracking-widest hover:bg-[#13adc2] transition-all flex justify-center gap-3">
            <Send size={20}/> Deploy Company & Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCompanyWithJob;