import { FaBeer } from 'react-icons/fa';

let Nav = () => {
    return (
      <nav className="sticky top-0 z-10 bg-black p-3 flex justify-between items-center bg-opacity-10 backdrop-blur-md">
        <a href="#home" className="text-white font-bold">
          My Navbar
        </a>
        <div className="flex items-center">
          <a href="#home" className="text-white mx-3 bg-white p-2 rounded-md bg-opacity-20">
            <FaBeer />
          </a>
          <a href="#home" className="text-white mr-3">
            About
          </a>
          <a href="#home" className="text-white">
            Contact
          </a>
        </div>
      </nav>
    );
  };

export default Nav