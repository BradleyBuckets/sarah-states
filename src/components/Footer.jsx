import { SiInstagram, SiTiktok, SiYoutube, SiApple, SiSpotify, SiPandora } from 'react-icons/si';
import { RxDividerVertical} from 'react-icons/rx';


let Footer = () => {
    return (
      <div className='bg-gradient-to-br from-primary-gray-dark to-primary-gray-light flex flex-col justify-center items-center'>
        <div className=' pt-6 flex justify-center items-center text-center'>
          <a href="https://google.com" className=' text-neutral-50 text-sm sm:text-base font-bold drop-shadow-xl p-1 mb-1 hover:cursor-pointer hover:underline'>Terms of Service</a>
          <div className='text-neutral-50'><RxDividerVertical/></div>
          <a href="https://google.com" className='text-neutral-50 text-sm sm:text-base font-bold drop-shadow-xl p-1 mb-1 hover:cursor-pointer hover:underline'>Privacy Policy</a>
          <div className='text-neutral-50'><RxDividerVertical/></div>
          <a href="https://google.com" className='text-neutral-50 text-sm sm:text-base font-bold drop-shadow-xl p-1 mb-1 hover:cursor-pointer hover:underline'>Contact Us</a>
        </div>
        <nav className="p-6 flex justify-center items-center">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <a href="https://www.instagram.com/sarahhh_states/" target="_blank" className="text-neutral-50 text-lg md:text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20 hover:bg-opacity-30 ease-in-out duration-200" rel="noreferrer">
              <SiInstagram />
            </a>
            <a href="https://www.tiktok.com/@sarahhh.sings" target="_blank" className="text-neutral-50 text-lg md:text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20 hover:bg-opacity-30 ease-in-out duration-200" rel="noreferrer">
              <SiTiktok />
            </a>
            <a href="https://music.youtube.com/channel/UCHctnzeljv3f7sdpTysqieA" target="_blank" className="text-neutral-50 text-lg md:text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20 hover:bg-opacity-30 ease-in-out duration-200" rel="noreferrer">
              <SiYoutube />
            </a>
            <a href="https://music.apple.com/us/artist/sarah-states/1631603046" target="_blank" className="text-neutral-50 text-lg md:text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20 hover:bg-opacity-30 ease-in-out duration-200" rel="noreferrer">
              <SiApple />
            </a>
            <a href="https://www.pandora.com/artist/sarah-states/ARpvfx4PlxxZ436" target="_blank" className="text-neutral-50 text-lg md:text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20 hover:bg-opacity-30 ease-in-out duration-200" rel="noreferrer">
              <SiPandora />
            </a>
            <a href="https://open.spotify.com/artist/4bFIvuHwfnr5KhwkVpW4lO" target="_blank" className="text-neutral-50 text-lg md:text-2xl mx-3 bg-neutral-50 p-2 rounded-md bg-opacity-20 hover:bg-opacity-30 ease-in-out duration-200" rel="noreferrer">
              <SiSpotify />
            </a>
          </div>
        </nav>
      </div>
    );
  };

export default Footer