import React, { useContext } from 'react';
import ProductsGrid from '../ProductsGrid';
import ProductContext from 'context/ProductContext';

const FeaturedProducts = () => {
  const { collections } = useContext(ProductContext);
  const featuredCollection = collections.find(
    collection => collection.title === 'Featured'
  );

  return (
    <section>
      <h1>Featured Products</h1>
      <ProductsGrid products={featuredCollection?.products} />
    </section>
  );
};

export default FeaturedProducts;
