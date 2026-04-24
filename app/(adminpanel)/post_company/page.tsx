"use client"
import {useState} from "react"
import {useRouter} from "next/navigation"
import axios from "axios"
import cloudinary from "cloudinary"

const CreateCompanyOnly = () => {
  const router = useRouter()
  const [file,setFile] = useState(null)
  const [url,setUrl] = useState("")
  
  const [state,setState] = useState({
    companyname:"",
    industry:"",
    location:"",
    about:"",
    adminComment:"",
    logo:"",
    comment:"",
  })
  const OnchangeInput=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  const PostCompany =async(e)=>{
    e.preventDefault();
    const formData = new FormData();
  
  // These two lines are the most important
  formData.append('file', file);
  formData.append('upload_preset', 'hireonce'); 

  try {
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dzmd7qolg/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const data = await res.json();
    setState({
      ...state,
      logo:data.secure_url
    })
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/postcompany`,
      state,{
      headers:{
        "Content-Type":"application/json"
      }
      })
    router.push("/dashboard")
  } catch (error) {
    console.error('Upload failed:', error);
  }
  
      if(url){
        
      }
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#f8fafc]">
      <div className="w-full max-w-2xl bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
        <h1 className="text-3xl font-black uppercase italic tracking-tighter mb-8 text-[#0d2b45]">
          Register <span className="text-[#13adc2]">Partner</span>
        </h1>
        <div className="space-y-5">
           <div className="grid grid-cols-2 gap-4">
              <input
              onChange={OnchangeInput}
              name="companyname"
              value={state.companyname}
              type="text" placeholder="Company Name" className="p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium" />
              <input
              onChange={OnchangeInput}
              name="industry"
              value={state.industry}
              type="text" placeholder="Industry" className="p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium" />
           </div>
           <input 
           onChange={(e)=>setFile(e.target.files[0])}
           type="file" placeholder="Logo URL" className="w-full p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium" />
           <input
             onChange={OnchangeInput}
              name="location"
              value={state.location}
           type="text" placeholder="Headquarters" className="w-full p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium" />
           <textarea
           onChange={OnchangeInput}
              name="about"
              value={state.about}placeholder="About Company..." rows="4" className="w-full p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium resize-none" />
           <textarea 
           onChange={OnchangeInput}
              name="comment"
              value={state.comment}
           placeholder="Internal Admin Comment..." className="w-full p-4 bg-slate-100 rounded-2xl outline-none placeholder-slate-500 text-slate-800 font-medium italic border border-slate-200" />
           
           <button onClick={PostCompany} className="w-full py-5 bg-[#13adc2] text-[#0d2b45] font-black uppercase rounded-2xl hover:bg-[#0d2b45] hover:text-white transition-all">
             Save Company Profile
           </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompanyOnly;