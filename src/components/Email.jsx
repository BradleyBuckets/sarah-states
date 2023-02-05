import img from "../resources/cil-close-up.png"


let Email = () => {
    return (
     <div className=" h-screen w-screen bg-gradient-to-br from-primary-purple to-primary-pink">
        <img src={img} alt="A smiling girl" className="rounded-full h-40 w-40 border-secondary-purple border-2 drop-shadow-lg"/>
        <h2 className=" text-neutral-50 font-extrabold text-4xl drop-shadow-lg">
            Newsletter
        </h2>
        <p className="text-neutral-50 font-bold drop-shadow-lg w-80 text-center">
            Sed quis nibh cras pulvinar mattis nunc libero amet
        </p>
        
     </div>
    );
  };

export default Email