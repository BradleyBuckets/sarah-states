import img from "../resources/call-it-lucky.png"
import audio from "../resources/music.mp3"


let MusicCard2 = () => {
    return (
     <div className=" w-screen bg-gradient-to-br from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 py-10">
        <div className="bg-gradient-to-br from-primary-gray-dark to-primary-gray-light w-10/12 sm:w-9/12 md:w-8/12 rounded-xl p-2 sm:p-4 md:p-8 flex flex-col lg:flex-row drop-shadow-xl gap-4">
            <img src={img} alt="A pretty girl smiling" className="lg:w-1/2 rounded-xl flex-[3_3_0%] object-cover m-8 lg:m-4 mb-2"/>
            <div className="flex flex-col lg:px-2 flex-[2_2_0%] m-4 lg:m-0">
                <div className="sm-1">
                    <p className="text-neutral-50 opacity-70 text-sm mx-4 my-1">Song title here</p>
                    <audio src={audio} controls className="w-full opacity-50"></audio>
                </div>
            </div>
        </div>
     </div>
    );
  };

export default MusicCard2