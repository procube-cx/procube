import React, { useState } from 'react';
import Navbar from '../component/hero/Navbar';
import Lanidng7 from '../component/hero/Landing7';
import Footer from '../component/hero/Footer';
import Casestudy1 from '../component/casestudy/Casestudy1';

function Casestudy() {


    return (
        <div className=' text-white bg-[#121212]' >

            <div>
                <Navbar />
                <Casestudy1 />
                <Lanidng7 />

                <Footer />
            </div>

        </div>
    );
}

export default Casestudy;
