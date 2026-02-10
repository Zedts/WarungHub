"use client";

import dynamic from "next/dynamic";
import { GLOBE_STATS } from "../../lib/globe-data";

const GlobeScene = dynamic(() => import("./GlobeScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-slate-400">Loading globe...</div>
    </div>
  ),
});

export default function GlobeStatsSection() {
  return (
    <section className="relative overflow-hidden h-[500px] md:h-[600px] bg-gradient-to-b from-white via-gray-50/20 to-gray-50/60">
      <div className="absolute inset-0">
        <GlobeScene />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-gray-50/95 via-gray-50/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-center pointer-events-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {GLOBE_STATS.map((stat) => (
            <div 
              key={stat.label} 
              className="backdrop-blur-md bg-white/80 border border-gray-200/50 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 pointer-events-auto"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#4A7043] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
