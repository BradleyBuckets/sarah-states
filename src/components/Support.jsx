
import { BsChevronRight } from 'react-icons/bs'


let Support = () => {
    return (
     <div className="w-screen bg-gradient-to-tr from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 py-20">
        <div className=" text-neutral-50 flex justify-center items-center text-6xl sm:text-7xl md:text-8xl m-2 drop-shadow-xl text-center">
            Support my music!
        </div>
        <div className=" w-36 h-12 flex justify-center items-center text-neutral-50 bg-neutral-50 p-2 rounded-lg bg-opacity-10 gap-2 drop-shadow-xl border border-neutral-50 hover:bg-opacity-20 hover:cursor-pointer">
            <div>Purchase</div>
            <div>
                <BsChevronRight />
            </div>
        </div>
     </div>
    );
  };

export default Support