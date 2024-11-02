import React from 'react';
import css from './Nav.module.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className={`${css['bg-color']} py-0`} expand="lg">
                    <NavbarBrand href="/">
                        <div className={`d-flex justify-content-center align-items-center`}>
                            <img src={'assets/logo.png'} className={`${css['logo-img-circle']} rounded-circle mx-2`} />
                            <div className={`fs-1 fw-bold ${css['text-color']}`}>
                                    Haven
                            </div>
                        </div>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={`mx-auto gap-xl-5 gap-lg-3 fs-5 `} navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Our Services
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Health Insurance
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Accident Insurance
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Property Insurance
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Adventure Insurance
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Life Insurance
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Crop Insurance
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="./tandc">Terms & Conditions</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="./about">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="./contact">Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className={`fs-5`} navbar>
                            <NavItem>
                                <NavLink href='#'>Sign Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}