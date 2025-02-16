import { FC } from 'react';
import DropdownMenu from './DropdownMenu';
import MenuItem from './MenuItem';

interface DesktopMenuProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
}

const DesktopMenu: FC<DesktopMenuProps> = ({
  isDropdownOpen,
  setIsDropdownOpen,
}) => (
  <div className="hidden sm:flex w-full items-center">
    <div className="flex gap-4">
      <MenuItem href="#">Home</MenuItem>
      <MenuItem href="#">About us</MenuItem>
      <DropdownMenu
        isOpen={isDropdownOpen}
        toggle={() => setIsDropdownOpen(!isDropdownOpen)}
      />
      <MenuItem href="#">Testimonials</MenuItem>
    </div>
    <div className="hidden md:flex flex-1 justify-center">
      <img src="/logo.svg" alt="Logo" className="h-8" />
    </div>
    <div className="flex flex-1 justify-end space-x-4">
      <button className="bg-black text-white px-4 py-2">Register</button>
      <button className="border border-black px-4 py-2">Sign In</button>
    </div>
  </div>
);

export default DesktopMenu;
