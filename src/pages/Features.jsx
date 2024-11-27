import React, { useEffect, useState } from 'react';
import InnerBannerOne from '../components/InnerBanners/InnerBannerOne';
import SecFeatures from '../components/Features/SecFeatures';
import { setData } from '../redux/features/contentSlice';
import { getApiContents } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';

const Services = () => {
  const dispatch = useDispatch();
  const featureData = useSelector(state => state.cmsContent).features;
  const [serviceBannerInfo, setServiceBannerInfo] = useState({
    BannerTitle: "Explore the Power of Tattooscan",
    backgroundImage: "/images/services/service-bg.png",
    paragraph: "Tattooscan is more than just an app—it’s a transformative tool that enhances your tattoo experience, connects you with artists, and brings the stories behind your ink to life. Discover the innovative features that make Tattooscan the ultimate platform for tattoo enthusiasts and artists alike."
  });
  const [apiState, setApiState] = useState(0);
  // const serviceBannerInfo = {
  //   BannerTitle: "Explore the Power of Tattooscan",
  //   backgroundImage: "/images/services/service-bg.png",
  //   paragraph: "Tattooscan is more than just an app—it’s a transformative tool that enhances your tattoo experience, connects you with artists, and brings the stories behind your ink to life. Discover the innovative features that make Tattooscan the ultimate platform for tattoo enthusiasts and artists alike."
  // }

  const getContents = async () => {
    let slug = 'features';
    const apiData = await getApiContents(slug);
    dispatch(setData({ name: slug, data: apiData }));
    setApiState(1);
  }

  useEffect(() => {
    getContents();
  }, []);

  useEffect(() => {
    setServiceBannerInfo({
      ...serviceBannerInfo,
      BannerTitle: featureData?.section_1_title,
      backgroundImage: featureData?.section_1_bg_image,
      paragraph: featureData?.section_1_desc,
    })
  }, [apiState])

  return (
    <>
      <InnerBannerOne {...serviceBannerInfo} />
      <SecFeatures/>
    </>
  )
}

export default Services