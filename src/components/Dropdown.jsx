import { SiInstagram, SiTiktok, SiYoutube, SiApple, SiSpotify, SiPandora } from 'react-icons/si';

let Dropdown = () => {
    return (
     <div className='absolute top-14 right-0 flex flex-col justify-center items-center p-3 gap-4'>
          <a href="https://www.instagram.com/sarahhh_states/" target="_blank" className="text-neutral-50 bg-neutral-50 text-2xl p-2 rounded-md bg-opacity-10 hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiInstagram />
          </a>
          <a href="https://www.tiktok.com/@sarahhh.sings" target="_blank" className="text-neutral-50 bg-neutral-50 text-2xl p-2 rounded-md bg-opacity-10 hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiTiktok />
          </a>
          <a href="https://music.youtube.com/channel/UCHctnzeljv3f7sdpTysqieA" target="_blank" className="text-neutral-50 bg-neutral-50 text-2xl p-2 rounded-md bg-opacity-10 hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiYoutube />
          </a>
          <a href="https://music.apple.com/us/artist/sarah-states/1631603046" target="_blank" className="text-neutral-50 bg-neutral-50 text-2xl p-2 rounded-md bg-opacity-10 hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiApple />
          </a>
          <a href="https://www.pandora.com/artist/sarah-states/ARpvfx4PlxxZ436" target="_blank" className="text-neutral-50 bg-neutral-50 text-2xl p-2 rounded-md bg-opacity-10 hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiPandora />
          </a>
          <a href="https://open.spotify.com/artist/4bFIvuHwfnr5KhwkVpW4lO" target="_blank" className="text-neutral-50 bg-neutral-50 text-2xl p-2 rounded-md bg-opacity-10 hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiSpotify />
          </a>
     </div>
    );
  };

export default Dropdown