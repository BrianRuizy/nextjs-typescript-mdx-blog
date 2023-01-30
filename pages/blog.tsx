import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';

export const Blog = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Blog - Hunter Chang',
      }}
    >
      <Header
        title="Blog"
        description={'All posts'}
      />
    </Layout>
  );
};

export default Blog;
