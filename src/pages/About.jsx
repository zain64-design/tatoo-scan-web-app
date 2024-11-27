import React, { useEffect, useState } from 'react';
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecAbout from '../components/About/SecAbout'
import fetchData from '../utils/hooks/fetchData';
import { API_ENDPOINT } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/features/contentSlice';
import { getApiContents, getStateData } from '../utils/helper';

const About = () => {
  const dispatch = useDispatch();
  const [apiState, setApiState] = useState(0);
  const aboutData = useSelector(state => state.cmsContent);
  const [bannerInfo, setBannerInfo] = useState({
    BannerTitle: "About Us",
    backgroundImage: "/images/about/about-bg.png",
    paragraph: `At Tattooscan, we believe that tattoos are more than just ink on skin—they’re personal stories,
    memories, and expressions of identity. Founded by a team of tattoo enthusiasts and tech innovators,
    we set out to revolutionize the way people connect with their tattoos. Our platform bridges the gap between
    traditional body art and modern technology, allowing users to add an interactive, multimedia dimension to their tattoos. 
    Whether you're an artist looking to showcase your work or someone who wants to share the deeper meaning behind their ink,
    Tattooscan offers a unique way to enhance your tattoo experience.`
  });

  const getContents = async () => {
    let slug = 'about';
    const apiData = await getApiContents(slug);
    dispatch(setData({ name: slug, data: apiData }));
    setApiState(1);
  }

  useEffect(() => {
    getContents();
  }, []);

  useEffect(() => {
    setBannerInfo({
      ...bannerInfo,
      BannerTitle: aboutData?.about?.section_1_title,
      backgroundImage: aboutData?.about?.section_2_bg_image,
      paragraph: aboutData?.about?.section_1_desc,
    })
  }, [apiState])

  return (
    <>
    <InnerBannerOne {...bannerInfo}/>
    <SecAbout/>
    </>
  )
}

export default About