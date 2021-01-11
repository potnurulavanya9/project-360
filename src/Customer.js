import React from "react";
import Container from "react-bootstrap/Container";
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from "./InProgress/Dashboard";
import Registration from "./Registration";

const Customer = () => {
    return (
        <div className="p-2 m-4 content-bg-color">
            <Container className="p-2 mx-2 shadow" fluid>
                <Switch>
                    <Route path="/Registration" component={Registration} />
                    <Route exact path="/">
                        <Redirect to="/Registration" />
                    </Route>
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route>
                        <Redirect to="/Dashboard" />
                    </Route>
                </Switch>
            </Container>
        </div>
     );
};

export default Customer;
