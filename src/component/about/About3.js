import React, { useEffect, useRef } from 'react';
import large from '../../assets/images/large-2.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About3 = () => {


  const containerRef = useRef(null);

  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    let scroll_instance = null
    if (containerRef.current) {

     scroll_instance = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        onUpdate: (self) => {
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity()
          );
          setProgress(self.progress.toFixed(3))
        },
      });
      
    }
      return () => {
        if(scroll_instance){
          scroll_instance.kill()
        }
      }
  }, [containerRef.current,ScrollTrigger ]);
  return (
    <div className="cont mycontainer" ref={containerRef}>
      <div className="image-wrapper bg-slate-300 md:pt-36">

        <div className='flex my-auto w-4/5 h-[60vh] mx-auto  bg-red-600 overflow-hidden rounded-2xl relative' >

          <img style={{ transform: `translate(-50%,-${progress*40}%) scale(1.4)` }} src={large} alt="large" className='flex absolute h-full left-1/2 top-0 ' />
        </div>
      </div>
    </div>
  );
};

export default About3;
