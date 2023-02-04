import { FaBeer } from 'react-icons/fa';

let Nav = () => {
    return (
      <nav className="bg-gray-800 p-3 flex justify-between items-center">
        <a href="#home" className="text-white font-bold">
          My Navbar
        </a>
        <div className="flex items-center">
          <a href="#home" className="text-white mx-3 bg-neutral-400 p-2 rounded-md bg-opacity-30">
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