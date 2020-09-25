import React from 'react';
import ProductTile from '../ProductTile';
import { ProductsGridWrapper } from './styles';

const ProductsGrid = ({ products }) => {
  return (
    <ProductsGridWrapper>
      {products.map(
        product =>
          product && <ProductTile key={product.shopifyId} product={product} />
      )}
    </ProductsGridWrapper>
  );
};

export default ProductsGrid;
