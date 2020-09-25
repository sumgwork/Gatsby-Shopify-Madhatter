import Image from 'gatsby-image';
import React from 'react';
import { Description, Price, ProductTileWrapper, Title } from './styles';
import { StyledLink } from '../StyledLink';

const ProductTile = ({ product }) => {
  const { handle, title, description } = product;
  const minPrice = product.priceRange.minVariantPrice.amount;
  const imageFluid = product.images[0].localFile.childImageSharp.fluid;
  return (
    <ProductTileWrapper>
      <Image fluid={imageFluid} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>from ${parseFloat(minPrice).toFixed(2)}</Price>
      <StyledLink to={`/products/${handle}`}>View Product</StyledLink>
    </ProductTileWrapper>
  );
};

export default ProductTile;
