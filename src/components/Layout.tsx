import { ReactNode } from 'react';
import Dock from './Dock';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      {children}
      <Dock />
    </div>
  );
};

export default Layout; 