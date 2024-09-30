import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/hero/Footer";
import NextUp from "../component/NextUp";
import Navbar from "../component/hero/Navbar";
import Insight1 from "../component/insight/Insight1";
import Insightview from "../component/insight/Insightview";
import { useEffect } from "react";
import sanityClient from "../sanity";

function InsightSlug() {
  const { id } = useParams();
  const [index, setIndex] = React.useState(null);
  const [blogData, setBlogData] = React.useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"]{
                  title,
                  subtitle,
                  publishedAt,
                  slug,
                  description,
                  "imageUrl": image.asset->url, 
                  content,
                  tags
                }`
      )
      .then((data) => {
        setBlogData(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  React.useEffect(() => {
    if (blogData?.length > 0) {
      const foundIndex = blogData.findIndex(
        (item) => item.slug?.current === id
      );

      if (foundIndex !== -1) {
        setIndex(foundIndex);
        document.title = blogData[foundIndex].title;
      }
    }
  }, [id, blogData]);

  console.log(id, blogData, index, "iddddd");

  if (index === null || !blogData[index]) {
    return (
      <div className="text-white bg-[#121212] h-[100vh] flex items-center justify-center ">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-white bg-[#121212]">
      <Navbar />
      <Insightview blogdata={blogData} index={index} />
      <Insight1 Heading={"More Insights"} filterShow={false} />
      <NextUp Heading={"Careers"} />
      <Footer />
    </div>
  );
}

export default InsightSlug;
