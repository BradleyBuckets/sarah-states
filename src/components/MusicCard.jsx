import img from "../resources/where-ive-been.png"
import audio from "../resources/music.mp3"


let MusicCard = () => {
    return (
     <div className=" h-screen w-screen bg-gradient-to-tr from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 pb-10">
        <div className="bg-gradient-to-br from-primary-gray-dark to-primary-gray-light w-8/12 rounded-xl p-8 flex drop-shadow-xl gap-4">
            <img src={img} alt="A pretty girl smiling" className="w-1/2 rounded-xl flex-[3_3_0%]"/>
            <div className="flex flex-col px-2 flex-[2_2_0%]">
                <div className="m-1">
                    <p className="text-neutral-50 opacity-70 text-sm mx-4 my-1">Song title here</p>
                    <audio src={audio} controls className=" opacity-50"></audio>
                </div>
                <div className="m-1">
                    <p className="text-neutral-50 opacity-70 text-sm mx-4 my-1">Song title here</p>
                    <audio src={audio} controls className=" opacity-50"></audio>
                </div>
                <div className="m-1">
                    <p className="text-neutral-50 opacity-70 text-sm mx-4 my-1">Song title here</p>
                    <audio src={audio} controls className=" opacity-50"></audio>
                </div>
                <div className="m-1">
                    <p className="text-neutral-50 opacity-70 text-sm mx-4 my-1">Song title here</p>
                    <audio src={audio} controls className=" opacity-50"></audio>
                </div>
                <div className="m-1">
                    <p className="text-neutral-50 opacity-70 text-sm mx-4 my-1">Song title here</p>
                    <audio src={audio} controls className=" opacity-50"></audio>
                </div>
                
            </div>
        </div>
     </div>
    );
  };

export default MusicCard