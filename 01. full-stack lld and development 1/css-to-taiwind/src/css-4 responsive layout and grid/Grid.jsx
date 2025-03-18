export default function Grid() {
  return (
    <div className="grid grid-cols-[1fr_1fr] bg-red-100 p-5 rounded-2xl my-4 mx-4 gap-x-4 gap-y-6 sm:grid-cols-3  ">
      <div className="row-start-1 row-end-5 p-5 border border-indigo-700 bg-blue-200 rounded-xl hover:scale-105 duration-150">
        1
      </div>
      <div className="p-5 border border-indigo-700 bg-blue-200 rounded-xl hover:scale-105 duration-150">
        2
      </div>
      <div className="p-5 border border-indigo-700 bg-blue-200 rounded-xl hover:scale-105 duration-150">
        3
      </div>
      <div className="p-5 border border-indigo-700 bg-blue-200 rounded-xl hover:scale-105 duration-150">
        4
      </div>
      <div className="p-5 border border-indigo-700 bg-blue-200 rounded-xl hover:scale-105 duration-150">
        5
      </div>
      <div className="p-5 border border-indigo-700 bg-blue-200 rounded-xl hover:scale-105 duration-150">
        6
      </div>
      <div className="p-5 border border-indigo-700 bg-blue-200 rounded-xl hover:scale-105 duration-150">
        7
      </div>
      <div className="p-5 border border-indigo-700 bg-blue-200 rounded-xl hover:scale-105 duration-150">
        8
      </div>
      <div className="p-5 border border-indigo-700 bg-blue-200 rounded-xl hover:scale-105 duration-150">
        9
      </div>
    </div>
  );
}
