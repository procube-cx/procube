import React, { useEffect } from 'react';
import large from '../../assets/images/Partner/image1.jpg';
import larges from '../../assets/images/large-1s.png';
import AnimatedParagraph from '../AnimatedPara';

const Partner0 = () => {

    return (
        <div className="px-6 md:px-24 pt-24 md:pt-32">
            <AnimatedParagraph className='font-normal text-4xl md:text-7xl max-w-4xl text-center mx-auto pb-10 md:pb-[70px] uppercase !leading-tight'>Crafting Exceptional Digital Products</AnimatedParagraph>
            <img src={large} alt="large" className='flex my-auto w-full mx-auto rounded-lg md:rounded-3xl h-[80vh] md:h-[90vh] md:object-top' style={{ objectPosition: '70%', objectFit: 'cover' }} />
        </div>
    );
};

export default Partner0;
