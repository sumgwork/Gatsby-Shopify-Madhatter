import { StyledLink } from 'components/StyledLink';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import {
  CollectionTileContent,
  CollectionTileWrapper,
  Description,
  Title,
} from './styles';

const CollectionTile = ({
  description,
  title,
  backgroundImage,
  sale,
  destination,
}) => {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <StyledLink to={destination}>Shop Now</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
};

export default CollectionTile;
