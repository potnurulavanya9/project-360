import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";

const UserForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-1 mt-2">
            <Form.Row>
                <Form.Label><strong>Basic Info</strong></Form.Label>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Row><Form.Label>SSN{" "}*</Form.Label></Form.Row>
                    <Form.Control
                        required
                        type="text"
                        placeholder="SSN"
                        defaultValue=""
                    />
                    <Form.Control.Feedback  type="invalid">Please choose SSN</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Row><Form.Label>SSN2{" "}*</Form.Label></Form.Row>
                    <Form.Control
                        required
                        type="text"
                        placeholder="SSN2"
                        defaultValue=""
                    />
                    <Form.Control.Feedback  type="invalid">Please choose SSN2</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Row><Form.Label>ITIN</Form.Label></Form.Row>
                    <Form.Control
                        type="text"
                        placeholder="ITIN"
                        defaultValue="7166856325"
                        disabled
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Button type="">Click here if you are already customer to a bank</Button>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Row><Form.Label>First Name{" "}*</Form.Label></Form.Row>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue=""
                    />
                    <Form.Control.Feedback  type="invalid">Please enter First name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Row><Form.Label>Middle name</Form.Label></Form.Row>
                    <Form.Control
                        type="text"
                        placeholder="Last name"
                        defaultValue=""
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Row><Form.Label>Last name{" "}*</Form.Label></Form.Row>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue=""
                    />
                    <Form.Control.Feedback  type="invalid">Please enter Last name</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="dob">
                    <Form.Row><Form.Label>Date Of Birth (DD/MM/YYYY)</Form.Label></Form.Row>
                    <Form.Control required type="date" name="dob" placeholder="Date of Birth" />
                    <Form.Control.Feedback  type="invalid">Please enter DOB</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Label><strong>Customer Address</strong></Form.Label>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Row><Form.Label>Country{" "}*</Form.Label></Form.Row>
                <Form.Control as="select" required>
                    <option>India</option>
                    <option>USA</option>
                    <option>UAE</option>
                    <option>UK</option>
                    <option>Canada</option>
                </Form.Control>
            </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Row><Form.Label>Residential Address Line 1{" "}*</Form.Label></Form.Row>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Residential Address 1"
                        defaultValue=""
                    />
                    <Form.Control.Feedback  type="invalid">Please enter Residential Address</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Row><Form.Label>Apt No.{" "}*</Form.Label></Form.Row>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Apt No"
                        defaultValue=""
                    />
                    <Form.Control.Feedback  type="invalid">Please enter Apt No</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Row><Form.Label>Residential Address Line 2</Form.Label></Form.Row>
                    <Form.Control
                        type="text"
                        placeholder="Residential Address 2"
                        defaultValue=""
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Row><Form.Label>City{" "}*</Form.Label></Form.Row>
                    <Form.Control
                        required
                        type="text"
                        placeholder="City"
                        defaultValue=""
                    />
                    <Form.Control.Feedback  type="invalid">Please enter City</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Row><Form.Label>State{" "}*</Form.Label></Form.Row>
                    <Form.Control as="select" required>
                        <option>GA</option>
                        <option>CA</option>
                        <option>KN</option>
                        <option>NY</option>
                        <option>AB</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Row><Form.Label>Zipcode{" "}*</Form.Label></Form.Row>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Zipcode"
                        defaultValue=""
                    />
                    <Form.Control.Feedback  type="invalid">Please enter Zipcode</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
        </Form>
    );
};

export default UserForm;