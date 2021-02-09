import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import {
    ListItem,
    Divider,
  } from "@material-ui/core";
  import "../Styles/Activity.css";


  export default function Activity() {
        return (
            <>
                <div className="mt-3">
                    <Card className="activity-card-container">
                        <Card.Body className="mx-2">
                            <Col>
                                <Row className="justify-content-between">
                                    <Card.Title classname="general-card-title">Activity</Card.Title>
                                    <span>

                                    </span>
                                </Row>
                                <Row>
                                    <Card.Text>
                                        Posts you created, shared, or commented on in the last 90 days are displayed here.
                                    </Card.Text>
                                </Row>
                            </Col>

                        </Card.Body>
                    <Divider light />
        <ListItem
          button="primary"
          component="a"
          href="#"
          className="show-more-list-link justify-content-center"
        >
          Show more on LinkedIn
        </ListItem>

        </Card>

                    
                </div>
            </>
        )
    }

