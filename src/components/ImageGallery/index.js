import React, { useState, useEffect } from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';

const ImageGallery = ({ images, selectedVariantImageId }) => {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVariantImageId, setActiveImageThumbnail]);

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };
  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map(image => (
          <ImageThumbnail
            key={image.id}
            image={image}
            onClick={handleClick}
            isActive={image.id === activeImageThumbnail.id}
          />
        ))}
      </div>
    </ImageGalleryWrapper>
  );
};

export default ImageGallery;
