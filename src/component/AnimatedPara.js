import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedParagraph = ({ children, initial, animate, transition, className }) => {

    const isMobile = window.innerWidth < 768;
    const [ref, inView] = useInView(
        isMobile ? {
            triggerOnce: true,
            threshold: 0.1
        } : {
            triggerOnce: true,
            threshold: 0.2
        }
    );

    return (
        <motion.p
            ref={ref}
            // initial={initial}
            // animate={inView ? animate : { opacity: 0 }}
            // transition={transition}
            className={`${className}`}
        >
            {children}
        </motion.p>
    );
};

AnimatedParagraph.defaultProps = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5 }
};

export default AnimatedParagraph;
