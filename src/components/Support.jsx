
import { BsChevronRight } from 'react-icons/bs'


let Support = () => {
    return (
     <div className="w-screen bg-gradient-to-tr from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 py-20">
        <div className=" text-neutral-50 flex justify-center items-center text-8xl m-2">
            Support my music!
        </div>
        <div className=" w-36 h-12 flex justify-center items-center text-neutral-50 rounded-xl bg-neutral-400 border border-neutral-50 hover:bg-opacity-80 hover:cursor-pointer m-2 gap-2">
            <div>Purchase</div>
            <div>
                <BsChevronRight />
            </div>
        </div>
     </div>
    );
  };

export default Support