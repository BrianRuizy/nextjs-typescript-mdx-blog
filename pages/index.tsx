import React from 'react';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Container from '../components/Container';
import FeaturedPosts from '../components/FeaturedPosts';
import YoutubePosts from '../components/YoutubePosts';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Header title="Home" description={null} />
      {/* <Container>
        <p className="text-xl text-slate-700 dark:text-slate-400">
          👋 Hey, I'm <u>Brian Ruiz</u>. Feel free to browse my portfolio, read my
          blog posts, watch my videos, or follow me on any of my socials.
        </p>
      </Container> */}
      <FeaturedPosts />
      <YoutubePosts posts={posts} />
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
