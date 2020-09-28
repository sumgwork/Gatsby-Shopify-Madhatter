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
          destination={`/all-products/?c=${encodeURIComponent(
            saleCollection.shopifyId
          )}`}
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
            destination={`/all-products/?c=${encodeURIComponent(
              collection.shopifyId
            )}`}
            backgroundImage={collection.image?.localFile.childImageSharp.fluid}
          />
        ))}
      </RemainingCollectionsWrapper>
    </div>
  );
};

export default HomePageCollectionsGrid;
