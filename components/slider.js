import React, { useState, useRef,useEffect } from 'react';
import { motion } from 'framer-motion';

const Slider = ({ images }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    const newSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(newSlide);
    if (sliderRef.current) sliderRef.current.scrollLeft += 720;
  };

  const handlePrev = () => {
    const newSlide = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(newSlide);
    if (sliderRef.current) sliderRef.current.scrollLeft -= 720;
  };

  useEffect(() => {
    if (sliderRef.current) sliderRef.current.scrollLeft = currentSlide * 720;
  }, [currentSlide]);

  return (
    <motion.div
      className="w-full h-96 overflow-x-scroll scrollbar-hide"
      ref={sliderRef}
    >
      <motion.div
        className="w-full h-full"
        drag="x"
        dragConstraints={{ right: 0, left: -(images.length * 720) }}
        animate={{ x: -currentSlide * 720 }}
        transition={{ type: 'tween', ease: 'easeOut' }}
      >
        {images.map((image) => (
          <div key={image} className="w-full h-full">
            <img
              src={image}
              alt="slide"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
