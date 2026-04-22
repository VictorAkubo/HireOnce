"use client"
import { Send, Building2, Briefcase } from "lucide-react";
import {useReducer} from "react"
import {useRouter} from "next/navigation"
const reducer = (state, action)=>{
  switch(action.type){
    case "INPUT_CHANGE":
      return {...state, [action.field]:action.payload};
    default:
      return state;
  }
}
const CreateCompanyWithJob = () => {
  const router = useRouter()
  const [state,dispatch] = useReducer(reducer,{
    companyname:"",
    industry:"",
    location:"",
    about:"",
    adminComment:"",
    logo:"",
    comment:"",
    name:"",
    hiringStatus:true,
    locationType:"",
    salary:0,
    salaryCurrency:"",
    description:"",
  })
  
  const SubmitCompany_Job = async(e)=>{
    e.preventDefault();
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/postcompany&job`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(state)
    })
    if(response.ok){
      router.push("/dashboard")
    }
  }
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
            <input 
            onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="companyname"
            value={state.companyname}
            type="text" placeholder="Company Name" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
            <input 
            onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="industry"
            value={state.industry}
            type="text" placeholder="Industry (e.g. Fintech)" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
            <input 
            onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="location"
            value={state.location}
            type="text" placeholder="Location (HQ)" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
            <textarea 
            onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="about"
            value={state.about}
            placeholder="About Company..." rows="3" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium resize-none" />
            <textarea
            onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="comment"
            value={state.comment}
            placeholder="Admin Comment..." rows="2" className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium border-2 border-dashed border-slate-300" />
          </div>

          <div className="space-y-6 bg-slate-50 p-6 rounded-[2rem] border border-slate-200">
            <h2 className="text-lg font-black uppercase tracking-widest text-[#0d2b45] flex items-center gap-2">
              <Briefcase size={20}/> Initial Job
            </h2>
            <input
            onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="name"
            value={state.name}
            type="text" placeholder="Job Title" className="w-full p-4 bg-white rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
            <div className="grid grid-cols-2 gap-4">
              <input 
              onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="salary"
            value={state.salary}
              type="number" placeholder="Salary" className="w-full p-4 bg-white rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium" />
              <select 
              onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="select"
            value={state.select}
              className="p-4 bg-white rounded-2xl outline-none shadow-sm font-bold text-slate-800">
                <option>USD</option><option>NGN</option>
              </select>
            </div>
            <select 
            onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="locationType"
            value={state.locationType}
            className="w-full p-4 bg-white rounded-2xl outline-none shadow-sm text-slate-800">
              <option>Remote</option><option>Hybrid</option><option>On-site</option>
            </select>
            <textarea 
            onChange={(e)=>dispatch({type:"INPUT_CHANGE",field:e.target.name,payload:e.target.value})}
            name="description"
            value={state.description}
            placeholder="Job Description..." rows="4" className="w-full p-4 bg-white rounded-2xl outline-none shadow-sm focus:ring-2 focus:ring-[#13adc2] placeholder-slate-500 text-slate-800 font-medium resize-none" />
          </div>

          <button onClick={(e)=>SubmitCompany_Job(e)} className="lg:col-span-2 w-full py-5 bg-[#0d2b45] text-white rounded-[2rem] font-black uppercase italic tracking-widest hover:bg-[#13adc2] transition-all flex justify-center gap-3">
            <Send size={20}/> Deploy Company & Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCompanyWithJob;