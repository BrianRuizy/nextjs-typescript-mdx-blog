import React from 'react';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Layout from '../components/Layout';
import Header from '../components/Header';
import FeaturedPosts from '../components/FeaturedPosts';
import YoutubePosts from '../components/YoutubePosts';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Header title="Brian Ruiz" description={null}/>
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
