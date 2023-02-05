import { SiInstagram, SiTiktok, SiYoutube, SiApple, SiSpotify, SiPandora } from 'react-icons/si';

let Nav = () => {
    return (
      <nav className="sticky top-0 z-10 bg-neutral-700 p-3 flex justify-between items-center bg-opacity-20 backdrop-blur-md">
        <a href="#home" className="text-neutral-50 font-bold text-2xl">
          Sarah States
        </a>
        <div className="flex items-center">
          <a href="#home" className="text-neutral-50 mx-3 bg-white p-2 rounded-md bg-opacity-20">
            <SiInstagram />
          </a>
          <a href="#home" className="text-neutral-50 mx-3 bg-white p-2 rounded-md bg-opacity-20">
            <SiTiktok />
          </a>
          <a href="#home" className="text-neutral-50 mx-3 bg-white p-2 rounded-md bg-opacity-20">
            <SiYoutube />
          </a>
          <a href="#home" className="text-neutral-50 mx-3 bg-white p-2 rounded-md bg-opacity-20">
            <SiApple />
          </a>
          <a href="#home" className="text-neutral-50 mx-3 bg-white p-2 rounded-md bg-opacity-20">
            <SiPandora />
          </a>
          <a href="#home" className="text-neutral-50 mx-3 bg-white p-2 rounded-md bg-opacity-20">
            <SiSpotify />
          </a>
        </div>
      </nav>
    );
  };

export default Nav