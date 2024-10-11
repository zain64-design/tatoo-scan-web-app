import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Image from '../UI/Image';
import logo from '/images/logo-header.png'
import '../../assets/scss/layout/header.scss'
import useHandleScroll from '../../utils/hooks/useHandleScroll';
import Links from './Links';

const Header = () => {
    const scrolled = useHandleScroll();
    return (
        <header className={`fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className='header-btm'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <NavLink className='navbar-brand' to="/">
                            <Image src={logo} className="logo" alt="logo" />
                        </NavLink>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Links/>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}

export default Header