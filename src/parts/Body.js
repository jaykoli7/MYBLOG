import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export class Body extends Component{
    render(){
        return(
            <Row className="bd-example">
            <Row className="card-group">
              <Col className="card">
                <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" src="https://static.toiimg.com/thumb/msid-61054900,width-640,resizemode-4/61054900.jpg"/>
                <Col className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">{new Date().toLocaleDateString('en-US', options)}</small></p>
                </Col>
              </Col>
              <Col className="card">
                <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" src="https://static.toiimg.com/thumb/msid-61054900,width-640,resizemode-4/61054900.jpg"/>
                <Col className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">{new Date().toLocaleDateString('en-US', options)}</small></p>
                </Col>
              </Col>
              <Col className="card">
                <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" src="https://static.toiimg.com/thumb/msid-61054900,width-640,resizemode-4/61054900.jpg"/>
                <Col className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p className="card-text"><small className="text-muted">{new Date().toLocaleDateString('en-US', options)}</small></p>
                </Col>
              </Col>
            </Row>
            </Row>
        );
    }
}