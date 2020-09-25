import React from 'react';
import CollectionTile from '../CollectionTile';
import { RemainingCollectionsWrapper } from './styles';

const HomePageCollectionsGrid = ({ collections }) => {
  const saleCollection = collections.find(
    collection => collection.title === 'Sale'
  );

  const remainingCollections = collections.filter(
    collection => collection.title !== 'Sale'
  );

  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={
            saleCollection.image?.localFile.childImageSharp.fluid
          }
        />
      )}
      <RemainingCollectionsWrapper>
        {remainingCollections.map(collection => (
          <CollectionTile
            key={collection.shopifyId}
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image?.localFile.childImageSharp.fluid}
          />
        ))}
      </RemainingCollectionsWrapper>
    </div>
  );
};

export default HomePageCollectionsGrid;
