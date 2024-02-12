import React, { useState } from 'react';
import Landing9 from '../component/hero/Landing9';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Navbar from '../component/hero/Navbar';


function Insight() {


    return (
        <div className=' text-white bg-[#121212]' >
            <Navbar />
            <Landing9 />
            <NextUp Heading={'Careers'} />
            <Footer />
        </div>

    );
}

export default Insight;
