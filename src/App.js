import { React } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import {Container, Row, Col} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
