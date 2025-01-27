import React from 'react';

import RotateLinks from './rotateLinks';

type Props = {
  title: string;
  images: string[]; // Array of image URLs or paths
};

const ImageStrip: React.FC<Props> = ({ title, images }) => {
  return (
    <div className="w-full bg-blue_primary">
      <h1 className="text-4xl md:text-6xl font-bold uppercase mt-4 my-16 mx-32 md:max-w-3xl break-words bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text"><span className='ml-16'>Follow the journey,</span> frame by frame</h1>
      <RotateLinks/>
      <div className="grid grid-cols-2 md:flex space-x-0 mx-6 md:mx-0">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 md:w-[300px] md:h-[300px] ">
            <img src={image} alt={`Image ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageStrip;