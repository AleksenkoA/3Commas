import { X, Menu } from 'lucide-react';
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 container text-xxs mx-auto px-6 lg:px-16 xl:px-24">
      <DesktopMenu
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <div className="sm:hidden flex w-full justify-between items-center">
        <img src="/logo.svg" alt="Logo" className="h-8" />
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    </nav>
  );
};

export default Navbar;
