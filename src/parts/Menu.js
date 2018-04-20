import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';

export class Menu extends Component{
    render(){
        return(
            <Row>
            <Col md={12} className="text-center menu-item-class">Item 1</Col>
            <Col md={12} className="text-center menu-item-class">Item 2</Col>
            <Col md={12} className="text-center menu-item-class">Item 3</Col>
            <Col md={12} className="text-center menu-item-class">Item 4</Col>
            </Row>
        );
    }
};