import React, { Component } from 'react'

import {
    Col,
    Row,
} from "react-bootstrap";

export default class HomeFooter extends Component {
    render() {
        return (
            <div className="home-footer">
                <Row>
                    <Col>About</Col>
                    <Col>Accessibility</Col>
                    <Col>Help Center</Col>
                </Row>
                <Row style={{ marginTop: '5px' }}>
                    <Col>Privacy & Terms</Col>
                    <Col>Ad Choises</Col>
                    <Col>Advertising</Col>
                </Row>
                <Row style={{ marginTop: '5px' }}>
                    <Col>Business Services</Col>
                    <Col>Get the Linkedin pp</Col>
                </Row>
            </div>
        )
    }
}
