import React, { useContext } from 'react';
import { Layout } from 'components/Layout';
import ProductContext from 'context/ProductContext';
import ProductsGrid from 'components/ProductsGrid';
import styled from 'styled-components';
import Filters from 'components/Filters';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

const AllProducts = () => {
  const { products, collections } = useContext(ProductContext);
  const collectionProductsMap = {};

  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(cId => !!cId) || [];
  const selectedCollectionIdsMap = {};

  selectedCollectionIds.forEach(selectedCollectionId => {
    selectedCollectionIdsMap[selectedCollectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductsMap[collection.shopifyId] = {};
      collection.products.forEach(product => {
        collectionProductsMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductsMap[key]?.[product.shopifyId]) return true;
      }
      return false;
    }
    return true;
  };

  const filteredProducts = products.filter(filterByCategory);
  return (
    <Layout>
      <h4>{filteredProducts.length} products</h4>
      <Content>
        <Filters />
        <div>
          <ProductsGrid products={filteredProducts} />
        </div>
      </Content>
    </Layout>
  );
};

export default AllProducts;
