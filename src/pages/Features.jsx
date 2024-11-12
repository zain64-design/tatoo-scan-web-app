import React from 'react';
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecFeatures from '../components/Features/SecFeatures';

const Services = () => {

  const serviceBannerInfo = {
    BannerTitle: "Explore the Power of Tattooscan",
    backgroundImage: "/images/services/service-bg.png",
    paragraph: "Tattooscan is more than just an app—it’s a transformative tool that enhances your tattoo experience, connects you with artists, and brings the stories behind your ink to life. Discover the innovative features that make Tattooscan the ultimate platform for tattoo enthusiasts and artists alike."
  }

  return (
    <>
      <InnerBannerOne {...serviceBannerInfo} />
      <SecFeatures/>
    </>
  )
}

export default Services