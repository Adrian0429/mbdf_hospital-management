import * as React from 'react';

import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
  withFooter?: boolean;
  withHeader?: boolean;
};

function Layout({
  children,
  withFooter = true,
  withHeader = true,
}: LayoutProps) {
  return (
    <>
      <div className='max-w-[80%] mx-auto'>
        {withHeader && <Navbar />}
        {children}
      </div>
    </>
  );
}

export default Layout;