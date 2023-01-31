import React from 'react';

const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
  className?: string;
}): JSX.Element => {
  const hour = new Date().getHours();
  let greet = '';

  if (hour >= 5 && hour < 11) greet = 'Good morning';
  else if (hour >= 11 && hour < 18) greet = 'Good afternoon';
  else if (hour >= 18 && hour < 23) greet = 'Good evening';
  else if (hour === 23 || hour < 5) greet = 'Hello, night owl';

  return (
    <header className="container max-w-6xl mx-auto px-5">
      <div className="flex justify-between items-end">
        <div>
          <p className="uppercase tracking-tight text-neutral-500 text-sm font-medium">
            {description ? description : greet}
          </p>
          <h1 className="text-4xl font-extrabold">{title}</h1>
        </div>

        {/* if title is home then show portrait image */}
        {title === 'Home' && (
          <div
            className="rounded-full w-9 h-9 md:w-10 md:h-10 bg-cover bg-center bg-blue-200 dark:bg-purple-300"
            style={{ backgroundImage: 'url(/images/portrait.png)' }}
          />
        )}
      </div>
      <hr className="divide my-2 border-neutral-200 dark:border-neutral-800"></hr>
    </header>
  );
};

export default Header;
