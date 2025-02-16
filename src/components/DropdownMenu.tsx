import { FC } from 'react';
import MenuItem from './MenuItem';

interface DropdownMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ isOpen, toggle }) => (
  <div className="relative">
    <button onClick={toggle} className="hover:text-gray-500">
      Services &#9662;
    </button>
    {isOpen && (
      <div className="absolute left-0 mt-4 bg-white shadow-md w-33">
        <MenuItem href="#">Service 1</MenuItem>
        <MenuItem href="#">Service 2</MenuItem>
        <MenuItem href="#">Service 3</MenuItem>
      </div>
    )}
  </div>
);

export default DropdownMenu;
