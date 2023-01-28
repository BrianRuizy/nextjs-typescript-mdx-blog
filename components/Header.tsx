import React from 'react';
import Container from './Container';

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
    <Container>
      <header>
        <div className="flex justify-between items-end">
          <div>
            <p className="uppercase tracking-tight text-slate-500 text-xs md:text-sm font-medium">
              {description ? description : greet}
            </p>
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          </div>
          <div
            className="rounded-full w-9 h-9 md:w-12 md:h-12 bg-cover bg-center bg-slate-100 dark:bg-slate-700"
            style={{ backgroundImage: 'url(images/portrait.png)' }}
          ></div>
        </div>

        <hr className="divide mt-2 border-slate-900/10 dark:border-slate-300/10"></hr>
      </header>
    </Container>
  );
};

export default Header;
