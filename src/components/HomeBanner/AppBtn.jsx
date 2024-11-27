import React from 'react';
import { NavLink } from 'react-router-dom';
import appBtn from '/images/home/app-btn.png';
import Image from '../UI/Image';
import playBtn from '/images/home/play-btn.png';
import { useSelector } from 'react-redux';

const AppBtn = () => {
  const configData = useSelector(state => state.cmsContent)?.config;
    return (
        <>
            <div className="btn-flex">
                <NavLink to={configData?.app_store_link} className="links">
                    <Image src={appBtn} className="img-fluid thumb" alt="App Button" />
                </NavLink>
                <NavLink to={configData?.play_store_link} className="links">
                    <Image src={playBtn} className="img-fluid thumb" alt="Play Button" />
                </NavLink>
            </div>
        </>
    )
}

export default AppBtn