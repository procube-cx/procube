import React from 'react';
import logo from '../assets/images/Procube-white.png';
import { motion } from 'framer-motion';


const Preloader = () => {
    return (
        <div className="relative bg-[#101010] overflow-hidden">

            <motion.div
                className="absolute inset-0 bg-[#101010] z-50 overflow-hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1, x: "70%", transition: { duration: 4 } }}

            ></motion.div>
            <div className="flex items-center justify-center h-screen relative z-20">
                <img src={logo} alt="Procube-white" className="w-40 md:w-48 lg:w-52" />
            </div>
        </div>
    );
};

export default Preloader;
