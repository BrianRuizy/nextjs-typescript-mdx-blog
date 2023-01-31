import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Container from '../components/Container';

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
      <Container className="flex flex-col gap-8 lg:gap-12">
        <p className="text-lg text-neutral-700 dark:text-neutral-400">
          Whether you have a question about my work, a suggestion for a new
          article or video topic, or just want to say hello, — don&apos;t
          hesitate — I&apos;d love to hear from you! I aim to respond to all
          messages in a timely manner. Looking forward to connecting.
        </p>
       
      </Container>
    </Layout>
  );
};

export default Blog;
