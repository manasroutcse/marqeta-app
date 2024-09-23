import { useState } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <> 
    <div className={styles.mainSliderDiv}>
    <div className={styles.sliderPageButton}>
    <h1>The next era of<br/>
embedded finance</h1><br/>
<p>ntegrate end to end credit and payment solutions into<br/> your business processes using our modern card issuing<br/> platform.

</p>
<div className={styles.Contact}>
<button><span>Contact Sales</span></button>
</div>
<div className={styles.Learnmore}>
<button><span>Learn more about credit</span></button>

</div>

    </div>
    <div className={styles.sliderContainer}>
    <button className={styles.button} onClick={prevSlide}>
      ❮
    </button>
    
    <img
      src={images[currentIndex]}
      alt={`slide ${currentIndex}`}
      className={styles.image}
    />
    
    <button className={styles.button} onClick={nextSlide}>
      ❯
    </button>
  </div>
  </div>
  </>
   
  );
};

export default ImageSlider;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper';
// import '../components/swiper.module.css'; // import Swiper styles

// const ImageSlider = () => {
//   const images = [
//     '/images/image1.jpg',
//     '/images/image2.jpg',
//     '/images/image3.jpg', // Add more images as needed
//   ];

//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="mySwiper"
//     >
//       {images.map((src, index) => (
//         <SwiperSlide key={index}>
//           <img src={src} alt={`Slide ${index}`} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ImageSlider;

// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Container, Flex } from "@chakra-ui/react";

// const ImageSlider = ({ images }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const ref = useRef(null);

//   const handleNext = () => {
//     setCurrentSlide((prevIndex) =>
//       (prevIndex + 1) % images.length
//     );
//     if (ref.current) ref.current.scrollLeft += 720;
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     if (ref.current) ref.current.scrollLeft -= 720;
//   };

//   const transitionDuration = { duration: 0.8, easing: [0.24, 0.66, 0.34, 1] };

//   useEffect(() => {
//     if (ref.current) ref.current.scrollLeft = currentSlide * 720;
//   }, [currentSlide]);

//   return (
//     <Container>
//       <Flex className="relative h-72">
//         <div
//           className="absolute inset-0 flex flex-wrap overflow-x-scroll hide-scrollbar"
//           ref={ref}
//         >
//           {images.map((image, index) => (
//             <div
//               key={image}
//               className={`w-full h-72 relative`}
//               style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
//               aria-hidden={currentSlide !== index}
//             />
//           ))}
//         </div>
//       </Flex>

//       {images.map((_, index) => (
//         <button
//           key={`indicator-${index}`}
//           aria-label={`Go to slide ${index + 1}`}
//           onClick={() => setCurrentSlide(index)}
//           className={`${
//             index === currentSlide ? "text-red-500" : ""
//           } h-2.5 w-2.5 rounded-full ml-2 mb-1 shadow-md cursor-pointer bg-white`}
//         />
//       ))}

//       <button
//         type="button"
//         className="ml-2 mr-6 h-20 w-20 rounded-full outline-none focus:shadow-none flex items-center justify-center hover:bg-gray-400 duration-300 ease-in"
//         onClick={handlePrev}
//       >
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//           className="text-gray-600 transition duration-200 ease-in transform"
//         >
//           <line y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" />
//           <line y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="

// import React, { useState, useRef } from "react";

// const ImageSlider = ({ images }) => {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const scrollWidth = sliderRef.current.scrollWidth;

//   const handleNext = () => {
//     const newSlide = (currentSlide + 1) % images.length;
//     setCurrentSlide(newSlide);
//     sliderRef.current.scrollTo({
//       left: newSlide * scrollWidth,
//       behavior: "smooth",
//     });
//   };

//   const handlePrev = () => {
//     const newSlide = (currentSlide - 1 + images.length) % images.length;
//     setCurrentSlide(newSlide);
//     sliderRef.current.scrollTo({
//       left: newSlide * scrollWidth,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="w-full h-96 flex items-center">
//       {/* Previous button */}
//       <button
//         className="bg-blue-500 text-white p-2 mb-4 rounded"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>

//       {/* Image slider */}
//       <div
//         ref={sliderRef}
//         className="w-full h-full overflow-x-scroll scrollbar-hide"
//         style={{ scrollSnapType: "x mandatory" }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={image}
//             className="w-1/4 h-full scroll-m-0 scroll-p-0 scroll-snap-align-start"
//             style={{ scrollSnapAlign: "start" }}
//           >
//             <img src={image} alt="Slide" className="h-full object-cover w-full" />
//           </div>
//         ))}
//       </div>

//       {/* Next button */}
//       <button
//         className="bg-blue-500 text-white p-2 rounded"
//         onClick={handleNext}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;

// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";

// const ImageSlider = ({ images }) => {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Use a ref to store the native scrollWidth of the slider
// //   const scrollWidth = sliderRef.current.scrollWidth;x

//   const handleNext = () => {
//     const newSlide = (currentSlide + 1) % images.length;
//     setCurrentSlide(newSlide);
//     sliderRef.current.scrollTo({
//       left: newSlide * scrollWidth,
//       behavior: "smooth",
//     });
//   };

//   const handlePrev = () => {
//     const newSlide = (currentSlide - 1 + images.length) % images.length;
//     setCurrentSlide(newSlide);
//     sliderRef.current.scrollTo({
//       left: newSlide * scrollWidth,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* Previous button */}
//       <button
//         className="bg-blue-500 text-white p-2 rounder font-bold"
//         onClick={handlePrev}
//       >
//         Prev
//       </button>

//       {/* Image slider */}
//       <div
//         ref={sliderRef}
//         className="w-full h-96 overflow-x-scroll whitespace-nowrap"
//         style={{ scrollSnapType: "x mandatory" }}
//       >
//         {images.map((image, index) => (
//           <motion.div
//             key={image}
//             className="w-1/4"
//             style={{ scrollSnapAlign: "start" }}
//             initial={0}
//             animate={index === currentSlide ? { x: 0 } : { x: -scrollWidth }}
//             transition={{ type: "tween", duration: 0.3 }}
//           >
//             <img src={image} alt="Slide" className="h-full" />
//           </motion.div>
//         ))}
//       </div>

//       {/* Next button */}
//       <button
//         className="bg-blue-500 text-white p-2 rounder font-bold"
//         onClick={handleNext}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;
