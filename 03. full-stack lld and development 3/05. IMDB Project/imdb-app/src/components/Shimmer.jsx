export default function Shimmer() {
  return (
    <div className="h-80 w-72 p-4 bg-slate-100 rounded-xl flex flex-col gap-4 animate-pulse">
      <div className="w-62 h-44 bg-slate-200 rounded-xl" />
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 rounded-full bg-slate-200"></div>
        <div className="flex flex-col gap-4">
          <div className="h-4 w-20 bg-slate-200 rounded-lg"></div>
          <div className="h-4 w-36 bg-slate-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
