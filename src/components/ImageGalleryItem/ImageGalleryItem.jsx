import React from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ webformatURL, tags, largeImage, onClick }) {
  
     return (
    <GalleryItem>
      <img 
      className="galleryImg"
      src={webformatURL} 
      alt={tags}
      onClick={() => onClick(largeImage, tags)}
      loading="lazy"
       />
      
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,

}