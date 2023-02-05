import { SiInstagram, SiTiktok, SiYoutube, SiApple, SiSpotify, SiPandora } from 'react-icons/si';

let Footer = () => {
    return (
      <nav className=" bg-gradient-to-br from-primary-gray-dark to-primary-gray-light p-6 flex justify-center items-center">
        <div className="flex items-center gap-4">
          <a href="#home" className="text-neutral-50 text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20">
            <SiInstagram />
          </a>
          <a href="#home" className="text-neutral-50 text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20">
            <SiTiktok />
          </a>
          <a href="#home" className="text-neutral-50 text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20">
            <SiYoutube />
          </a>
          <a href="#home" className="text-neutral-50 text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20">
            <SiApple />
          </a>
          <a href="#home" className="text-neutral-50 text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20">
            <SiPandora />
          </a>
          <a href="#home" className="text-neutral-50 text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20">
            <SiSpotify />
          </a>
        </div>
      </nav>
    );
  };

export default Footer