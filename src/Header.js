import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import list from "./images/list.svg";
import './App.scss';
import profile from "./images/profile.png";

const Header = ({ onMenuChange }) => {
    return (
            <header className="sticky-header c-header">
                <Navbar bg="light" className="text-dark" expand="lg" expanded>
                    <Navbar.Brand href="#home" onClick={onMenuChange}>
                    <img
                        alt=""
                        src={list}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/Manageapp">Manage Applications</Nav.Link>
                        <NavDropdown title="Manage Masters" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Link1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/Link1">Management</NavDropdown.Item>
                            <NavDropdown.Item href="/Link1">Update</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Link1">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Reports" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Link1">Statement</NavDropdown.Item>
                            <NavDropdown.Item href="/Link1">Balance</NavDropdown.Item>
                            <NavDropdown.Item href="/Link1">Bill Payment</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Link1">Credit card</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            lavanya@gmail.com{" "}
                        </Navbar.Text>
                        <img
                            alt=""
                            src={profile}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Collapse>
                </Navbar>
                <Navbar bg="light" className="text-dark card-subheader px-3 border-navbar shadow rounded" expand="lg" expanded>
                    <Navbar.Text>Application</Navbar.Text>
                </Navbar>
            </header>
    );
};

export default Header;