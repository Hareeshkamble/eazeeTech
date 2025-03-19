import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';




export default function Carousel() {
  const items = [
    <div className="w-full h-[500px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <img src="/pics/pos1.jpeg" className="item w-full h-full object-cover" data-value="1" alt="POS 1" />
    </div>,
    <div className="w-full h-[500px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <img src="/pics/pos2.jpeg" className="item w-full h-full object-cover" data-value="2" alt="POS 2" />
    </div>,
    <div className="w-full h-[500px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <img src="/pics/pos3.jpeg" className="item w-full h-full object-cover" data-value="3" alt="POS 3" />
    </div>,
    <div className="w-full h-[500px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <img src="/pics/pos2.jpeg" className="item w-full h-full object-cover" data-value="4" alt="POS 4" />
    </div>,
    <div className="w-full h-[500px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
      <img src="/pics/pos1.jpeg" className="item w-full h-full object-cover" data-value="5" alt="POS 5" />
    </div>
  ];
  return (
    <>
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval={3000}
        infinite
        items={items}
        disableButtonsControls
        // disableDotsControls
        
      />
    </>
  );
}
