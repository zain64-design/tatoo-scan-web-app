import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { getApiContents } from '../../utils/helper'
import { setData } from '../../redux/features/contentSlice'
import { useDispatch } from 'react-redux'
import RouteLoader from '../Loader/RouteLoader'

const Layout = () => {
  const dispatch = useDispatch();
  const [apiState, setApiState] = useState(false);
  const getContents = async () => {
    let slug = 'config';
    const apiData = await getApiContents(slug);
    dispatch(setData({ name: slug, data: apiData }));
    setApiState(true);
  }

  useEffect(() => {
    getContents();
  }, [])

  if(!apiState) return <RouteLoader />

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