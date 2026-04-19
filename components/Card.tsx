"use client"

const Card = ({color, icon: Icon, title, amount, percent, description}) => {
  const colorName = {
    red: ["linear-gradient(135deg, #764ba2 0%, #667eea 100%)", "rgba(255, 255, 255, 0.2)"],
    blue: ["linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)", "rgba(255, 255, 255, 0.2)"],
    green: ["linear-gradient(135deg, #11998e 0%, #38ef7d 100%)", "rgba(255, 255, 255, 0.2)"]
  }

  return(
    <div 
      style={{ background: colorName[color][0] }}
      className="relative overflow-hidden group tracking-wide h-48 w-full flex flex-col justify-between p-6 rounded-[2.5rem] shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl"
    >
      {/* Decorative Flare */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

      <div className="flex gap-4 items-center">
        <div 
          style={{ backgroundColor: colorName[color][1] }}
          className="backdrop-blur-md rounded-2xl h-12 w-12 flex justify-center items-center p-3 shadow-inner"
        >
           {Icon}
        </div>
        <p className="font-bold text-white text-xl lg:text-2xl uppercase tracking-tighter italic">{title}</p>
      </div>

      <div className="flex flex-col text-white">
        <p className="font-medium tracking-tight text-sm opacity-80 uppercase">Total</p>
        <p className="font-mono font-black text-4xl lg:text-5xl leading-none my-1">{amount}</p>
        
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-black backdrop-blur-sm">
            {percent}
          </span> 
          <span className="text-xs lg:text-sm italic opacity-80 font-light">{description}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;