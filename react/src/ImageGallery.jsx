import React from "react";
import ImageCard from "./ImageCard";

function ImageGallery({ images, onImageClick }) {
  return (
    <div className="images grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {images.map((img, index) => (
        <ImageCard key={index} image={img} onClick={() => onImageClick(img)} />
      ))}
    </div>
  );
}

export default ImageGallery;