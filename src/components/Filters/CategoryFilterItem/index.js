import React from 'react';
import { CategoryFilterItemWrapper } from './styles';
import Checkbox from 'components/Checkbox';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

const CategoryFilterItem = ({ title, id }) => {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === id);
  const handleClick = () => {
    let navigateTo = '/all-products';

    let newIds = []; //collectionIds.map(cId => encodeURIComponent(cId));
    if (checked) {
      newIds = collectionIds
        .filter(cId => cId !== id)
        .map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }

    if (newIds.length) {
      navigate(`${navigateTo}?c=${newIds.join(',')}`);
    } else {
      navigate(`${navigateTo}`);
    }
  };

  return (
    <CategoryFilterItemWrapper onClick={handleClick}>
      <Checkbox checked={checked} />
      <div>{title}</div>
    </CategoryFilterItemWrapper>
  );
};

export default CategoryFilterItem;
