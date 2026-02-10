export default function LandingSkeleton() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] animate-pulse">
      {/* Navbar Skeleton */}
      <div className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-slate-200 rounded-lg" />
          <div className="hidden md:flex gap-8">
            <div className="h-4 w-16 bg-slate-200 rounded" />
            <div className="h-4 w-16 bg-slate-200 rounded" />
            <div className="h-4 w-20 bg-slate-200 rounded" />
            <div className="h-4 w-24 bg-slate-200 rounded" />
          </div>
          <div className="flex gap-3">
            <div className="hidden md:block h-10 w-24 bg-slate-200 rounded-xl" />
            <div className="h-10 w-28 bg-slate-200 rounded-xl" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <div className="h-8 w-48 bg-slate-200 rounded-full" />
            <div className="h-16 w-full bg-slate-200 rounded-2xl" />
            <div className="h-16 w-4/5 bg-slate-200 rounded-2xl" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-slate-200 rounded" />
              <div className="h-4 w-3/4 bg-slate-200 rounded" />
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-40 bg-slate-200 rounded-xl" />
              <div className="h-12 w-32 bg-slate-200 rounded-xl" />
            </div>
          </div>
          <div className="hidden lg:block h-[500px] bg-slate-200 rounded-2xl" />
        </div>
      </div>

      {/* Benefits Section Skeleton */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="h-10 w-96 bg-slate-200 rounded-xl mx-auto" />
            <div className="h-4 w-64 bg-slate-200 rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 space-y-4">
                <div className="h-14 w-14 bg-slate-200 rounded-2xl" />
                <div className="h-6 w-48 bg-slate-200 rounded" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-slate-200 rounded" />
                  <div className="h-3 w-5/6 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marketplace Section Skeleton */}
      <div className="py-24 bg-gray-50/30 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <div className="h-8 w-64 bg-slate-200 rounded-xl" />
              <div className="h-4 w-48 bg-slate-200 rounded" />
            </div>
            <div className="h-6 w-20 bg-slate-200 rounded" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 space-y-4">
                <div className="h-60 w-full bg-slate-200 rounded-xl" />
                <div className="h-4 w-20 bg-slate-200 rounded" />
                <div className="h-5 w-32 bg-slate-200 rounded" />
                <div className="h-6 w-24 bg-slate-200 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section Skeleton */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-2">
            <div className="h-8 w-56 bg-slate-200 rounded-xl mx-auto" />
            <div className="h-4 w-64 bg-slate-200 rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 bg-slate-200 rounded-2xl" />
                <div className="h-5 w-32 bg-slate-200 rounded" />
                <div className="h-3 w-full bg-slate-200 rounded" />
                <div className="h-3 w-4/5 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Globe Stats Section Skeleton */}
      <div className="h-[500px] md:h-[600px] bg-gradient-to-b from-white via-gray-50/20 to-gray-50/60 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[400px] bg-slate-200 rounded-full" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/80 p-6 rounded-2xl border border-gray-200/50 space-y-2">
                <div className="h-10 w-24 bg-slate-200 rounded mx-auto" />
                <div className="h-4 w-full bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="py-32 bg-gradient-to-b from-gray-50/60 via-[#4A7043]/5 to-[#5A7B9A]/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="h-12 w-96 bg-slate-200 rounded-2xl mx-auto" />
          <div className="h-6 w-[500px] bg-slate-200 rounded-xl mx-auto" />
          <div className="flex justify-center gap-4">
            <div className="h-12 w-36 bg-slate-200 rounded-xl" />
            <div className="h-12 w-40 bg-slate-200 rounded-xl" />
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="border-t pt-16 pb-8 bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-32 bg-slate-200 rounded" />
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-4 w-24 bg-slate-200 rounded" />
                ))}
              </div>
            ))}
          </div>
          <div className="border-t pt-8 border-gray-100">
            <div className="h-4 w-48 bg-slate-200 rounded mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
