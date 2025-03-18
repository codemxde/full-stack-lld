export default function Exercise() {
  return (
    <div className="grid grid-cols-[1fr_4fr_repeat(2,_1fr)] grid-rows-[1fr_20fr_1fr] ">
      <div className="bg-red-200 border border-yellow-200 col-span-4">Header</div>
      <div className="bg-red-200 border border-yellow-200 row-span-2">Navigation</div>
      <div className="bg-red-200 border border-yellow-200">Content</div>
      <div className="bg-red-200 border border-yellow-200">Sidebar</div>
      <div className="bg-red-200 border border-yellow-200">Sidebar</div>
      <div className="bg-red-200 border border-yellow-200 col-span-3">Footer</div>
    </div>
  );
}
