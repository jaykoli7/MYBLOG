import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';

export class Bottom extends Component{
    render(){
        return(
            <footer className="footer">
            <Col className="container text-center">
              <span className="text-muted">&copy; Jay Koli</span>
            </Col>
          </footer>
        );
    }
}