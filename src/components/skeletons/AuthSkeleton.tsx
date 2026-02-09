export default function AuthSkeleton() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl rounded-3xl bg-white p-8 shadow-xl shadow-slate-900/10 animate-pulse">
        <div className="flex items-center justify-between mb-10">
          <div className="h-10 w-40 rounded-xl bg-slate-200" />
          <div className="h-10 w-24 rounded-full bg-slate-200" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="h-6 w-44 rounded bg-slate-200" />
            <div className="h-4 w-64 rounded bg-slate-200" />
            <div className="h-11 w-full rounded-xl bg-slate-200" />
            <div className="h-11 w-full rounded-xl bg-slate-200" />
            <div className="h-11 w-full rounded-xl bg-slate-200" />
            <div className="h-10 w-full rounded-xl bg-slate-200" />
          </div>

          <div className="space-y-4">
            <div className="h-6 w-36 rounded bg-slate-200" />
            <div className="h-4 w-56 rounded bg-slate-200" />
            <div className="h-11 w-full rounded-xl bg-slate-200" />
            <div className="h-11 w-full rounded-xl bg-slate-200" />
            <div className="h-11 w-full rounded-xl bg-slate-200" />
            <div className="h-10 w-full rounded-xl bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
