import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { format, parseISO } from 'date-fns';
import Container from './Container';

const YoutubePosts = ({ posts }) => {
  return (
    <Container>
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/youtube-icon.png"
            width={23.994}
            height={18}
            alt="youtube icon"
          />

          <h2 className="text-2xl lg:text-3xl tracking-tight font-bold text-slate-900 dark:text-slate-100">
            YouTube
          </h2>
        </div>
        <p className="text-base text-slate-500 dark:text-slate-400">
          Recently, I&apos;ve ventured into the content creation space and I am
          excited to share my experiences with a wider audience.
          Here&apos;s a list of my most recent videos!
        </p>
        <div
          id="posts"
          className="flex flex-col divide-y divide-slate-900/5 dark:divide-slate-300/5"
        >
          {posts.map((post, index) => (
            <article key={post.slug} className="flex gap-4 items-center py-3">
              <p className="hidden lg:block text-slate-500 dark:text-slate-400">{index}</p>
              <h1 className="text-lg font-medium">
                <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                  <a className="text-slate-900 dark:text-slate-200">
                    {post.title}
                  </a>
                </Link>
              </h1>
              <div className="ml-auto flex gap-4 items-center">
                <p className="text-base text-slate-500 dark:text-slate-400">
                  {format(parseISO(post.date), 'MMMM dd, yyyy')}
                </p>
                <div className="text-slate-800 dark:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default YoutubePosts;
