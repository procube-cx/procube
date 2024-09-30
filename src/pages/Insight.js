import React, { useEffect, useState } from "react";
import Landing9 from "../component/hero/Landing9";
import Footer from "../component/hero/Footer";
import NextUp from "../component/NextUp";
import Navbar from "../component/hero/Navbar";
import Insight1 from "../component/insight/Insight1";
import sanityClient from "../sanity";

function Insight() {
  const [data, setData] = useState(null);

  
//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "blog"]{
//                       title,
//                       subtitle,
//                       publishedAt,
//                       slug,
//                       description,
//                       "imageUrl": image.asset->url, 
//                       content
//                     }`
//       )
//       .then((data) => {
//         console.log(data, "Sanity Data");
//         setData(data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);

  React.useEffect(() => {
    document.title = "Insights | Blogs & Latest Trends";
    const setMetaDescription = document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Stay ahead in the digital landscape with Procube's Insights. Explore expert articles, industry trends, and valuable tips on digital marketing, web development, app development, SEO, and more."
      );
  }, []);

  return (
    <div className=" text-white bg-[#121212]">
      <Navbar />
      <Insight1 Heading={"Insights"} filterShow={true} />
      <NextUp Heading={"Careers"} />
      <Footer />
    </div>
  );
}

export default Insight;
