import React from "react";

const Blogstructure = ({ data }) => {
  console.log(data, "sanity strun");

  return (
    <>
      {data?.type === "heading" && (
        <p className="md:text-5xl">{data?.content}</p>
      )}
      {data?.type === "subheading" && (
        <p className="text-xl md:text-2xl font-semibold leading-[173%] pt-6 md:pt-10">
          {data?.content}
        </p>
      )}
      {data?.type === "content" && (
        <p className="text-sm md:text-lg opacity-60 !leading-relaxed">
          {data?.content}
        </p>
      )}
      {data?.ul !== undefined && (
        <>
          <ul className="">
            {data?.ul.map((data, index) => (
              <li key={index} style={{ paddingLeft: "10px" }}>
                <p className="text-sm md:text-lg opacity-60 !leading-relaxed ">
                  - {data}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

const Insightview = ({ blogdata, index }) => {
  const slug = window.location.pathname.split("/")[2];
  const filterdata = blogdata?.filter((data) => data?.slug?.current === slug);

  const data = filterdata[0];
  console.log(data, slug, filterdata, "blogDataaaaa");

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      {data === undefined ? (
        <div className="px-6 md:px-24  flex flex-col gap-y-5 md:gap-y-10 relative pt-24 md:pt-48">
          <p className="font-normal text-4xl max-w-full uppercase !leading-tight">
            BLOG NOT FOUND
          </p>
        </div>
      ) : (
        <div className="px-6 md:px-24  flex flex-col gap-y-5 md:gap-y-10 relative pt-24 md:pt-48">
          <p className="font-normal text-4xl md:text-7xl max-w-full text-center uppercase mx-auto !leading-tight">
            {data?.title}
          </p>
          <div
            className={`flex items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer bg-[#3A3A3A] mx-auto`}
            style={{ whiteSpace: "nowrap", minWidth: "fit-content" }}
          >
            <p className="text-sm md:text-lg">
              {formatDate(data?.publishedAt)}
            </p>
          </div>
          <img
            src={data?.imageUrl}
            alt="hero"
            className="w-full md:w-5/6 mx-auto object-cover md:h-[80vh] rounded-lg md:rounded-2xl"
          />
          <div className="w-full md:w-5/6 mx-auto">
            {data?.content.map((contentData, index) => (
              <Blogstructure key={index} data={contentData} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Insightview;
