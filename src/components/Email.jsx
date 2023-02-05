import img from "../resources/cil-close-up.png"


let Email = () => {
    return (
     <div className=" h-screen w-screen bg-gradient-to-br from-primary-purple to-primary-pink">
        <img src={img} alt="A smiling girl" className="rounded-full h-40 w-40 border-secondary-purple border-2 drop-shadow-lg"/>
        <h2 className=" text-neutral-50 font-extrabold text-4xl drop-shadow-lg">
            Newsletter
        </h2>
        <p className="text-neutral-50 font-bold drop-shadow-lg w-72 text-center">
            Sed quis nibh cras pulvinar mattis nunc libero amet
        </p>
        <div className=" bg-gradient-to-br from-primary-gray-dark to-primary-gray-light w-80 h-60 rounded-lg">
            <div className=" w-64 h-10 text-neutral-50 font-bold bg-neutral-50 bg-opacity-20 rounded-lg flex items-center">
                Name
            </div>
            <div className=" w-40 h-10 text-neutral-50 font-bold bg-neutral-50 bg-opacity-20 rounded-lg flex items-center">
                Email
            </div>
            <div className=" w-44 h-10 text-neutral-50 font-bold bg-gradient-to-br to-primary-purple from-secondary-pink rounded-lg flex justify-center items-center">
                Subscribe
            </div>
        </div>
     </div>
    );
  };

export default Email