import banner from "../assets/pulp-fiction.jpg";
import scarface from "../assets/scarface.jpg";
import godfather from "../assets/godfather.jpg";
import Movies from "./Movies";

function Home() {
  return (
    <>
      <div className="flex justify-around h-[70vh]">
        <img src={scarface} className="" />
        <img src={banner} className="" />
        <img src={godfather} className="" />
      </div>
      <Movies />
    </>
  );
}

export default Home;
