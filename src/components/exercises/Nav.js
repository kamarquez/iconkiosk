import React, { useState, useEffect } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {getFirestore} from '../../firebase'
import './Nav.css';
import '../Loading/Loading'
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
import Loading from "../Loading/Loading";
import Item from "../store/item/Item";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(()=>{
        setLoading(true)
        const db = getFirestore();
        const categoriesCollection = db.collection("categories");
        categoriesCollection.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("no results")
                }
                setCategories(querySnapshot.docs.map(doc => {
                    return ({id: doc.id, ...doc.data()})
                }));
            }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(()=>{
            setLoading(false);
            console.log(loading);
        })
    },[]);

    if (loading) {
        return <Loading />;
    }else{
        return (
            <div>
                <Navbar color="light" light className="justify-content-center" expand="md">
                    <div className="container">
                    <NavbarBrand tag={RRNavLink} to="/">
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
                                        <NavLink tag={RRNavLink} to="/category/1" activeClassName="active">Best sellers</NavLink>
                                    </DropdownItem>
                                    {categories.map((category) =>
                                        <DropdownItem key={category.id} >
                                        <NavLink tag={RRNavLink} to={`/category/${category.id}`} activeClassName="active">{category.name}</NavLink>
                                        </DropdownItem>
                                    )}
                                    <DropdownItem divider />

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
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;