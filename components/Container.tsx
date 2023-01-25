import React from 'react';

const Container = ({ children, className }: { children: React.ReactNode, className?: string }): JSX.Element => {
  return (
    <div className={`container max-w-3xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
};


export default Container;
