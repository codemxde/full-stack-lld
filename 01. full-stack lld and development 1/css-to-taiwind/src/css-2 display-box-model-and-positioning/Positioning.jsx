import avengers from "../assets/avengers.jpeg";
import panther from "../assets/black-panther.jpeg";
import brahma from "../assets/brahmastra.jpeg";
import joker from "../assets/joker.jpeg";

export default function Positioning() {
  return (
    <>
      <div className="h-[1500px] bg-slate-300 ">
        <img
          className="inline-block h-[350px] sticky top-10 left-5 "
          width="250px"
          src={avengers}
          alt=""
        />
        <img
          className="inline-block h-[350px] absolute left-20 top-20 "
          width="250px"
          src={panther}
          alt=""
        />
        <img
          className="inline-block h-[350px] relative top-10 left-10 "
          width="250px"
          src={brahma}
          alt=""
        />
        <img
          className="inline-block h-[350px] fixed right-0 bottom-0 "
          width="250px"
          src={joker}
          alt=""
        />
      </div>

      <div className="h-[2500px] bg-purple-200 ">
        <h2 className="text-3xl font-extrabold bg-yellow-200 p-8 text-center sticky top-10">
          I'm a sticky header
        </h2>
      </div>
    </>
  );
}
