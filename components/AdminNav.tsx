"use client"
import { useState } from "react"
import { House, Plus, Building2, Briefcase, X, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AdminNav = () => {
  const pathname = usePathname()
  const [navActive, setNavActive] = useState(false) // Default to closed on mobile

  const listItems = [
    {
      name: "dashboard",
      route: "/dashboard",
      icon: <House className="h-5 w-5 lg:h-8 lg:w-8" />
    },
    {
      name: "Jobs",
      route: "/adminjobs",
      icon: <Briefcase className="h-5 w-5 lg:h-8 lg:w-8" />
    },
    {
      name: "Companies",
      route: "/admincompanies",
      icon: <Building2 className="h-5 w-5 lg:h-8 lg:w-8" />
    },
    {
      name: "Post Company & Job",
      route: "/postcompany&job",
      icon: <Plus className="h-5 w-5 lg:h-8 lg:w-8" />
    },
    {
      name: "Post Company",
      route: "/postcompany",
      icon: <Plus className="h-5 w-5 lg:h-8 lg:w-8" />
    },
    {
      name: "Post Job",
      route: "/postjob",
      icon: <Plus className="h-5 w-5 lg:h-8 lg:w-8" />
    }
  ]

  return (
    <>
      {/* --- SIDEBAR / MOBILE NAV --- */}
      <div className={`
        fixed inset-0 z-[100] transition-all duration-500 ease-in-out lg:static lg:translate-x-0
        ${navActive ? "translate-x-0" : "-translate-x-full lg:flex"}
        flex flex-col min-h-screen gap-10 pt-10 px-8 bg-[#13adc2] text-[#0d2b45] 
        lg:min-w-[300px] lg:max-w-[350px]
      `}>
        
        {/* Sidebar Header */}
        <div className="flex flex-row items-center justify-between border-b-white/20 pb-6 border-b-2">
          <div className="flex flex-row items-center gap-3">
            <img className="h-8 w-8 lg:h-12 lg:w-12 rounded-full border-2 border-white/50 shadow-md" src="/logo.jpg" alt="Logo" />
            <h1 className="text-2xl lg:text-3xl font-black tracking-tighter italic uppercase text-white leading-none">
              Hire<span className="text-[#0d2b45]">Once</span>
            </h1>
          </div>
          <button 
            onClick={() => setNavActive(false)}
            className="lg:hidden p-2 rounded-full bg-white/10 text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="w-full flex flex-col gap-4 lg:gap-6 flex-grow">
          {listItems.map((item, index) => {
            const isActive = pathname.includes(item.route);
            return (
              <Link 
                key={index} 
                href={item.route}
                onClick={() => setNavActive(false)}
                className={`
                  h-14 lg:h-16 flex flex-row items-center gap-4 px-5 rounded-2xl 
                  transition-all duration-300 font-bold tracking-tighter italic uppercase
                  ${isActive 
                    ? "bg-white text-[#13adc2] shadow-lg translate-x-2" 
                    : "text-white hover:bg-white/10 hover:translate-x-1"}
                `}
              >
                {item.icon}
                <span className="text-lg lg:text-xl">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* User Profile Section at Bottom */}
        <div className="mt-auto mb-10 p-4 bg-white/10 rounded-[2rem] backdrop-blur-sm border border-white/10 flex items-center gap-3">
          <img 
            src="/profile.jpg" 
            className="h-10 w-10 lg:h-12 lg:w-12 rounded-full border-2 border-white shadow-sm object-cover" 
            alt="Profile"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="text-[10px] uppercase font-black text-white/70 tracking-widest leading-none">Welcome</span>
            <h2 className="text-xl lg:text-2xl font-bold text-white truncate italic uppercase tracking-tighter">
              Victor
            </h2>
          </div>
        </div>
      </div>

      {/* --- TOP MOBILE BAR --- */}
      <div className="lg:hidden sticky top-0 z-[90] w-full bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <Link href="/dashboard" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#13adc2] flex items-center justify-center shadow-sm">
            <img src="/logo.jpg" className="rounded-full h-full w-full object-cover" alt="Logo" />
          </div>
          <span className="text-xl font-black tracking-tighter italic uppercase text-[#0d2b45]">
            Hire<span className="text-[#13adc2]">Once</span>
          </span>
        </Link>
        
        <button 
          className="p-2 rounded-xl bg-slate-50 text-[#0d2b45] shadow-inner" 
          onClick={() => setNavActive(true)}
        >
          <Menu size={24} />
        </button>
      </div>
    </>
  )
}

export default AdminNav;