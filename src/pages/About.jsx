import React from 'react';
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecAbout from '../components/About/SecAbout'
import SecAboutTeam from '../components/About/SecAboutTeam';
import SecReward from '../components/Rewards/SecReward';

const About = () => {

  const aboutBannerInfo = {
    BannerTitle: "About Us",
    backgroundImage: "/images/about/about-bg.png",
    paragraph: "At Tattooscan, we believe that tattoos are more than just ink on skin—they’re more like Tattoo community, personal stories, memories, and expressions of identity. Founded by a team of tattoo enthusiasts and tech innovators, we set out to revolutionize the way people connect with their tattoos. Our platform bridges the gap between traditional body art and modern technology, allowing users to add an interactive tattoo experience, multimedia dimension to their tattoos. Whether you're an artist looking to showcase your work or someone who wants to share your personalized tattoo content that has deeper meaning behind ink, Tattooscan offers a unique way to enhance your tattoo experience."
  }

  return (
    <>
    <InnerBannerOne {...aboutBannerInfo}/>
    <SecAbout/>
    <SecAboutTeam/>
    <SecReward/>
    </>
  )
}

export default About