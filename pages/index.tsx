import React from 'react';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

import Layout from '../components/Layout';
import Header from '../components/Header';
import PostCardSm from '../components/cards/PostCardSm';
import PostCardMd from '../components/cards/PostCardMd';
import PostCardLg from '../components/cards/PostCardLg';


type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Header title="Home" description={null} />

      <section>
        <div className="container max-w-6xl mx-auto px-4 flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">You Might Like</h2>
            <p className="text-neutral-400 text-base -mt-1 mb-3 ">Featured blog posts</p>
          </div>
          <a className="ml-auto text-lg text-blue-400 dark:text-blue-300">See All</a>
        </div>
        <div
          className="md:container md:max-w-6xl md:mx-auto px-4 relative flex flex-nowrap overflow-x-scroll snap-x snap-mandatory scroll-pl-4 md:overflow-auto md:grid md:grid-cols-3 gap-3"
          style={{ paddingBottom: '2rem', marginBottom: '-2rem' }}
        >
          {posts.map((post, index) =>
            post.pinned === true ? <PostCardLg key={index} post={post} /> : null
          )}
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/youtube-icon.png"
            width={23.994}
            height={18}
            alt="youtube icon"
          />
          <h2 className="text-2xl font-bold tracking-tight">YouTube</h2>
          <a className="ml-auto text-lg text-blue-400 dark:text-blue-300">See All</a>
        </div>
        <p className="text-neutral-400 text-base -mt-1 mb-3">Watch my latest videos!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {posts.map((post, index) => (
            <PostCardSm key={index} post={post} />
          ))}
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">More Readings</h2>
            <p className="text-neutral-400 text-base -mt-1 mb-3 ">Additional Blog Posts</p>
          </div>
          <a className="text-lg text-blue-400 dark:text-blue-300">See All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((post, index) =>
            post.pinned === true ? null : <PostCardMd key={index} post={post} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title', 'pinned', 'tags', 'image']);

  return {
    props: { posts },
  };
};

export default Index;
