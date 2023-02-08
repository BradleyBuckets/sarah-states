import img from "../resources/call-it-lucky.png"
import audio from "../resources/music.mp3"


let MusicCard = () => {
    return (
     <div className=" h-screen w-screen bg-gradient-to-tr from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 pb-10">
        <div className="bg-gradient-to-br from-primary-gray-dark to-primary-gray-light w-9/12 rounded-xl p-8 flex drop-shadow-xl">
            <img src={img} alt="A pretty girl smiling" className=" rounded-xl flex-[3_3_0%]"/>
            <div className="flex flex-col p-2 flex-[2_2_0%]">
                <audio src={audio} controls className="w-96 opacity-50 m-2"></audio>
                <audio src={audio} controls className="w-96 opacity-50 m-2"></audio>
                <audio src={audio} controls className="w-96 opacity-50 m-2"></audio>
            </div>
        </div>
     </div>
    );
  };

export default MusicCard