export default function Flexbox() {
  return (
    <div className="h-[600px] flex justify-evenly items-center bg-red-300 sm:bg-blue-300 md:bg-green-300 lg:bg-yellow-300 xl:bg-purple-300 ">
      <div className="w-[200px] h-[150px] border-4 border-black order-4 ">1</div>
      <div className="w-[200px] h-[150px] border-4 border-black">2</div>
      <div className="w-[200px] h-[150px] border-4 border-black order-5 shrink-4 ">3</div>
      <div className="w-[200px] h-[150px] border-4 border-black">4</div>
    </div>
  );
}
