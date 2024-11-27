import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { getApiContents } from '../../utils/helper'
import { setData } from '../../redux/features/contentSlice'
import { useDispatch } from 'react-redux'

const Layout = () => {
  const dispatch = useDispatch();
  const getContents = async () => {
    let slug = 'config';
    const apiData = await getApiContents(slug);
    dispatch(setData({ name: slug, data: apiData }));
  }

  useEffect(() => {
    getContents();
  }, [])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout