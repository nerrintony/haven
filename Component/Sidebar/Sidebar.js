import { Person, Folder, MenuApp, AppIndicator, Mailbox, EnvelopeCheck, App } from 'react-bootstrap-icons';
import { Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { useState } from 'react';
import css from './Sidebar.module.scss';

const Sidebar = () => {

    return (
        <>
            <div className={`${css['bg-color']} text-center h-100`}>
                <NavbarBrand href="#" className='m-5'>
                    <div className={`pt-3`}>
                        <img src={'assets/logo.png'} className={`${css['logo-img-circle']} rounded-circle mx-3`} />
                    </div>
                </NavbarBrand>
                <Nav vertical className='mt-5'>
                    <NavItem className='my-3'>
                        <NavLink href="#">
                            <button className='btn rounded-circle'>
                                <Person width={30} fill='grey' height={30} title='Person' />
                            </button>
                        </NavLink>
                    </NavItem>
                    <NavItem className='my-3'>
                        <NavLink href="#">
                            <button className='btn rounded-circle'>
                                <Folder fill='grey' width={30} height={30} title='Folder' />
                            </button>
                        </NavLink>
                    </NavItem>
                    <NavItem className='my-3'>
                        <NavLink href="#">
                            <button className='btn rounded-circle'>
                                <MenuApp fill='grey' width={30} height={30} title='App Menu' />
                            </button>
                        </NavLink>
                    </NavItem>
                    <NavItem className='my-3'>
                        <NavLink>
                            <button className='btn rounded-circle'>
                                <AppIndicator fill='grey' width={30} height={30} title='App' />
                            </button>
                        </NavLink>
                    </NavItem>
                    <NavItem className='my-3'>
                        <NavLink>
                            <button className='btn rounded-circle'>
                                <Mailbox fill='grey' width={30} height={30} title='Mailbox' />
                            </button>
                        </NavLink>
                    </NavItem>
                    <NavItem className='my-3'>
                        <NavLink>
                            <button className='btn rounded-circle'>
                                <EnvelopeCheck fill='grey' width={30} height={30} />
                            </button>
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className='justify-content-center align-items-end h-25'>
                    <NavItem>
                        <NavLink>
                            <button className='btn rounded-circle'>
                                <App fill='grey' width={30} height={30} />
                            </button>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>

        </>
    );
}

export default Sidebar;