import React from 'react'
import SecHomeBanner from '../components/HomeBanner/SecHomeBanner'
import CTABannerTwo from '../components/HomeBanner/CTABannerTwo'
import SecHomeAbout from '../components/About/SecHomeAbout'
import CTABannerOne from '../components/HomeBanner/CTABannerOne'
import SecHomeGallery from '../components/Gallery/SecHomeGallery'
import CTABannerThree from '../components/HomeBanner/CTABannerThree'
import RouteLoader from '../components/Loader/RouteLoader'

const Home = () => {
  return (
    <>
    <SecHomeBanner/>
    <RouteLoader/>
    <SecHomeAbout/>
    <CTABannerOne/>
    <SecHomeGallery/>
    <CTABannerTwo/>
    <CTABannerThree/>
    </>
  )
}

export default Home