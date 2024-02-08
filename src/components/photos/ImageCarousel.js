import { useState } from 'react';
import Image from 'next/image';

// Import the images
import image1 from '@/assets/skog.jpg';
import image2 from '@/assets/strand.jpg';
import image3 from '@/assets/lekplats.jpg';
import image4 from '@/assets/IMG_11.jpg';
import arrowForward from '@/assets/arrow_forward.svg';
import arrowBack from '@/assets/arrow_back.svg';


// The image carousel component
const ImageCarousel = () => {
  // The array of images and their alt texts
  const images = [
    { src: image1, alt: 'First image' },
    { src: image2, alt: 'Second image' },
    { src: image3, alt: 'Third image' },
    { src: image4, alt: 'Fourth image' },
  ];

  // The index of the current image
  const [index, setIndex] = useState(0);

  // The function to go to the next image
  const next = () => {
    setIndex((index + 1) % images.length);
  };

  // The function to go to the previous image
  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <section className="flex flex-col items-center py-5 w-full">
    <div className="flex justify-center items-center w-4/5">
     
      {/* The left arrow button */}
      <button
        className="left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-r-lg z-50"
        onClick={prev}
      >
        <Image
            src={arrowBack}
            alt='Arrow pointing left'
            width={40}
            height={40}
            />
      </button>
       {/* The current image */}
       <Image
        className=" w-4/5 h-full rounded-lg z-0 max-w-[500px] max-h-[500px] object-cover"
        src={images[index].src}
        alt={images[index].alt}
        height={500}
        width={500}
        
      />
      {/* The right arrow button */}
      <button
        className=" right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-info rounded-l-lg z-50"
        onClick={next}
      >
        <Image 
        src={arrowForward}
        alt='Arrow pointing right'
        width={40}
        height={40}
        />
      </button>
    </div>
    </section>
  );
};

export default ImageCarousel;