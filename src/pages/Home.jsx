import React, { useEffect } from 'react'
import SecHomeBanner from '../components/HomeBanner/SecHomeBanner'
import CTABannerTwo from '../components/HomeBanner/CTABannerTwo'
import SecHomeAbout from '../components/About/SecHomeAbout'
import CTABannerOne from '../components/HomeBanner/CTABannerOne'
import SecHomeGallery from '../components/Gallery/SecHomeGallery'
import CTABannerThree from '../components/HomeBanner/CTABannerThree'
import SecTestimonials from '../components/Testimonials/SecTestimonials'
import { setData } from '../redux/features/contentSlice'
import { getApiContents } from '../utils/helper'
import { useDispatch } from 'react-redux'
import useAOS from '../utils/hooks/useAOS'

const Home = () => {
  const dispatch = useDispatch();
  const getContents = async () => {
    let slug = 'home';
    const apiData = await getApiContents(slug);
    dispatch(setData({ name: slug, data: apiData }));
  }

  useEffect(() => {
    getContents();
  }, []);

  return (
    <>
    <SecHomeBanner/>
    <SecHomeAbout/>
    <CTABannerOne/>
    <SecHomeGallery/>
    <CTABannerTwo/>
    <SecTestimonials/>
    <CTABannerThree/>
    </>
  )
}

export default Home