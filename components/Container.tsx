import React from 'react';

const Container = ({ children, className }: { children: React.ReactNode, className?: string }): JSX.Element => {
  return (
    <div className={`container max-w-2xl mx-auto px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  );
};


export default Container;
