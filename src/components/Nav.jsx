import { SiInstagram, SiTiktok, SiYoutube, SiApple, SiSpotify, SiPandora } from 'react-icons/si';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import Dropdown from './Dropdown'
import { Link } from "react-router-dom";


let Nav = () => {

    const [open, setOpen] = useState(false)

    return (
      <nav className="sticky top-0 z-10 bg-neutral-700 p-3 flex justify-between items-center bg-opacity-20 backdrop-blur-md">
        <Link to={"/"} className='text-neutral-50 font-bold text-2xl'>Sarah States</Link>
        <div className="flex items-center gap-4">
          <div href=" " className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10 block text-2xl sm:hidden hover:bg-opacity-20 hover:cursor-pointer ease-in-out duration-200" rel="noreferrer" onClick={() => setOpen(!open)}>
            <HiMenu />
          </div>
          {open && <Dropdown />}
          <a href="https://www.instagram.com/sarahhh_states/" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10 hidden sm:block hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiInstagram />
          </a>
          <a href="https://www.tiktok.com/@sarahhh.sings" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10 hidden sm:block hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiTiktok />
          </a>
          <a href="https://music.youtube.com/channel/UCHctnzeljv3f7sdpTysqieA" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10 hidden sm:block hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiYoutube />
          </a>
          <a href="https://music.apple.com/us/artist/sarah-states/1631603046" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10 hidden sm:block hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiApple />
          </a>
          <a href="https://www.pandora.com/artist/sarah-states/ARpvfx4PlxxZ436" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10 hidden sm:block hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiPandora />
          </a>
          <a href="https://open.spotify.com/artist/4bFIvuHwfnr5KhwkVpW4lO" target="_blank" className="text-neutral-50 bg-neutral-50 p-2 rounded-md bg-opacity-10 hidden sm:block hover:bg-opacity-20 ease-in-out duration-200" rel="noreferrer">
            <SiSpotify />
          </a>
        </div>
      </nav>
    );
  };

export default Nav