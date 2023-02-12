import img from "../resources/where-ive-been.png"
import audio from "../resources/music.mp3"
import Audio from './Audio'


let MusicCard = () => {
    return (
     <div className=" w-screen bg-gradient-to-tr from-primary-purple to-primary-pink flex flex-col items-center justify-center gap-10 py-10">
        <div className="bg-gradient-to-br from-primary-gray-dark to-primary-gray-light w-10/12 sm:w-9/12 md:w-8/12 rounded-xl p-2 sm:p-4 md:p-8 flex flex-col lg:flex-row drop-shadow-xl gap-4">
            <img src={img} alt="A pretty girl smiling" className="lg:w-1/2 rounded-xl flex-[3_3_0%] object-cover m-6 sm:m-8 lg:m-4 mb-2"/>
            <div className="flex flex-col lg:p-2 flex-[2_2_0%] m-4 lg:m-0">
                <Audio songTitle="First song title here" source={audio} />
                <Audio songTitle="Second song title here" source={audio} />
                <Audio songTitle="Third song title here" source={audio} />
                <Audio songTitle="Fourth song title here" source={audio} />
                <Audio songTitle="Fifth song title here" source={audio} />
            </div>
        </div>
     </div>
    );
  };

export default MusicCard