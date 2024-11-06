import React from 'react';
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecServices from '../components/Services/SecServices';

const Services = () => {

  const serviceBannerInfo = {
    BannerTitle: "Explore the Power of Tattooscan",
    backgroundImage: "/images/services/service-bg.png",
    paragraph: "Tattooscan is more than just an tattoo app—it’s a transformative tool that enhances your tattoo storytelling, connects you with artists, and brings the stories behind your ink to life. Discover the interactive tattoo experience and innovative features that make Tattooscan the ultimate platform for tattoo enthusiasts and artists alike."
  }

  return (
    <>
      <InnerBannerOne {...serviceBannerInfo} />
      <SecServices/>
    </>
  )
}

export default Services