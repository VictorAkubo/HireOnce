"use client"
import { useState } from "react";
import { Search, Filter, MoreVertical, ExternalLink, Trash2, Edit3, Briefcase } from "lucide-react";
import Card from "../../../components/Card";

const AdminJobs = () => {
  // Mock Data for the table
  const [jobs, setJobs] = useState([
    { id: 1, title: "Senior Frontend Engineer", company: "MetaEdge", applicants: 45, status: "Active", date: "Apr 12, 2026" },
    { id: 2, title: "UI/UX Designer", company: "BuyME Luxury", applicants: 12, status: "Pending", date: "Apr 15, 2026" },
    { id: 3, title: "Backend Developer (Node.js)", company: "FeetFitness", applicants: 89, status: "Active", date: "Mar 30, 2026" },
    { id: 4, title: "Product Manager", company: "JopaFoundation", applicants: 24, status: "Closed", date: "Apr 01, 2026" },
  ]);

  return (
    <div className="min-h-screen w-full px-4 py-8 bg-[#f8fafc] text-slate-900">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic text-slate-800">
            Jobs <span className="text-[#13adc2]">Management</span>
          </h1>
          <p className="text-slate-500 font-medium italic">Review, edit, and moderate all active listings.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#13adc2] transition-all w-full md:w-64"
            />
          </div>
          <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
            <Filter size={20} className="text-slate-600" />
          </button>
        </div>
      </div>

      {/* 2. MINI STATS ROW (Consistency with Dashboard) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card color="red" title="Live" amount="1,240" percent="+4%" description="published" icon={<Briefcase size={20}/>} />
        <Card color="blue" title="Pending" amount="42" percent="Needs" description="review" icon={<Briefcase size={20}/>} />
        <Card color="green" title="Total" amount="3,000" percent="All" description="historical" icon={<Briefcase size={20}/>} />
      </div>

      {/* 3. THE JOBS TABLE */}
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-[10px] uppercase tracking-widest font-black text-slate-400">
                <th className="px-8 py-5">Job Details</th>
                <th className="px-6 py-5">Company</th>
                <th className="px-6 py-5">Applicants</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {jobs.map((job) => (
                <tr key={job.id} className="group hover:bg-slate-50/80 transition-colors">
                  <td className="px-8 py-6">
                    <div>
                      <p className="font-bold text-slate-800 text-lg tracking-tight group-hover:text-[#13adc2] transition-colors cursor-pointer">
                        {job.title}
                      </p>
                      <p className="text-xs text-slate-400 italic">Posted on {job.date}</p>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-medium text-slate-600">{job.company}</td>
                  <td className="px-6 py-6">
                    <span className="font-mono font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
                      {job.applicants}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      job.status === 'Active' ? 'bg-green-100 text-green-600' : 
                      job.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all">
                        <Edit3 size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-900 transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminJobs;