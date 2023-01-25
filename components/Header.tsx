import React from 'react';

const Header = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}): JSX.Element => {
  return (
    <div className="">
      <h1 className={`text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200 ${className}`}>
        {title}
      </h1>
      <p className="mt-1 text-lg text-slate-700 dark:text-slate-400">{description}</p>
      <hr className="divide mt-4 border-slate-200 dark:border-slate-800"></hr>
    </div>
  );
};

export default Header;
