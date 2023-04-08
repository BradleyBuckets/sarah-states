
import { BsChevronRight } from 'react-icons/bs'


let Support = () => {
    return (
     <div className="w-screen bg-gradient-to-tr from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 py-20">
        <div className=" text-neutral-50 flex justify-center items-center text-6xl sm:text-7xl md:text-8xl m-2 drop-shadow-xl text-center">
            Support my music!
        </div>
        <a href="https://venmo.com/u/sarahhh-states" target="_blank" className=" w-36 h-12 flex justify-center items-center text-neutral-50 bg-neutral-50 p-2 rounded-lg bg-opacity-10 gap-2 drop-shadow-xl border border-neutral-50 hover:bg-opacity-20 hover:cursor-pointer ease-in-out duration-200" rel="noreferrer">
            {/* <div>Purchase</div> */}
            <div>Donate</div>
            <div>
                <BsChevronRight />
            </div>
        </a>
     </div>
    );
  };

export default Support