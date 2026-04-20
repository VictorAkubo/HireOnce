"use client"

const CreateCompanyOnly = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#f8fafc]">
      <div className="w-full max-w-2xl bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
        <h1 className="text-3xl font-black uppercase italic tracking-tighter mb-8 text-[#0d2b45]">
          Register <span className="text-[#13adc2]">Partner</span>
        </h1>
        <div className="space-y-5">
           <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Company Name" className="p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium" />
              <input type="text" placeholder="Industry" className="p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium" />
           </div>
           <input type="text" placeholder="Logo URL" className="w-full p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium" />
           <input type="text" placeholder="Headquarters" className="w-full p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium" />
           <textarea placeholder="About Company..." rows="4" className="w-full p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium resize-none" />
           <textarea placeholder="Internal Admin Comment..." className="w-full p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium italic border border-slate-200" />
           
           <button className="w-full py-5 bg-[#13adc2] text-[#0d2b45] font-black uppercase rounded-2xl hover:bg-[#0d2b45] hover:text-white transition-all">
             Save Company Profile
           </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompanyOnly;