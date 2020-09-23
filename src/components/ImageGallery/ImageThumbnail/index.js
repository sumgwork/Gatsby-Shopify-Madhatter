import React from 'react';
import Image from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';

const ImageThumbnail = ({ isActive, onClick, image }) => {
  return (
    <ImageThumbnailWrapper onClick={() => onClick(image)} isActive={isActive}>
      <Image fluid={image.localFile.childImageSharp.fluid} />
    </ImageThumbnailWrapper>
  );
};

export default ImageThumbnail;
