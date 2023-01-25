import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';

export const Gear = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Gear - Hunter Chang',
      }}
    >
      <Header
        title="Gear"
        description={'This is a curated lists of things I use and love.'}
      />
    </Layout>
  );
};

export default Gear;
