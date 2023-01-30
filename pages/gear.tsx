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
        description={'Curated tech'}
      />
    </Layout>
  );
};

export default Gear;
