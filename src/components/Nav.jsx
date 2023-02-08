import { SiInstagram, SiTiktok, SiYoutube, SiApple, SiSpotify, SiPandora } from 'react-icons/si';

let Nav = () => {
    return (
      <nav className="sticky top-0 z-10 bg-neutral-700 p-3 flex justify-between items-center bg-opacity-20 backdrop-blur-md">
        <a href="/" className="text-neutral-50 font-bold text-2xl">
          Sarah States
        </a>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/sarahhh_states/" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10" rel="noreferrer">
            <SiInstagram />
          </a>
          <a href="https://www.tiktok.com/@sarahhh.sings" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10" rel="noreferrer">
            <SiTiktok />
          </a>
          <a href="https://music.youtube.com/channel/UCHctnzeljv3f7sdpTysqieA" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10" rel="noreferrer">
            <SiYoutube />
          </a>
          <a href="https://music.apple.com/us/artist/sarah-states/1631603046" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10" rel="noreferrer">
            <SiApple />
          </a>
          <a href="https://www.pandora.com/artist/sarah-states/ARpvfx4PlxxZ436" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10" rel="noreferrer">
            <SiPandora />
          </a>
          <a href="https://open.spotify.com/artist/4bFIvuHwfnr5KhwkVpW4lO" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10" rel="noreferrer">
            <SiSpotify />
          </a>
        </div>
      </nav>
    );
  };

export default Nav