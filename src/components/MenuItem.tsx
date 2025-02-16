import { FC } from 'react';

interface MenuItemProps {
  href: string;
  children: React.ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({ href, children }) => (
  <a href={href} className="hover:text-gray-500 block">
    {children}
  </a>
);

export default MenuItem;
