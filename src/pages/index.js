import React, { useContext } from 'react';
import { Layout, SEO } from 'components';
import ProductContext from 'context/ProductContext';
import HomePageCollectionsGrid from '../components/HomePageCollectionsGrid';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log('collections', collections);

  return (
    <Layout>
      <SEO title="Home" />
      <HomePageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured'
        )}
      />
    </Layout>
  );
};

export default IndexPage;
