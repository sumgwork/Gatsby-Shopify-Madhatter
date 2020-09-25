import React, { useContext } from 'react';
import ProductContext from 'context/ProductContext';
import CategoryFilterItem from './CategoryFilterItem';
import { FiltersWrapper } from './styles';

const Filters = () => {
  const { collections } = useContext(ProductContext);
  return (
    <div>
      <FiltersWrapper>
        <strong>Categories</strong>
        {collections.map(collection => (
          <CategoryFilterItem
            title={collection.title}
            key={collection.shopifyId}
            id={collection.shopifyId}
          />
        ))}
      </FiltersWrapper>
    </div>
  );
};

export default Filters;
