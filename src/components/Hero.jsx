import img from "../resources/close-up.png"
// import img2 from "../resources/band-camp.png"


let Hero = () => {
    return (
     <div className=" h-screen w-screen bg-gradient-to-br from-primary-purple to-primary-pink flex flex-col items-start justify-center gap-10 p-10">
        <img src={img} alt="A smiling girl" className="rounded-full h-56 w-56 border-secondary-purple border-2 drop-shadow-xl"/>
        {/* <img src={img2} alt="A smiling girl" className="rounded-full h-56 w-56 border-secondary-purple border-2 drop-shadow-xl"/> */}
        <div className=" text-neutral-50 flex justify-center items-center text-8xl drop-shadow-xl">
            Sarah States
        </div>
        <p className="text-neutral-50 drop-shadow-xl w-1/2">
            Lorem ipsum dolor sit amet consectetur. Egestas volutpat commodo nec purus tortor sagittis aliquet justo. Arcu lectus nisl enim amet id Lobortis magna dui justo habitant .
        </p>
     </div>
    );
  };

export default Hero