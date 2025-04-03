import React from 'react'
import '../styles/Gallery.css'

const Gallery = () => {
    const images = Array.from({ length: 14 }, (_, i) => `/images/${i + 1}.jpeg`);
    return (
        <div className="gallery-container">
          <div className="image-grid">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`תמונה ${index + 1}`} className="gallery-image" />
            ))}
          </div>
        </div>
      );
    }
    
    export default Gallery;