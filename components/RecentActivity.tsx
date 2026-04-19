"use client"
import { Eye, Clock, CheckCircle2 } from 'lucide-react';

const ActivityTable = ({ title, data }) => {
  return (
    <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-800">{title}</h3>
        <button className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:opacity-70">
          View All
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="group flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-100"
          >
            <div className="flex items-center gap-4">
              {/* Profile/Logo Placeholder */}
              <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-400 group-hover:bg-white group-hover:shadow-sm transition-all">
                {item.name.charAt(0)}
              </div>
              
              <div>
                <p className="font-bold text-slate-700 text-sm lg:text-base">{item.name}</p>
                <div className="flex items-center gap-2 text-slate-400 text-xs italic">
                  <Clock size={12} />
                  <span>{item.time}</span>
                  <span>•</span>
                  <span className="text-blue-500 font-medium">{item.role || item.category}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className={`hidden md:block text-[10px] font-black uppercase px-2 py-1 rounded-full ${
                item.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
              }`}>
                {item.status}
              </span>
              <button className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                <Eye size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTable;