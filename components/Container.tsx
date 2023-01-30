import React from 'react';

const Container = ({ children, className }: { children: React.ReactNode, className?: string }): JSX.Element => {
  return (
    <div className={`container max-w-xl mx-auto px-4 lg:px-0 lg:mr-8 ${className}`}>
      {children}
    </div>
  );
};


export default Container;
