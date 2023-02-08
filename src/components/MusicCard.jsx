import img from "../resources/cil-close-up.png"


let MusicCard = () => {
    return (
     <div className=" h-screen w-screen bg-gradient-to-br from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 pb-10">
        <img src={img} alt="A smiling girl" className="rounded-full h-40 w-40 border-secondary-purple border-2 drop-shadow-xl"/>
        <h2 className=" text-neutral-50 font-extrabold text-4xl drop-shadow-xl">
            Newsletter
        </h2>
        {/* <p className="text-neutral-50 font-bold drop-shadow-lg w-72 text-center">
            Sed quis nibh cras pulvinar mattis nunc libero amet
        </p> */}
        <p className="text-neutral-50 font-bold drop-shadow-xl w-72 text-center">
            Never miss a beat and be the first to know about updates!
        </p>
        <div className=" bg-gradient-to-br from-primary-gray-dark to-primary-gray-light w-80 h-60 rounded-lg flex flex-col items-center justify-center gap-5 drop-shadow-xl">
            <div className=" w-64 h-10 text-neutral-50 font-bold bg-neutral-50 opacity-60 bg-opacity-20 rounded-lg flex items-center p-4">
                Name
            </div>
            <div className=" w-64 h-10 text-neutral-50 font-bold bg-neutral-50 opacity-60 bg-opacity-20 rounded-lg flex items-center p-4">
                Email
            </div>
            <div className=" w-64 h-10 text-neutral-50 font-bold bg-gradient-to-r to-primary-purple from-secondary-pink rounded-lg flex justify-center items-center">
                Subscribe
            </div>
        </div>
     </div>
    );
  };

export default MusicCard