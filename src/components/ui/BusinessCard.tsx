import React from "react";
import Image from "next/image";

interface BusinessCardProps {
  orientation: "horizontal" | "vertical";
  side: "front" | "back";
  className?: string;
  details: {
    name: string;
    role: string;
    email: string;
    phone: string;
    website: string;
    address: string;
    tagline: string;
    services?: string;
  };
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  orientation,
  side,
  className = "",
  details,
}) => {
  const isHorizontal = orientation === "horizontal";
  const isFront = side === "front";

  // Dimensions
  // We use standard business card ratio. width and height classes set the aspect ratio box.
  // Tailwind Arbitrary values for precise print control or good simulation.
  // Using pixels for drawing: 3.5in = 336px (@96). 2x = 672px.
  // Horizontal: w-[504px] h-[288px] (3.5 x 2 ratio * 144px/in) -> nice high res
  const widthClass = isHorizontal ? "w-[3.5in]" : "w-[2in]";
  const heightClass = isHorizontal ? "h-[2in]" : "h-[3.5in]";

  // Shared classes
  const baseClasses = `
    relative overflow-hidden bg-black text-white font-sans shadow-xl flex flex-col 
    print:shadow-none print:break-inside-avoid print:page-break-inside-avoid
    ${widthClass} ${heightClass}
  `;

  if (isFront) {
    return (
      <div className={`${baseClasses} ${className} items-center justify-center`}>
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-power-red/20 blur-[60px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-power-red/10 blur-[40px] rounded-full pointer-events-none mix-blend-screen" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 p-6 w-full h-full justify-center">
            {/* Logo */}
            <div className="relative w-4/5 h-1/3">
                 <Image 
                    src="/logo-white.svg" 
                    alt="Arc Systems" 
                    fill
                    className="object-contain"
                    priority
                 />
            </div>
            
             {/* Tagline */}
             <div className="flex items-center gap-3 w-full justify-center opacity-90">
                <div className="h-[1px] w-8 bg-power-red"></div>
                <p className="text-[10px] tracking-[0.25em] uppercase font-light text-center text-gray-300">
                    {details.tagline}
                </p>
                <div className="h-[1px] w-8 bg-power-red"></div>
             </div>
        </div>

        {/* Decor */}
        <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-transparent via-border-grey/30 to-transparent" />
        <div className="absolute top-0 right-8 w-px h-full bg-gradient-to-b from-transparent via-border-grey/30 to-transparent" />
      </div>
    );
  }

  // BACK SIDE
  return (
    <div className={`${baseClasses} ${className} p-6`}>
       {/* Background */}
       <div className="absolute -top-10 -right-10 w-48 h-48 bg-power-red/10 blur-[80px] rounded-full pointer-events-none" />
       
       <div className={`h-full flex ${isHorizontal ? "flex-row justify-between" : "flex-col justify-between"}`}>
          
          {/* Left/Top: Identity */}
          <div className="flex flex-col justify-center z-10">
              <h2 className="text-xl font-bold text-white tracking-wide leading-tight">
                {details.name}
              </h2>
              <p className="text-power-red text-xs font-medium tracking-wider mt-1 uppercase">
                {details.role}
              </p>
              
              {/* Services */}
              {details.services && (
                <p className="text-[8px] text-gray-400 mt-3 tracking-wide leading-relaxed max-w-[200px]">
                  {details.services}
                </p>
              )}
              
              {/* Decorative line */}
              <div className="w-12 h-0.5 bg-white/20 mt-4 rounded-full" />
          </div>

          {/* Right/Bottom: Contact */}
          <div className={`flex flex-col gap-1.5 text-[9px] text-gray-300 font-mono z-10 ${isHorizontal ? "items-end text-right justify-center" : "items-start justify-end mt-4"}`}>
             <div className="flex items-center gap-2">
                 <span>{details.phone}</span>
                 {/* Icon placeholders if needed, currently text is clean */}
             </div>
             <div className="flex items-center gap-2">
                 <span>{details.email}</span>
             </div>
             <div className="flex items-center gap-2">
                <span>{details.website.replace('https://', '')}</span>
             </div>
              <div className="w-full h-px bg-white/10 my-1" />
             <div>
                {details.address}
             </div>
             
             {/* QR Code */}
             <div className="mt-3 pt-2 border-t border-white/10">
                <Image 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(details.website)}&bgcolor=000000&color=ffffff&margin=0`}
                  alt="QR Code"
                  width={60}
                  height={60}
                  className="rounded border border-white/20"
                  unoptimized
                />
                <p className="text-[7px] text-gray-500 mt-1">Scan to visit</p>
             </div>
          </div>
       </div>

       {/* Watermark Logo */}
       <div className="absolute bottom-3 left-4 w-12 h-12 opacity-10 pointer-events-none">
            <Image src="/logo-white.svg" alt="watermark" fill className="object-contain object-left-bottom" />
       </div>
       
       {/* Edge Accent */}
       <div className="absolute left-0 top-0 bottom-0 w-1 bg-power-red" />
    </div>
  );
};

export default BusinessCard;
