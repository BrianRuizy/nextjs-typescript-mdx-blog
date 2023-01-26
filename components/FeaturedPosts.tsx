// featured posts
import React from 'react';
import Image from 'next/image';


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
    <section>
      <h2 className="text-slate-900 text-2xl tracking-tight font-bold dark:text-slate-200">Featured Posts</h2>
      <div className="mt-4 md:container md:max-w-6xl md:mx-auto relative flex flex-nowrap overflow-x-scroll snap-x snap-mandatory scroll-pl-4 md:overflow-auto md:grid grid-cols-3 gap-4">
        {callouts.map((callout) => (
          <div
            key={callout.name}
            className="snap-start flex flex-col min-w-[70%] md:min-w-[100%] col-span-1 overflow-hidden will-change-transform gap-4"
          >
            <div className="relative overflow-hidden aspect-square rounded-xl will-change-transform ">
              <Image
                layout='fill'
                src={callout.imageSrc}
                alt={callout.imageAlt}
                priority={true}
                className="z-0 object-cover object-center absolute w-full h-full hover:scale-105 transition-all duration-1000 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <h2 className="text-lg md:text-xl leading-tight font-bold text-black dark:text-white line-clamp-2">{callout.name}</h2>
              <p className="text-slate-400 text-sm line-clamp-2 pb-1">{callout.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;