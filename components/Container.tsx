import React from 'react';

const Container = ({ children, className }: { children: React.ReactNode, className?: string }): JSX.Element => {
  return (
    <div className={`container max-w-xl mx-auto px- lg:px-0 ${className}`}>
      {children}
    </div>
  );
};


export default Container;
