import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='mx-auto'>{children}</div>
    </div>
  );
};
