import React from 'react'

const Blogstructure = ({ data }) => {
  return (
    <>
      {data.type === 'heading' && <p className='font-normal text-2xl md:text-4xl max-w-full text-center uppercase mx-auto !leading-tight'>{data.content}</p>}
      {data.type === 'subheading' && <p className='font-normal text-xl md:text-2xl max-w-full text-center uppercase mx-auto !leading-tight'>{data.content}</p>}
      {data.type === 'content' && <p className='text-center font-normal w-full md:w-5/6 mx-auto text-xs md:text-lg opacity-60'>{data.content}</p>}
      {data.type === 'ul' && <ul className='text-center font-normal w-full md:w-5/6 mx-auto text-xs md:text-lg opacity-60'>{data.ul.map((data, index) => (
        <li key={index}>{data}</li>
      ))}</ul>}
    </>
  )
}


const Insightview = (blogdata) => {
  const slug = window.location.pathname.split('/')[2]
  const filterdata = blogdata.blogdata.filter(data => data.slug === slug)
  const data = filterdata[0]
  console.log(data)
  return (
    <div className='px-6 md:px-24  flex flex-col gap-y-5 md:gap-y-10 relative pt-24 md:pt-48'>
      <p className='font-normal text-4xl md:text-7xl max-w-full text-center uppercase mx-auto !leading-tight'>{data?.heading}</p>
      <div className={`flex items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer bg-[#3A3A3A] mx-auto`} style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}>
        <p className='text-sm md:text-lg'>{data?.date}</p>
      </div>
      <img src={data?.icon} alt="hero" className='w-full md:w-5/6 mx-auto object-cover md:h-[80vh] rounded-lg md:rounded-2xl' />
      {data?.content.map((data, index) => (
        <Blogstructure key={index} data={data} />
      ))}
    </div>
  )
}

export default Insightview