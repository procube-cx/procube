import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import large from '../../assets/images/large.png'

const ImageScrollEffect = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cont",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        markers: false
      }
    });
    const halfScreenHeight = window.innerHeight / 1;

    tl.from(".image-wrapper img", {
        x:60,
        y:-halfScreenHeight,
      scale: 0.2, 
      ease: "none"
    });
    tl.to(".image-wrapper img", {
        x:30,
        y:-halfScreenHeight/2,
      scale: 0.5, 
      ease: "none"
    });
    tl.to(".image-wrapper img", {
        x:0,
        y:0,
      scale: 0.8, 
      ease: "none"
    });
  }, []);

  return (
    <div className="cont">
      <div className="image-wrapper">
        <img src={large} alt="Image" />
      </div>
    </div>
  );
};

export default ImageScrollEffect;

