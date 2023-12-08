import Image from 'next/image';
import React from 'react';

export default function ImageGallery() {
  // Classes Tailwind pour les images au survol
  const hoverStyle = 'transition-transform duration-300 ease-in-out transform hover:scale-105';

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        {/* Image principale */}
        <Image src="/main.png" width={1000} height={300} alt="Main Image" />
      </div>
      <div className="flex justify-between">
        {/* Images secondaires */}
        <div className={hoverStyle}>
          <Image src="/kitchen.png" width={150} height={100} alt="Secondary Image 1" />
        </div>
        <div className={hoverStyle}>
          <Image src="/bedroom.png" width={150} height={100} alt="Secondary Image 2" />
        </div>
        <div className={hoverStyle}>
          <Image src="/entrance.png" width={150} height={100} alt="Secondary Image 3" />
        </div>
      </div>
    </div>
  );
}
