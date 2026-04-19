"use client"
import { Doughnut } from 'react-chartjs-2';
import { Briefcase, Building2, UserSearch } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Card from "../../../components/Card";
import ActivityTable from "../../../components/RecentActivity.tsx"

ChartJS.register(ArcElement, Tooltip);

const Company = () => {
  const recentSeekers = [
  { name: "Victor Akubo", time: "2 mins ago", role: "Fullstack Dev", status: "Active" },
  { name: "Julius Paul", time: "1 hour ago", role: "UI/UX Designer", status: "Pending" },
  { name: "Sarah Chen", time: "3 hours ago", role: "Product Manager", status: "Active" },
];
const recentJobs = [
  { name: "Senior React Dev", time: "10 mins ago", category: "MetaEdge", status: "Active" },
  { name: "Mobile Lead", time: "5 hours ago", category: "BuyME Luxury", status: "Active" },
  { name: "Backend Engineer", time: "Yesterday", category: "TechCorp", status: "Active" },
];
  const data = {
    labels: ["Jobs", "Companies", "Job Seekers"],
    datasets: [{
      data: [2000, 1500, 1000],
      // Matching the card gradients (Start colors)
      backgroundColor: ['#764ba2', '#2193b0', '#11998e'],
      hoverBackgroundColor: ['#667eea', '#6dd5ed', '#38ef7d'],
      borderWidth: 0,
      borderRadius: 10,
      spacing: 10,
    }]
  };

  const options = {
    cutout: '75%',
    plugins: {
      legend: { display: false }
    },
    maintainAspectRatio: false
  };

  return (
    <div className="min-h-screen w-full px-4 py-8 bg-[#f8fafc] text-slate-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-black tracking-tighter uppercase italic text-slate-800">
          Analytics <span className="text-blue-600">Dashboard</span>
        </h1>
        <p className="text-slate-500 font-medium italic">Performance overview and talent metrics.</p>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          
          <div className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[400px]">
            <h3 className="text-xl font-bold mb-6 self-start tracking-tight">Distribution</h3>
            <div className="relative w-full h-64 lg:h-80">
              <Doughnut data={data} options={options} />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl font-black">4.5k</span>
                <span className="text-slate-400 text-sm uppercase font-bold tracking-widest">Total</span>
              </div>
            </div>
          </div>

          {/* Cards Section - Takes 7 columns on desktop */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <Card 
              color="red" 
              icon={<Briefcase className="text-white w-full h-full"/>} 
              title="Jobs" 
              amount="2,000" 
              percent="+12%" 
              description="active listings" 
            />
            <Card 
              color="blue" 
              icon={<Building2 className="text-white w-full h-full"/>} 
              title="Companies" 
              amount="1,500" 
              percent="+5%" 
              description="partnerships" 
            />
            <div className="md:col-span-2">
              <Card 
                color="green" 
                icon={<UserSearch className="text-white w-full h-full"/>} 
                title="Job Seekers" 
                amount="1,000" 
                percent="+18%" 
                description="new seekers" 
              />
            </div>
          </div>

        </div>
      </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
  <ActivityTable title="Recent Jobseekers" data={recentSeekers} />
  <ActivityTable title="Latest Job Posts" data={recentJobs} />
</div>
    </div>
  );
}

export default Company;