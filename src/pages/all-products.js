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
  const searchTerm = qs.s;
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

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return (
        product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    }
    return true;
  };

  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);
  return (
    <Layout>
      {!!searchTerm && !!filteredProducts.length && (
        <h3>
          Search Term: <strong>'{searchTerm}'</strong>
        </h3>
      )}
      {!!filteredProducts.length && <h4>{filteredProducts.length} products</h4>}

      <Content>
        <Filters />
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>Oh no! Nothing matches</span>
              &nbsp;
              <strong>'{searchTerm}'</strong>
            </h3>
            <div>
              To help with your search why not try:
              <br />
              <br />
              <ul>
                <li>Checking your spelling</li>
                <li>Using less words</li>
                <li>Using a different search term</li>
              </ul>
            </div>
          </div>
        )}
        {!!filteredProducts.length && (
          <div>
            <ProductsGrid products={filteredProducts} />
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default AllProducts;
