import Link from 'next/link';
import React from 'react';

// create component for active link
const ActiveLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className="font-medium text-gray-900 dark:text-gray-200  md:inline-block p-1 sm:px-3 sm:py-1.5 rounded-lg hover:bg-gray-200 hover:text-inherit dark:hover:bg-gray-800 transition-all">
        {label}
      </a>
    </Link>
  );
};

const RegularLink = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className="font-normal text-gray-500 dark:text-gray-400  md:inline-block p-1 sm:px-3 sm:py-1.5 rounded-lg hover:bg-gray-200 hover:text-inherit dark:hover:bg-gray-800 transition-all">
        {label}
      </a>
    </Link>
  );
};

const Navigation = (): JSX.Element => {

  // get path to use for active link styling
  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  // define all links Home, About, Blog, Contact, Gear
  const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/gear', label: 'Gear' },
  ];

  return (
    <nav className="flex items-center justify-between gap-1 md:gap-0 md:first:-ml-3">
      {links.map((link) => {
        return path === link.href ? (
          <ActiveLink key={link.href} href={link.href} label={link.label} />
        ) : (
          <RegularLink key={link.href} href={link.href} label={link.label} />
        );
      })}
    </nav>
  );
};

export default Navigation;
