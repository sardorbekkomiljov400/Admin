function FilterNotFound() {
  return (
    <div className="flex items-center justify-center w-full py-20">
      <div className="relative w-80 h-80 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden">
        
        {/* Glow background */}
        <div className="absolute -inset-10 blur-3xl opacity-60 bg-linear-to-br from-indigo-500/30 via-purple-500/10 to-cyan-400/20" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full gap-4">
          
          {/* Search Icon */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-2 border-indigo-400/40" />
            <div className="absolute bottom-0 right-0 w-8 h-2 bg-indigo-400/40 rotate-45 rounded-full" />
          </div>

          {/* Title */}
          <h3 className="text-blue-400 text-sm font-medium tracking-wide">
            Topilmadi
          </h3>

          {/* subtle line */}
          <div className="w-16 h-0.5 bg-linear-to-r from-transparent via-white/20 to-transparent rounded-full" />
        </div>

        {/* shimmer */}
        <div className="absolute left-0 top-0 h-full w-1/2 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.6s_infinite]" />

        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(240%); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default FilterNotFound