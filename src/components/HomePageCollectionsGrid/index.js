import React from 'react';
import CollectionTile from '../CollectionTile';

const HomePageCollectionsGrid = ({ collections }) => {
  return (
    <div>
      {collections.map(collection => (
        <CollectionTile
          key={collection.shopifyId}
          title={collection.title}
          description={collection.description}
          backgroundImage={collection.image?.localFile.childImageSharp.fluid}
        />
      ))}
    </div>
  );
};

export default HomePageCollectionsGrid;
