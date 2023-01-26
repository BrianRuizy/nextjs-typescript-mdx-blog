import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import FeaturedPosts from '../components/FeaturedPosts';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Header
        title="Brian Ruiz"
        description={'Software Engineer and creator'}
      />

      <FeaturedPosts />

      {posts.map((post) => (
        <article key={post.slug}>
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl font-semibold">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}

      <section className="">
        <div className="flex items-center gap-2">
          <Image src="/images/youtube-icon.png" width={26.66} height={20} alt="youtube icon"/>
          <h2 className="text-2xl font-bold text-black dark:text-white tracking-tight">YouTube</h2>
        </div>
        <p className="text-neutral-400 text-base -mt-1 mb-3">Watch my latest videos!</p>
        <div id="posts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post) => (
          <article key={post.slug}>
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </p>
            <h1 className="mb-2 text-xl font-semibold">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {post.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{post.description}</p>
            <p>
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </article>
        ))}
        </div>
      </section>

    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
