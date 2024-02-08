import { useState } from 'react';
import Image from 'next/image';

// Import the images (important to make images 1080x1080px for best results)
import image1 from '@/assets/smet.jpg';
import image2 from '@/assets/färg-lek.jpg';
import image3 from '@/assets/barn-promenad.jpg';
import image4 from '@/assets/barn-sittande.jpg';
import image5 from '@/assets/pärlplatta.jpg';
import arrowForward from '@/assets/arrow_forward.svg';
import arrowBack from '@/assets/arrow_back.svg';


// The image carousel component
const ImageCarousel = () => {
  // The array of images and their alt texts
  const images = [
    { src: image1, alt: 'Barn bakar en smet' },
    { src: image2, alt: 'Barn leker med färg' },
    { src: image3, alt: 'Barn promenerar' },
    { src: image4, alt: 'Barn undersöker' },
    { src: image5, alt: 'En pärlplatta' },
  ];

  // The index of the current image
  // Use a random integer as the initial index
  const [index, setIndex] = useState(Math.floor(Math.random() * images.length));

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
