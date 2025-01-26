import React from 'react';

import RotateLinks from './rotateLinks';

type Props = {
  title: string;
  images: string[]; // Array of image URLs or paths
};

const ImageStrip: React.FC<Props> = ({ title, images }) => {
  return (
    <div className="w-full bg-blue_primary hidden lg:block">
      <h1 className="text-4xl md:text-6xl font-bold uppercase mt-4 my-16 mx-32 max-w-2xl break-words text-gold_primary">{title}</h1>
      <RotateLinks/>
      <div className="flex space-x-0">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] h-[300px]">
            <img src={image} alt={`Image ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageStrip;