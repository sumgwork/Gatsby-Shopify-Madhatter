import React, { useState } from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';

const ImageGallery = ({ images }) => {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(images[0]);

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
