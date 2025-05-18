const CategoriesSection = () => {
    const category=[{
        title:'Women',
        imageUrl:'https://tint.creativemarket.com/_d3GUK8B2S7yQqGS6GoKmINGq0Qzu1KFxveP0E6I1F4/width:1820/height:2652/gravity:nowe/rt:fill-down/el:1/preset:cm_watermark_retina/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzQ1NS80NTU5LzQ1NTk1NjAvY3A1bmJyeHpwem16ZmFsMHlsNjhoYTRqMGZma3FyZjdweXYxcmxjaXprbXUyemU4Y2hrZnFvenFuY3ZtZmNldS1vLmpwZw'
    },
    {
        title:'Men',
        imageUrl:'https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?cs=srgb&amp;dl=pexels-nkhajotia-1486064.jpg&amp;fm=jpg'
    },
    {
        title:'Kids',
        imageUrl:'https://images.pexels.com/photos/7848423/pexels-photo-7848423.jpeg?cs=srgb&amp;dl=pexels-vika-glitter-392079-7848423.jpg&amp;fm=jpg'
    },

]

  return (
  <div className='bg-white pt-12 pb-8'>
      <div className='container mx-auto flex gap-4'>
        {category.map((ele,index)=>{
            return(
                <div key={index} className="basis-1/3 relative transform transition-transform duration-300 hover:scale-105 cursor-pointer rounded-4xl">

                    <img src={ele.imageUrl} alt="" className="w-96 h-72"/>
                    <button className='bg-red-500 text-white font-bold text-xl hover:bg-blue-500 px-8 py-1.5 mt-4 rounded cursor-pointer'>View All</button>
                </div>
            )
        })}
        </div></div>
  )
}

export default CategoriesSection;
