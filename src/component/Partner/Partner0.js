import React, { useEffect } from 'react';
import large from '../../assets/images/Partner/image1.jpg';
import larges from '../../assets/images/large-1s.png';

const Partner0 = () => {

    return (
        <div className="px-6 md:px-24 pb-5 md:pb-20 pt-24 md:pt-32">
            <p className='font-normal text-4xl md:text-7xl max-w-4xl text-center mx-auto pb-5 md:pb-20 uppercase !leading-tight'>Crafting Exceptional Digital Products</p>
            <img src={large} alt="large" className='flex my-auto w-full mx-auto rounded-lg md:rounded-3xl h-[80vh] md:h-[90vh] md:object-top' style={{ objectPosition: '70%', objectFit: 'cover' }} />
        </div>
    );
};

export default Partner0;
