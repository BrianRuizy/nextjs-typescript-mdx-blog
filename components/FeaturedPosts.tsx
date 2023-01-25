// featured posts

import React from 'react';


const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

const FeaturedPosts = (): JSX.Element => {
  return (

      <div>
        <h2 className="text-slate-900 text-2xl tracking-tight font-bold dark:text-slate-200">Featured Posts</h2>

        <div className="mt-4 md:container md:max-w-6xl md:mx-auto relative flex flex-nowrap overflow-x-scroll snap-x snap-mandatory scroll-pl-4 md:overflow-auto md:grid grid-cols-3 gap-4">
          {callouts.map((callout) => (
            <div key={callout.name} className="relative snap-start min-w-[80%] md:min-w-[100%]">
              <div className="relative overflow-hidden aspect-square rounded-lg">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>

  );
};

export default FeaturedPosts;