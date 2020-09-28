import Cart from 'components/Cart';
import Logo from 'components/Logo';
import Search from 'components/Search';
import { Link } from 'gatsby';
import React from 'react';
import { HeaderWrapper } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
};

export default Header;
