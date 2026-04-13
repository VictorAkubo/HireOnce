"use client";

import React,{useReducer} from 'react';
import Link from 'next/link';
import {X, Mail, Lock, ArrowRight, Briefcase } from 'lucide-react';
import {FaGithub,FaChrome} from "react-icons/fa"
const reducer =(state,action)=>{
  switch(action.type){
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.field]:action.payload
      }
    default:
     return state
  }
}
const LoginPage = () => {
  const [state,dispatch] = useReducer(reducer,{
    email:"",
    password:""
  })
  const Login = async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(state)
    })
    if(response.ok){
      setLoading(false)
      router.push("/")
    }
  }
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-6 font-sans text-[#0d2b45]">
      <div className="w-full max-w-[440px]">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-10 group">
          <div className="w-10 h-10 rounded-full bg-[#13adc2] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <img src="/logo.jpg" className="rounded-full h-full w-full"  />
          </div>
          <span className="text-2xl font-bold tracking-tight italic uppercase">
            Hire<span className="text-[#13adc2]">Once</span>
          </span>
        </Link>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-black mb-2">Welcome Back</h1>
            <p className="text-sm text-gray-400 font-medium italic">Enter your details to access your portal.</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  onChange={(e)=>{
                    dispatch({
                    type:"INPUT_CHANGE",
                    field:e.target.name,
                    payload:e.target.value
                    })
                  }}
                  name="email"
                  value={state.email}
                  type="email" 
                  placeholder="name@gmail.com"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#13adc2] focus:ring-4 focus:ring-[#13adc2]/5 transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[10px] font-bold text-[#13adc2] hover:underline">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  onChange={(e)=>{
                    dispatch({
                    type:"INPUT_CHANGE",
                     field:e.target.name,
                     payload:e.target.value
                    })
                  }}
                  name="password"
                  value={state.password}
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#13adc2] focus:ring-4 focus:ring-[#13adc2]/5 transition-all text-sm font-medium"
                />
              </div>
            </div>

            <button className="w-full bg-[#0d2b45] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all shadow-lg shadow-[#0d2b45]/10 mt-2">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="relative mb-8 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <span className="relative px-4 bg-white text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">Social Login</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-xs font-bold"> <FaChrome size={16}/>Google</button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-xs font-bold"><FaGithub size={16} />GitHub</button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm font-semibold text-gray-400">
            New to HireOnce? <Link href="/auth/register" className="text-[#13adc2] font-bold underline underline-offset-4">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;