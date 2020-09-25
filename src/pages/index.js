import React, { useContext } from 'react';
import { Layout, SEO } from 'components';
import ProductContext from 'context/ProductContext';
import HomePageCollectionsGrid from '../components/HomePageCollectionsGrid';
import FeaturedProducts from '../components/FeaturedProducts';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);

  return (
    <Layout>
      <SEO title="Home" />
      <HomePageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured'
        )}
      />
      {!!collections.find(collection => collection.title === 'Featured') && (
        <FeaturedProducts />
      )}
    </Layout>
  );
};

export default IndexPage;
