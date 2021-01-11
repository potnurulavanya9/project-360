import React, {useState} from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import axios from 'axios';
import ProductInfo from "./ProductInfo";
import UserForm from "./UserForm";

const Registration = () => {
    let [show, setShow] = useState(true);
    const [user, setUser] = useState(null);
    const apiURL= "https://randomuser.me/api?results=10";
    const updateShow = async (e) => {
        setShow(e.target.name === "customer" ? true : false);
        const response = await axios.get(apiURL);
        setUser(response.data.results);
    };
    return (
        <>
            <Navbar bg="primary" className="p-2 mt-2 navbar-tab">
                <Nav variant="tabs"  defaultActiveKey="/Customer">
                    <Nav.Link name="customer" onClick={updateShow}>Customer Details</Nav.Link>
                    <Nav.Link name="product" onClick={updateShow}>Contacts</Nav.Link>
                </Nav>
            </Navbar>
            {show ? <UserForm /> : <ProductInfo user={user} />}
        </>   
    );
};

export default Registration;