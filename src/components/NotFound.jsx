import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

let NotFound = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10">
      <div className=" flex flex-col items-center justify-center gap-10">
        <div className=" text-neutral-50 flex justify-center items-center text-5xl sm:text-6xl md:text-7xl m-2 lg:mx-12 drop-shadow-xl text-center">
          Error 404: Sorry, that page doesn't exist
        </div>
        <Link
          to={"/"}
          className=" w-64 h-12 flex justify-center items-center text-neutral-50 bg-neutral-50 p-2 rounded-lg bg-opacity-10 gap-2 drop-shadow-xl border border-neutral-50 hover:bg-opacity-20 hover:cursor-pointer ease-in-out duration-200"
        >
          <div>Back To Home</div>
          <div>
            <BsChevronRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
