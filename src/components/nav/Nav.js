import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Nav.css';
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
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {CartIcon} from './CartIcon';
import Logo from './icon_logo.svg'

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light className="justify-content-center" expand="md">

                <NavbarBrand href="/">
                    <img
                        src={Logo}
                        width="125"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/about" activeClassName="active">Quienes Somos</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Objetos
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink tag={RRNavLink} to="/category/1" activeClassName="active">Deco</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={RRNavLink} to="/category/2" activeClassName="active">Hogar</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={RRNavLink} to="/category/3" activeClassName="active">Uso personal</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={RRNavLink} to="/category/4" activeClassName="active">Escritorio</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink tag={RRNavLink} to="/category/5" activeClassName="active">Best sellers</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/contacto" activeClassName="active">Contacto</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/registro" activeClassName="active">Registrarse</NavLink>
                        </NavItem>
                        <NavItem>
                            {/*<Form inline>
                                <Input type="search" name="search" id="exampleSearch" placeholder="Buscar" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>*/}
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <CartIcon />
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;