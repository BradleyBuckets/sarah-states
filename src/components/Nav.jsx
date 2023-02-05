import { SiInstagram, SiTiktok, SiYoutube, SiApple, SiSpotify, SiPandora } from 'react-icons/si';

let Nav = () => {
    return (
      <nav className="sticky top-0 z-10 bg-neutral-700 p-3 flex justify-between items-center bg-opacity-20 backdrop-blur-md">
        <a href="#home" className="text-neutral-50 font-bold text-2xl">
          Sarah States
        </a>
        <div className="flex items-center gap-4">
          <a href="#home" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10">
            <SiInstagram />
          </a>
          <a href="#home" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10">
            <SiTiktok />
          </a>
          <a href="#home" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10">
            <SiYoutube />
          </a>
          <a href="#home" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10">
            <SiApple />
          </a>
          <a href="#home" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10">
            <SiPandora />
          </a>
          <a href="#home" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10">
            <SiSpotify />
          </a>
        </div>
      </nav>
    );
  };

export default Nav