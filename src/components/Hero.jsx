import img from "../resources/close-up.png"
// import img2 from "../resources/band-camp.png"


let Hero = () => {
    return (
     <div className=" h-screen w-screen bg-gradient-to-br from-primary-purple to-primary-pink flex flex-col items-center sm:items-start justify-center gap-10 p-10">
        <img src={img} alt="A smiling girl" className="rounded-full h-56 w-56 border-secondary-purple border-2 drop-shadow-xl"/>
        {/* <img src={img2} alt="A smiling girl" className="rounded-full h-56 w-56 border-secondary-purple border-2 drop-shadow-xl"/> */}
        <div className=" text-neutral-50 flex justify-center items-center text-7xl md:text-8xl drop-shadow-xl text-center sm:text-start">
            Sarah States
        </div>
        {/* <p className="text-neutral-50 drop-shadow-xl w-8/12 sm:w-3/4 lg:w-1/2 text-center sm:text-start">
            Lorem ipsum dolor sit amet consectetur. Egestas volutpat commodo nec purus tortor sagittis aliquet justo. Arcu lectus nisl enim amet id Lobortis magna dui justo habitant.
        </p> */}
        <p className="text-neutral-50 drop-shadow-xl w-10/12 sm:w-3/4 lg:w-1/2 text-center sm:text-start">
            With a voice that touches the soul, she creates music that resonates with our deepest emotions. Her powerful lyrics inspire us to explore deeper the human experience.
        </p>
     </div>
    );
  };

export default Hero