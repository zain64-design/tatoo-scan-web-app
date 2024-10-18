import React from 'react'
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecBlog from '../components/Blogs/SecBlog';
const Blogs = () => {

  const bannerData = {
  BannerTitle: "Our Blogs",
  backgroundImage: "/images/blogs/blog-bg.png"
  }

  return (
    <>
    <InnerBannerOne {...bannerData} />
    <SecBlog/>
    </>
  )
}

export default Blogs