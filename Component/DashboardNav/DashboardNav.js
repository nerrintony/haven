import css from './DashboardNav.module.scss';
import React from 'react';
import { useState } from 'react';
import { Bell } from 'react-bootstrap-icons';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
const DashboardNav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen) }

    return (
        <>
            <Navbar className={`${css['bg-color']} py-lg-2 py-0`} expand="lg">
                <NavbarBrand href="/" className='d-block d-lg-none'>
                    <div className={`h-100 align-items-center d-flex`}>
                        <img src={'assets/logo.png'} className={`${css['logo-img-circle']} rounded-circle`} />
                        <span className={`${css['text-color']} fw-bold fs-1 mx-3`}>Haven</span>
                    </div>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} className='ms-auto' />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className={`mx-5 d-lg-block d-none`} navbar>
                        <NavItem>
                            <input type='search' placeholder='Search' className={`form-control px-5 bg-white rounded-5 ${css['search-icon']}`} />
                        </NavItem>
                    </Nav>
                    <Nav className={`fs-5 mx-3 ms-auto`} navbar>
                        <NavItem className='d-lg-block d-none'>
                            <NavLink href='#'>
                                <button className='border-0 btn rounded-circle'>
                                    <Bell fill='black' width={30} height={30} />
                                    <span className="badge bg-secondary rounded-circle top-0 float-end">1</span>
                                </button>
                            </NavLink>
                        </NavItem>
                        <NavItem className='pt-md-2'>
                            <NavLink href='#' className='px-0'>Sign Out</NavLink>
                        </NavItem>
                        <NavItem className='pt-md-2 d-block d-lg-none'>
                            <NavLink href='#'>Files</NavLink>
                        </NavItem>
                        <NavItem className='pt-md-2 d-block d-lg-none'>
                            <NavLink href='#'>Messages</NavLink>
                        </NavItem>
                        <NavItem className='pt-md-2 d-block d-lg-none'>
                            <NavLink href='#'>People</NavLink>
                        </NavItem>
                        <NavItem className='pt-md-2 d-block d-lg-none'>
                            <NavLink href='#'>Mailbox</NavLink>
                        </NavItem>
                        <NavItem className='pt-md-2 d-block d-lg-none'>
                            <NavLink href='#'>App Menu</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default DashboardNav;