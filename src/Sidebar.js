import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import classNames from 'classnames';
import './App.scss';
import Navbar from 'react-bootstrap/Navbar';
import globe from "./images/globe.svg";
import person from "./images/person.svg";
import wallet from "./images/wallet.svg";
import grid from "./images/grid.svg";
import search from "./images/search.svg";
import table from "./images/table.svg";

const Sidebar = ({menu}) => {
    
    const showSidebar = classNames("sticky-header flex-column sidebar__align", {
        "sidebar__show": menu,
        "move-to-left": !menu
    });
    return (
        <Navbar className={showSidebar}>
            <Nav.Link className="list-group-item sidebar__label bg-light text-dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={globe}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                Project 360
            </Nav.Link>
            <Nav.Link href="/Registration" eventKey="link-1" className="list-group-item sidebar__label bg-dark">
                 <Navbar.Brand >
                    <img
                        alt=""
                        src={person}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                Customer 360
            </Nav.Link>
            <Nav.Link href="/Dashboard" className="list-group-item sidebar__label bg-dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={globe}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                Dashboard
            </Nav.Link>
            <Nav.Link href="/Dashboard" eventKey="link-2" className="list-group-item sidebar__label bg-dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={wallet}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                Business 360
            </Nav.Link>
            <Nav.Link href="/Dashboard" eventKey="link-3" className="list-group-item sidebar__label bg-dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={grid}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                Product 360
            </Nav.Link>
            <Nav.Link href="/Dashboard" eventKey="link-4" className="list-group-item sidebar__label bg-dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={search}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                Search Here
            </Nav.Link>
            <Nav.Link href="/Dashboard" eventKey="link-5" className="list-group-item sidebar__label bg-dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={search}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                Appinfo Search
            </Nav.Link>
            <Nav.Link href="/Dashboard" eventKey="link-8" className="list-group-item sidebar__label bg-dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={grid}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                Business Bureau
            </Nav.Link>
            <Nav.Link href="/Dashboard" eventKey="link-2" className="list-group-item sidebar__label bg-dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={table}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                Booking
            </Nav.Link>
        </Navbar>
     );
};

export default Sidebar;
