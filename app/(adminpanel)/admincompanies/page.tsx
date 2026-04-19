"use client"
import { Building2, MapPin, Briefcase, Trash2, Edit3, Search } from "lucide-react";
import Card from "../../../components/Card";

const AdminCompanies = () => {
  // Example data mapped from your Schema
  const companies = [
    { companyname: "MetaEdge", industry: "Tech", location: "Remote", jobs: [1, 2, 3], logo: "/logo.jpg" },
    { companyname: "BuyME Luxury", industry: "Retail", location: "Lagos", jobs: [1], logo: "/logo.jpg" },
  ];

  return (
    <div className="min-h-screen w-full px-4 py-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-black tracking-tighter uppercase italic text-slate-800">
          Partner <span className="text-[#13adc2]">Companies</span>
        </h1>
        <p className="text-slate-500 italic">Manage corporate profiles and their listings.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <div key={index} className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 overflow-hidden">
                {company.logo ? <img src={company.logo} alt="logo" /> : <Building2 className="text-slate-300" />}
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:text-[#13adc2] transition-colors"><Edit3 size={18}/></button>
                <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={18}/></button>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 tracking-tight group-hover:text-[#13adc2] transition-colors">
              {company.companyname}
            </h3>
            <p className="text-sm text-slate-400 font-medium mb-4 uppercase tracking-widest">{company.industry}</p>

            <div className="flex flex-col gap-2 border-t border-slate-50 pt-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin size={14} className="text-[#13adc2]" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Briefcase size={14} className="text-[#13adc2]" />
                <span className="font-bold text-slate-700">{company.jobs.length} Active Jobs</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCompanies;