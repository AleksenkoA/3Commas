import { X } from 'lucide-react';
import MenuItem from './MenuItem';
import { FC } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  setIsOpen,
  isDropdownOpen,
  setIsDropdownOpen,
}) =>
  isOpen && (
    <div className="absolute top-0 left-0 w-full bg-white shadow-md p-4 flex flex-col sm:hidden overflow-y-auto">
      <div className="flex w-full justify-between items-center">
        <img src="/logo.svg" alt="Logo" className="h-8" />
        <button onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
      </div>
      <div className="mt-8 w-full space-y-4 flex-1">
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">About us</MenuItem>
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-left hover:text-gray-500"
          >
            Services &#9662;
          </button>
          {isDropdownOpen && (
            <div className="mt-2">
              <a href="#" className="block py-2 hover:bg-gray-100">
                Service 1
              </a>
              <a href="#" className="block py-2 hover:bg-gray-100">
                Service 2
              </a>
              <a href="#" className="block py-2 hover:bg-gray-100">
                Service 3
              </a>
            </div>
          )}
        </div>
        <MenuItem href="#">Testimonials</MenuItem>
      </div>
      <div className="flex w-full justify-between py-4">
        <button className="bg-black text-white px-6 py-2">Register</button>
        <button className="border border-black px-6 py-2">Sign In</button>
      </div>
    </div>
  );

export default MobileMenu;
