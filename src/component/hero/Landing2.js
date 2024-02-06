import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import large from '../../assets/images/large.png';
// import video from '../../assets/video/service-1.webm'

const Landing2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    const halfScreenHeight =  window.innerHeight ;

    // Initial animation settings to move the image
tl.from(".image-wrapper #img", {
  x: "20%", // Move 20% to the right
  y: -halfScreenHeight, // Move up by half of the screen height
  scale: 0.15, // Scale down to 15%
  transformOrigin: "  center center", // Set the transformation origin to the top center
  ease: "power4.out", // Easing function
});

// Resetting the image position and scale
tl.to(".image-wrapper #img", {
  x: 0, // Reset x position
  y: 0, // Reset y position
  scale: 1, // Reset scale
  transformOrigin: "  center center", // Change transformation origin
  ease: "power4.out", // Easing function
});

// Another animation setting, which seems redundant
tl.to(".image-wrapper #img", {
  x: 0,
  y: 0,
  scale: 1,
  transformOrigin: "  center center",
  ease: "power4.out",
});

// Creating ScrollTrigger to control the animation
ScrollTrigger.create({
  trigger: ".cont", // The trigger element
  start: "top center", // When to start the animation
  end: "bottom center", // When to end the animation
  animation: tl, // Animation to be triggered
  scrub: true, // Whether to smoothly animate through the scroll
  markers: false // Whether to display markers for debugging
});


    return () => {
      // Clean up function if needed
    };
  }, []);

  return (
    <div className="cont">
      <div className="image-wrapper ">
        <img src={large} alt="large" id="img" className='hidden md:flex my-auto w-4/5 mx-auto md:pt-36' />
      </div>
      <img src={large} alt="large" className='md:hidden py-9 px-6' />
    </div>
  );
};

export default Landing2;
