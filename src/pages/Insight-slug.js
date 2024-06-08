import React from 'react';
import Footer from '../component/hero/Footer';
import NextUp from '../component/NextUp';
import Navbar from '../component/hero/Navbar';
import Insight1 from '../component/insight/Insight1';
import Insightview from '../component/insight/Insightview';
import { blogdata } from '../data/blogdata';


function InsightSlug() {


    return (
        <div className=' text-white bg-[#121212]' >
            <Navbar />
            <Insightview blogdata = {blogdata} />
            <Insight1 Heading={'More Insights'} filterShow={false}/>
            <NextUp Heading={'Careers'} />
            <Footer />
        </div>

    );
}

export default InsightSlug;
