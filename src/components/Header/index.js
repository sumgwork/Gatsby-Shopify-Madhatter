import React from 'react';
import { HeaderWrapper } from './styles';
import Cart from 'components/Cart';
import Search from 'components/Search';

const Header = () => {
  return (
    <HeaderWrapper>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
};

export default Header;
