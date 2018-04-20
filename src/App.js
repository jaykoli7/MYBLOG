import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/style.css';
import { Head } from './parts/Head';
import { Body } from './parts/Body';
import { Menu } from './parts/Menu';
import { Bottom } from './parts/Bottom';
import { Button, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
            <Row>
            	<Col md={12}>
              		<Head />
             	</Col>
              	<Row md={12}>
                	<Col md={10}>
                  		<Body />
                	</Col>
                	<Col md={2}>
                  		<Menu />
                	</Col>
              	</Row>
                <Col md={12}>
              		<Bottom />
              	</Col>
            </Row>
          );
        }
}

export default App;
