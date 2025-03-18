export default function Pagination({ pageNo, nextPage, previousPage }) {
  return (
    <div className="w-full h-[5vh] bg-slate-300 flex justify-center">
      <div className="w-1/5 flex justify-center items-center gap-12">
        <i
          className="fa-solid fa-arrow-left fa-2x cursor-pointer"
          onClick={previousPage}
        ></i>
        <span className="text-2xl  font-bold">{pageNo}</span>
        <i
          className="fa-solid fa-arrow-right fa-2x cursor-pointer"
          onClick={nextPage}
        ></i>
      </div>
    </div>
  );
}
