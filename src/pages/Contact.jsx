import React from 'react'
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecContact from '../components/Contact/SecContact';

const Contact = () => {
  return (
    <>
    <InnerBannerOne BannerTitle="Contact Us" backgroundImage="/images/contact/contact-bg.png"/>
    <SecContact/>
    </>
  )
}

export default Contact