import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import classNames from 'classnames';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.scss';
import Customer from './Customer';

const Home = () => {
    let [menu, showMenu] = useState(true);
    let [colLeft, setColLeft] = useState(2);
    let [colRight, setColRight] = useState(10);

    const onMenuChange = () => {
        showMenu(!menu);
    };

    useEffect(() => {
        setColLeft(menu ? 2 : 0);
        setColRight(menu ? 10 : 12);
    }, [menu]);

    const showSidebar = classNames("d-flex g-0", {
        "toggled": menu
    });
    return (
        <>
            <Row className={showSidebar}>
                {menu && (
                    <Col sm={colLeft} className="sidebar bg-dark">
                        <Sidebar menu/>
                    </Col>
                )}
                <Col sm={colRight}  className="page-container">
                    <Header onMenuChange={onMenuChange}/>
                    <Customer />
                </Col>
            </Row>
        </>
    );

};

export default Home;